// import { Resend } from "resend";

// export const SendEmail = async (subject, html) => {
//   try {
//     const resend = new Resend(process.env.RESEND_API_KEY);

//     if (!process.env.RESEND_API_KEY) {
//       throw new Error("RESEND_API_KEY is not defined in environment variables");
//     }

// const response = await resend.emails.send({
//   from: "CCIMSME <onboarding@resend.dev>",
//   to: process.env.EMAIL_TO,
//   subject,
//   html,
// });

//     console.log("✅ Email sent successfully:", response.id);
//     return response;
//   } catch (error) {
//     console.error("❌ Email send error:", error.message);
//     throw error;
//   }
// };

import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function appendToSheet(sheetId, values) {
  try {
    console.log("appendToSheet called", { sheetId, values, pid: process.pid, time: new Date().toISOString() });

    const keyFilePath =
      process.env.GOOGLE_SERVICE_ACCOUNT_FILE ||
      path.join(__dirname, "../shining-lamp-478710-s9-d0d36923cf9b.json");

    console.log("Google Sheet keyFile:", keyFilePath);
    console.log("Looking for key file at:", keyFilePath);
console.log("Exists?", fs.existsSync(keyFilePath));

    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    console.log("Google auth created, getting client...");
    const client = await auth.getClient();
    console.log("Google auth client obtained");

    const sheets = google.sheets({ version: "v4", auth: client });

    const appendRes = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    console.log("✅ Data appended to Google Sheet successfully", { spreadsheetId: sheetId, appendRes: appendRes?.data });
    return true;
  } catch (error) {
    console.error("❌ Google Sheet error:", error.message);
    console.error(error.stack);
    throw error;
  }
}
