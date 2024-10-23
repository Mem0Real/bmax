"use server";

import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, text, html }) {
	try {
		const transporter = nodemailer.createTransport({
			host: "mail.b-maxautosolutions.com",
			port: "465",
			secure: true, // true for 465, false for other ports
			auth: {
				user: "info@b-maxautosolutions.com",
				pass: "L3g3n...dary1",
			},
			tls: {
				rejectUnauthorized: false,
			},
			logger: true, // Enable logging
			debug: true, // Enable debug output
		});

		const mailOptions = {
			from: "info@b-maxautosolutions.com", // sender address
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
