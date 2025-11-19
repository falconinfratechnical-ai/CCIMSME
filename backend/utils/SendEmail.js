import { Resend } from "resend";

export const SendEmail = async (subject, html) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not defined in environment variables");
    }

const response = await resend.emails.send({
  from: "CCIMSME <onboarding@resend.dev>",
  to: process.env.EMAIL_TO,
  subject,
  html,
});

    console.log("✅ Email sent successfully:", response.id);
    return response;
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    throw error;
  }
};