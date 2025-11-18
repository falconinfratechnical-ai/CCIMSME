import nodemailer from "nodemailer";

export const SendEmail = async (subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // Important for Render
      }
    });

    return await transporter.sendMail({
      from: `"CCIMSME Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject,
      html
    });

  } catch (error) {
    console.error("Nodemailer Error:", error);
    throw error;
  }
};
