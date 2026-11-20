import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (name, email, subject, and message)." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // SMTP Credentials from environment variables
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const host = process.env.EMAIL_HOST || "smtp.gmail.com";
    const port = Number(process.env.EMAIL_PORT) || 465;
    const recipient = process.env.EMAIL_TO || user || "3buddysolutions@gmail.com";

    let transporter;

    if (user && pass) {
      transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });
    } else {
      // In development / testing without live SMTP credentials,
      // create an Ethereal test account so the form works out-of-the-box
      console.warn("EMAIL_USER or EMAIL_PASS not configured. Generating an Ethereal test account...");
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    // Send email
    const info = await transporter.sendMail({
      from: user ? `"3buddy Portfolio" <${user}>` : `"${name}" <${email}>`,
      to: recipient,
      replyTo: email,
      subject: `[3buddy Contact] ${subject} - from ${name}`,
      text: `New Contact Form Message from 3buddy Portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 3px solid #111; border-radius: 12px; background-color: #F5F3EA;">
          <div style="background-color: #FFD633; padding: 16px 20px; border: 2px solid #111; border-radius: 8px; margin-bottom: 20px; box-shadow: 3px 3px 0 #111;">
            <h2 style="margin: 0; color: #111; font-size: 22px; font-weight: bold;">⚡ New Message from 3buddy Portfolio</h2>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff; border: 2px solid #111; border-radius: 8px; box-shadow: 3px 3px 0 #111;">
            <p style="margin-top: 0; font-size: 15px;"><strong>From:</strong> ${name}</p>
            <p style="font-size: 15px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #111; font-weight: bold;">${email}</a></p>
            <p style="font-size: 15px;"><strong>Subject:</strong> ${subject}</p>
            
            <hr style="border: none; border-top: 2px dashed #111; margin: 20px 0; opacity: 0.3;" />
            
            <p style="font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #555;">Message Content:</p>
            <div style="background-color: #fafafa; padding: 16px; border-left: 4px solid #FFD633; border: 1.5px solid #ddd; border-left-width: 4px; border-left-color: #FFD633; border-radius: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #222;">${message}</div>
            
            <p style="margin-top: 25px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; pt-3;">
              Sent via 3buddy portfolio contact form &bull; ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log("Nodemailer Preview URL:", previewUrl);
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
      previewUrl: previewUrl || null,
    });
  } catch (error) {
    console.error("Error sending email via Nodemailer:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please check SMTP settings or try again.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

