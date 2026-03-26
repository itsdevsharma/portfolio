import { useState, useEffect, useRef } from "react";
import { FileText, Download, Upload, Check, AlertCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const highlights = [
  "Backend-focused engineer with strong API design and data modeling experience.",
  "Hands-on with Node.js, Express, TypeScript, PostgreSQL, and MongoDB.",
  "Production experience with Docker, cloud deployments, and performance tuning.",
];

const ResumeSection = () => {
  const [resumeExists, setResumeExists] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/resume/info`)
      .then((res) => res.json())
      .then((data) => setResumeExists(data.exists))
      .catch(() => setResumeExists(false));
  }, []);

  const handleUpload = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file) return setUploadMsg("Please select a file");
    if (!adminKey) return setUploadMsg("Enter admin key");

    setUploading(true);
    setUploadMsg("");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch(`${API_URL}/api/resume/upload`, {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setUploadMsg("Resume uploaded!");
      setResumeExists(true);
      setShowUpload(false);
      setAdminKey("");
    } catch (err) {
      setUploadMsg(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-gradient font-mono text-sm block mb-2">// resume</span>
          Resume Snapshot
        </h2>

        <div className="card-gradient rounded-2xl border border-border p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Dev Sharma</h3>
                  <p className="text-muted-foreground text-sm">Backend & Full Stack Developer</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-3">
              {resumeExists ? (
                <a
                  href={`${API_URL}/api/resume`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-shadow"
                >
                  <Download size={16} /> View Resume
                </a>
              ) : (
                <p className="text-muted-foreground text-sm font-mono">Resume coming soon...</p>
              )}
              <button
                onClick={() => setShowUpload(!showUpload)}
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <Upload size={14} /> Admin Upload
              </button>
            </div>
          </div>

          {showUpload && (
            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <input
                type="file"
                ref={fileRef}
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-colors"
              />
              <input
                type="password"
                placeholder="Admin Key"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="w-full max-w-xs px-4 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono text-sm"
              />
              <div className="flex items-center gap-3">
                <button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {uploading ? "Uploading..." : "Upload"}
                </button>
                {uploadMsg && (
                  <span className={`inline-flex items-center gap-1 text-sm ${uploadMsg.includes("uploaded") ? "text-green-500" : "text-destructive"}`}>
                    {uploadMsg.includes("uploaded") ? <Check size={14} /> : <AlertCircle size={14} />}
                    {uploadMsg}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
