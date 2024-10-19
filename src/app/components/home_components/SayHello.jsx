"use client";

import React from "react";

import { motion } from "framer-motion";

import { Rajdhani, Raleway } from "next/font/google";

const raleway = Raleway({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

const raj = Rajdhani({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});
export default function SayHello() {
	return (
		<div className="w-full px-2 md:px-4 xl:px-40 py-6 pb-8 md:py-12 xl:py-2">
			<div className="xl:h-[70vh] flex flex-col xl:flex-row justify-start items-center">
				<div className="w-full md:max-w-[50em] xl:max-w-[80em] mx-auto flex flex-col xl:flex-row  justify-start items-start gap-2 md:gap-4 xl:gap-8">
					<div className="w-full flex flex-col justify-start items-start gap-1 xl:gap-5">
						<h1
							className={`text-7xl text-neutral-900 uppercase ms-2 xl:ms-5 ${raj.className}`}
						>
							Say Hello!
						</h1>
						<form
							action=""
							className="h-full w-full px-2 mt-5 flex flex-col gap-4 justify-center items-center"
						>
							<div className="w-full flex flex-col sm:flex-row items-start gap-5">
								<input
									className="basis-1/2 shrink py-2 bg-neutral-200/60 rounded px-2"
									placeholder="Name"
								/>
								<input
									className="basis-1/2 shrink py-2 bg-neutral-200/60 rounded px-2"
									placeholder="Email"
								/>
							</div>
							<div className="w-full">
								<textarea
									className="w-full min-h-36 bg-neutral-200/60 rounded px-2"
									placeholder="Message"
								/>
							</div>

							<div className="self-start">
								<motion.h1
									whileHover={{
										backgroundColor: "#ee8f34",
										color: "#FFF",
									}}
									className="px-6 py-2 border border-mellow text-mellow font-bold cursor-pointer uppercase"
								>
									Send
								</motion.h1>
							</div>
						</form>
					</div>
					<div className="w-full flex flex-col md:flex-row md:flex-wrap xl:flex-col justify-center items-start gap-4">
						<div className="invisible h-8" />
						<div className="flex flex-col gap-2 pr-8">
							<h1
								className={`text-2xl font-semibold text-neutral-900 uppercase ${raj.className}`}
							>
								Address
							</h1>
							<p
								className={`text-neutral-900/90 text-base ${raleway.className}`}
							>
								Bottom text
							</p>
						</div>

						<div className="flex flex-col gap-2 pr-8">
							<h1
								className={`text-2xl font-semibold text-neutral-900 uppercase ${raj.className}`}
							>
								Call us
							</h1>
							<p
								className={`text-neutral-900/90 text-base ${raleway.className}`}
							>
								+251-911 71 77 95
							</p>
							<p
								className={`text-neutral-900/90 text-base ${raleway.className}`}
							>
								+251-910 40 98 15
							</p>
						</div>

						<div className="flex flex-col gap-2 pr-8">
							<h1
								className={`text-2xl font-semibold text-neutral-900 uppercase ${raj.className}`}
							>
								Email Us
							</h1>
							<p
								className={`text-neutral-900/90 text-base ${raleway.className}`}
							>
								info@b-maxautosolutions.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
