import nodemailer from "nodemailer";

export const SendEmail = async (subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,  
      pass: process.env.EMAIL_PASS,  
    },
  });

  return transporter.SendMail({
    from: `"CCIMSME Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,  
    subject,
    html,
  });
};
