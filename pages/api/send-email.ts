import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure the email transport using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // your Gmail account
    pass: process.env.GMAIL_PASS, // your Gmail app password
  },
});

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { senderEmail, message } = req.body;

    try {
      // Define email HTML using a template literal
      const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #f4f7f9;
      font-family: Arial, sans-serif;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .email-wrapper {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #e0e0e0;
    }
    .header {
      background-color: #007bff;
      color: #ffffff;
      padding: 15px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      font-size: 16px;
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #777;
      border-top: 1px solid #e0e0e0;
    }
    .footer p {
      margin: 0;
    }
    .footer a {
      color: #007bff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <h1>New Message from Your Portfolio Site</h1>
    </div>
    <div class="content">
      <p><strong>Sender:</strong> ${senderEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
    <div class="footer">
      <p>This email was sent from your portfolio site.</p>
      <p>For more information, visit our <a href="https://bento.me/kantle" target="_blank">website</a>.</p>
    </div>
  </div>
</body>
</html>
`;

      // Define email options
      const mailOptions = {
        from: senderEmail,
        to: process.env.GMAIL_USER,
        subject: "New message from portfolio site",
        html: emailHtml, // Use the generated HTML
      };

      // Send email using nodemailer
      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent: ", info.response); // Log the response from Gmail
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email: ", error); // Log the error
      res.status(500).json({ error: "Error sending email", details: (error as any).message });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}