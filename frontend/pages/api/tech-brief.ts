import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type TechBriefRequestBody = {
  email: string;
  investmentRange?: string;
  message?: string;
  name: string;
  organization?: string;
  recaptchaToken: string;
};

const getSafeValue = (value: unknown): string => {
  if (typeof value !== "string") {
    return "Not provided";
  }

  const trimmedValue = value.trim();
  return trimmedValue || "Not provided";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed.");
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const {
    name,
    email,
    organization,
    investmentRange,
    message,
    recaptchaToken,
  } = req.body as TechBriefRequestBody;

  const normalizedName = typeof name === "string" ? name.trim() : "";
  const normalizedEmail = typeof email === "string" ? email.trim() : "";

  if (!normalizedName || !normalizedEmail) {
    return res.status(400).send("Name and email are required.");
  }

  if (!recaptchaToken) {
    return res.status(400).send("reCAPTCHA token is missing.");
  }

  try {
    const recaptchaBody = new URLSearchParams({
      response: recaptchaToken,
      secret: process.env.RECAPTCHA_SECRET_KEY || "",
    }).toString();

    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: recaptchaBody,
      },
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.log("reCAPTCHA verification failed:", recaptchaData);
      return res.status(400).send("reCAPTCHA verification failed.");
    }
  } catch (error) {
    console.log("reCAPTCHA verification error:", error);
    return res.status(500).send("reCAPTCHA verification error.");
  }

  const notificationEmail = {
    to: "elliott@coopallc.com",
    from: "info@accipitersystems.com",
    subject: `New Tech Brief Interest Submission - ${normalizedEmail}`,
    html: `
      <p>New Tech Brief investor interest submission received.</p>
      <br/>
      <p><strong>Name:</strong> ${normalizedName}</p>
      <p><strong>Email:</strong> ${normalizedEmail}</p>
      <p><strong>Organization / Investor Type:</strong> ${getSafeValue(organization)}</p>
      <p><strong>Investment Interest Range:</strong> ${getSafeValue(investmentRange)}</p>
      <p><strong>Message:</strong> ${getSafeValue(message)}</p>
    `,
  };

  try {
    await sgMail.send(notificationEmail);
    return res.status(200).send("Interest submitted successfully.");
  } catch (error) {
    console.log("ERROR", error);
    return res.status(500).send("Message not sent.");
  }
}
