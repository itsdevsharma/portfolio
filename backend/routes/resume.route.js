import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = Router();

const uploadsDir = path.resolve("uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    // Always save as "resume" + original extension so there's only one resume file
    const ext = path.extname(file.originalname);
    cb(null, `resume${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowed = [".pdf", ".doc", ".docx"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC, and DOCX files are allowed"));
    }
  },
});

// Upload resume (protected with a simple key)
router.post("/upload", upload.single("resume"), (req, res) => {
  const adminKey = req.headers["x-admin-key"];
  if (adminKey !== process.env.ADMIN_KEY) {
    // Delete the uploaded file if unauthorized
    if (req.file) fs.unlinkSync(req.file.path);
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({ message: "Resume uploaded successfully", filename: req.file.filename });
});

// Get resume (public)
router.get("/", (req, res) => {
  try {
    const files = fs.readdirSync(uploadsDir);
    const resumeFile = files.find((f) => f.startsWith("resume"));

    if (!resumeFile) {
      return res.status(404).json({ error: "No resume uploaded yet" });
    }

    res.sendFile(path.join(uploadsDir, resumeFile));
  } catch {
    res.status(404).json({ error: "No resume found" });
  }
});

// Check if resume exists (public)
router.get("/info", (req, res) => {
  try {
    const files = fs.readdirSync(uploadsDir);
    const resumeFile = files.find((f) => f.startsWith("resume"));

    if (!resumeFile) {
      return res.json({ exists: false });
    }

    const stats = fs.statSync(path.join(uploadsDir, resumeFile));
    res.json({
      exists: true,
      filename: resumeFile,
      size: stats.size,
      updatedAt: stats.mtime,
    });
  } catch {
    res.json({ exists: false });
  }
});

export default router;
