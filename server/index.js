import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { Resend } from "resend";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, ".env") });

const app = express();

// REQUIRED for Render
app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const emailLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend is running");
});

app.post("/send-email", emailLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  if (!resend || !process.env.RECEIVER_EMAIL) {
    return res.status(500).json({
      success: false,
      message: "Email service is not configured. Please set RESEND_API_KEY and RECEIVER_EMAIL.",
    });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL],
      replyTo: email,
      subject: subject || "New Portfolio Contact",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});