import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (subject, html) => {
  try {
    const response = await resend.emails.send({
      from: "CCIMSME <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      subject,
      html,
    });

    console.log("Email sent:", response);
    return response;
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
};
