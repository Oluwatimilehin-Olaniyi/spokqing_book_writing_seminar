// backend/server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email endpoint
app.post("/api/register", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Configure your email transporter (Gmail example with App Password)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "timiolaniyi10@gmail.com",
      pass: "uaar mukf xdrx rsqn", // not your regular Gmail password!
    },
  });

  const mailOptions = {
    from: email,
    to: "timiolaniyi10@gmail.com", // where you want to receive registrations
    subject: "New Seminar Registration",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
