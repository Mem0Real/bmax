"use server";

import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, text, html }) {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.SMTP_USER, // sender address
			to, // list of receivers
			subject, // Subject line
			text, // plain text body
			html, // html body
		};

		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent:", info.messageId);
		return info;
	} catch (error) {
		console.error("Error sending email:", error);
		throw new Error("Failed to send email");
	}
}
