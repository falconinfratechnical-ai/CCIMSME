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
// import { google } from "googleapis";
// import path from "path";
// import { fileURLToPath } from "url";
// import fs from "fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export async function appendToSheet(sheetId, values) {
//   try {
//     console.log("📌 appendToSheet() called", { sheetId, values });

//     let credentials;

//     // =============================
//     // 1️⃣ PRIORITY: ENVIRONMENT JSON
//     // =============================
//     if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
//       console.log("🔐 Using GOOGLE_SERVICE_ACCOUNT_JSON from environment.");

//       try {
//         credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
//       } catch (err) {
//         console.error("❌ Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON:", err.message);
//         throw new Error("Invalid GOOGLE_SERVICE_ACCOUNT_JSON");
//       }
//     }

//     // ======================================
//     // 2️⃣ FALLBACK: LOCAL FILE FOR DEVELOPMENT
//     // ======================================
//     if (!credentials) {
//       const keyFilePath = path.join(
//         __dirname,
//         "../shining-lamp-478710-s9-d0d36923cf9b.json"
//       );

//       console.log("📁 Using local service account file:", keyFilePath);
//       console.log("📁 Exists?", fs.existsSync(keyFilePath));

//       if (!fs.existsSync(keyFilePath)) {
//         throw new Error("Service account JSON file missing locally.");
//       }

//       credentials = JSON.parse(fs.readFileSync(keyFilePath, "utf8"));
//     }

//     // =============================
//     // 3️⃣ GOOGLE AUTH CLIENT
//     // =============================
//     const auth = new google.auth.GoogleAuth({
//       credentials,
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     const client = await auth.getClient();
//     const sheets = google.sheets({ version: "v4", auth: client });

//     const appendRes = await sheets.spreadsheets.values.append({
//       spreadsheetId: sheetId,
//       range: "Sheet1",
//       valueInputOption: "USER_ENTERED",
//       requestBody: { values },
//     });

//     console.log("✅ Data successfully appended to Google Sheet");
//     return appendRes.data;

//   } catch (error) {
//     console.error("❌ Google Sheet Error:", error);
//     throw error;
//   }
// }
