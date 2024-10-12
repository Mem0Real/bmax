"use client";

import React from "react";
import { useForm } from "@mantine/form";
import { Textarea, TextInput, Button } from "@mantine/core";

export default function SayHello() {
	const form = useForm({
		mode: "uncontrolled",
		initialValues: { name: "", email: "", message: "" },

		// functions will be used to validate values at corresponding key
		validate: {
			name: (value) =>
				value.length < 2 ? "Name must have at least 2 letters" : null,
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
			message: (value) =>
				value.length < 2 ? "Message must have at least 2 letters" : null,
		},
	});

	return (
		<div className="w-full px-12 xl:px-40">
			<div className="h-[60vh] flex justify-start items-center">
				<div className="w-[80%] mx-auto flex justify-start items-start gap-8">
					<div className="w-full flex flex-col justify-start items-start">
						<h1 className="text-5xl text-neutral-900 capitalize">Say Hello!</h1>
						<form
							className="h-56 w-full border border-black px-4 mt-5 flex flex-col gap-4 justify-center items-center"
							onSubmit={form.onSubmit(console.log("Sub"))}
						>
							<div className="flex gap-8">
								<TextInput
									variant="filled"
									label="Name"
									placeholder="Name"
									key={form.key("name")}
									{...form.getInputProps("name")}
								/>
								<TextInput
									variant="filled"
									mt="sm"
									label="Email"
									placeholder="Email"
									key={form.key("email")}
									{...form.getInputProps("email")}
								/>
							</div>
							<Textarea
								variant="filled"
								radius="md"
								placeholder="Input placeholder"
								key={form.key("message")}
								{...form.getInputProps("message")}
							/>
							<Button type="submit" mt="sm">
								Submit
							</Button>
						</form>
					</div>
					<div className="w-full flex flex-col justify-center items-start gap-4">
						<div className="invisible flex-1/4 h-8" />
						<div className="flex flex-col gap-2 pr-8">
							<h1 className="text-2xl font-semibold text-neutral-900 capitalize">
								Address
							</h1>
							<p className="text-neutral-700/50 text-base">Bottom text</p>
						</div>

						<div className="flex flex-col gap-2 pr-8">
							<h1 className="text-2xl font-semibold text-neutral-900 capitalize">
								Call us
							</h1>
							<p className="text-neutral-700/50 text-base">Bottom text</p>
						</div>

						<div className="flex flex-col gap-2 pr-8">
							<h1 className="text-2xl font-semibold text-neutral-900 capitalize">
								Email Us
							</h1>
							<p className="text-neutral-700/50 text-base">Bottom text</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
