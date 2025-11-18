import nodemailer from "nodemailer";

export const SendEmail = async (subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    return await transporter.sendMail({
      from: `"CCIMSME Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject,
      html,
    });

  } catch (error) {
    console.error("Nodemailer Error:", error);
    throw error;
  }
};