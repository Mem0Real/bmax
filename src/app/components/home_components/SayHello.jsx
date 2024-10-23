"use client";

import React, { useState, useTransition } from "react";
import { sendEmail } from "@/app/utils/sendEmail";

import { motion } from "framer-motion";
import { notifications } from "@mantine/notifications";

import { raj } from "@/app/ui/fonts";

export default function SayHello() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isPending, startTransition] = useTransition();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		startTransition(() => {
			sendEmail({
				to: "bmaxautosolutions@gmail.com",
				subject: `New message from ${formData.name}`,
				text: formData.message,
				html: `<p>${formData.message}</p>`,
			})
				.then(() => {
					notifications.show({
						id: "success",
						position: "top-center",
						withCloseButton: true,
						autoClose: 5000,
						title: "Email sent successfully!",
						color: "green",
						className: "my-notification-class",
						loading: false,
					});
				})
				.catch((error) => {
					notifications.show({
						id: "failure",
						position: "top-center",
						withCloseButton: true,
						autoClose: 5000,
						title: "Failed to send email!",
						message: "Please try again later.",
						color: "red",
						className: "my-notification-class",
						loading: false,
					});
				});
		});
	};

	return (
		<div
			id="hello"
			className="w-full px-2 md:px-4 xl:px-40 py-6 pb-8 md:py-12 xl:py-2"
		>
			<div className="xl:h-[70vh] flex flex-col xl:flex-row justify-start items-center">
				<div className="w-full md:max-w-[50em] xl:max-w-[80em] mx-auto flex flex-col xl:flex-row  justify-start items-start gap-2 md:gap-4 xl:gap-8">
					<div className="w-full flex flex-col justify-start items-start gap-1 xl:gap-5">
						<h1
							className={`text-6xl text-neutral-900 font-bold uppercase ms-2 xl:ms-5 ${raj.className}`}
						>
							Say Hello!
						</h1>
						<form
							onSubmit={handleSubmit}
							className="h-full w-full px-2 mt-5 flex flex-col gap-4 justify-center items-center"
						>
							<div className="w-full flex flex-col sm:flex-row items-start gap-5">
								<input
									className="basis-1/2 shrink py-2 bg-neutral-200/60 rounded px-2"
									placeholder="Name"
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
								<input
									className="basis-1/2 shrink py-2 bg-neutral-200/60 rounded px-2"
									placeholder="Email"
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="w-full">
								<textarea
									className="w-full min-h-36 bg-neutral-200/60 rounded px-2"
									placeholder="Message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="self-start">
								<motion.button
									whileHover={
										!isPending
											? {
													backgroundColor: "#ee8f34",
													color: "#FFF",
											  }
											: {
													backgroundColor: "#737373",
													color: "#000",
											  }
									}
									type="submit"
									disabled={isPending}
									className="px-6 py-2 border border-mellow disabled:bg-neutral-500 text-mellow font-bold cursor-pointer uppercase"
								>
									{isPending ? "Sending..." : "Send"}
								</motion.button>
							</div>
						</form>
					</div>
					<div className="w-full flex flex-col md:flex-row md:flex-wrap xl:flex-col justify-center items-start gap-4">
						<div className="invisible h-8" />
						<div className="flex flex-col gap-2">
							<h1
								className={`text-2xl font-semibold text-neutral-900 uppercase ${raj.className}`}
							>
								Address
							</h1>
							<p className={`text-neutral-900/90 text-base`}>
								Addis Ababa, Meskel flower
							</p>
						</div>

						<div className="flex flex-col gap-2">
							<h1
								className={`text-2xl font-semibold text-neutral-900 uppercase ${raj.className}`}
							>
								Call us
							</h1>
							<p
								className={`text-lg text-neutral-900/90 text-center ${raj.className}`}
							>
								+251-911 71 77 95
							</p>
							<p
								className={`text-lg ps-3 text-neutral-900/90 text-center ${raj.className}`}
							>
								+251-910 40 98 15
							</p>
						</div>

						<div className="flex flex-col gap-2">
							<h1
								className={`text-2xl font-semibold text-neutral-900 uppercase ${raj.className}`}
							>
								Email Us
							</h1>
							<p className={`text-neutral-900/90 text-base`}>
								info@b-maxautosolutions.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
