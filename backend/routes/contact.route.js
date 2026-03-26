import { Router } from "express";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";
import Contact from "../models/contact.model.js";

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: "Too many messages sent. Please try again later." },
});

router.post("/", contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to database
    const contact = await Contact.create({ name, email, message });

    // Send email notification via Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="color: #888; font-size: 12px;">Sent from your portfolio contact form</p>
      `,
    });

    res.status(201).json({ message: "Message sent successfully", id: contact._id });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
