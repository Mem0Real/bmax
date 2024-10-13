"use client";

import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useIcons } from "../components/CustomIcons";

export default function KeyReplace() {
	const [selected, setSelected] = useState("");

	const { PlusIcon, MinusIcon } = useIcons();

	const dropData1 = [
		{
			id: "lost",
			name: "Lost car key replacement",
			nest: "Lost your car keys? Don't worry; our services are available around the clock. Whether you're stranded or need a spare, our affordable and quick locksmiths are here to help. Don't let a lost key ruin your day. Contact us now.",
		},
		{
			id: "program",
			name: "Car key programming",
			nest: "For professional car key programming services, look no further. Our team specializes in transponder and smart key programming, ensuring seamless integration with your vehicle's security system. Wondering how to program a car key yourself? Save time and hassle by consulting our experts. When you need to program a new car key, we're the trusted choice.",
		},
		{
			id: "emergency",
			name: "Emergency car key replacement",
			nest: "Facing a car key emergency? We've got your back. Our 24/7 emergency car key replacement services are just a call away. Whether you've lost your car keys or require a swift replacement, our expert locksmiths are here to assist. Don't stress over lost keys; contact us for urgent car key replacement, anytime, anywhere.",
		},
	];
	return (
		<div className="px-4 md:px-12 xl:px-48 w-full min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 gap-16">
			<div className="w-full flex flex-col md:flex-row justify-center items-center">
				<div className="basis-[40%] flex flex-col justify-center items-start gap-8">
					<h1 className="text-5xl font-medium uppercase">
						Car Key Replacement
					</h1>
					<p className="text-base text-neutral-950/90">
						Lost your car keys? Trust B-Max for efficient car key replacement
						services by highly skilled locksmiths, using cutting-edge technology
						for swift solutions and getting you back on the road with your car
						keys intact. Trust B-Max for all your car key needs.
					</p>
				</div>

				<div className="basis-[60%] relative w-full h-[35rem]">
					<Image
						src="/images/replacement-page/landing.jpg"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col justify-center items-center py-12">
				<h1 className="text-5xl font-semibold uppercase text-center">
					How to replace your car keys
				</h1>
				<p className="text-base text-neutral-950/90">
					Whether you've lost your keys, need a spare, or require a damaged key
					replacement, trust us for efficient and professional assistance.
				</p>
			</div>
			<div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-3 lg:gap-4">
				<div className="basis-1/2 relative w-full h-[35rem]">
					<Image
						src="/images/replacement-page/keys.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
				<div className="basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl font-bold uppercase">
						Seamless Car Key Replacement Assistance
					</h1>
					<p className="text-base text-neutral-950/90">
						Seamless Car Key Replacement Assistance Seamless car key replacement
						with skilled locksmiths and advanced tech for a hassle-free
						experience.
					</p>
					<div className="w-full flex flex-col justify-center items-stretch gap-2">
						{dropData1.map(({ id, name, nest }) => (
							<motion.div
								key={id}
								className="flex flex-col justify-center items-stretch gap-4"
								layout
							>
								<motion.div
									className="bg-mellow/70 py-8 ps-4 pe-2 flex justify-between items-center cursor-pointer"
									onClick={() => setSelected((prev) => (prev === id ? "" : id))}
									layout="position"
									transition={{
										type: "spring",
										stiffness: 600, // Higher values make it snappier
										damping: 100, // Higher values reduce the bounciness
									}}
								>
									<h1 className=" text-2xl font-semibold uppercase">{name}</h1>
									<h3 className="w-8 text-neutral-900">
										{selected !== id ? PlusIcon : MinusIcon}
									</h3>
								</motion.div>

								<AnimatePresence>
									{selected === id && (
										<motion.div
											key="dropdown"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ ease: "easeInOut", duration: 0.2 }}
											className="overflow-hidden w-[80%] mx-auto"
											layout
										>
											{nest}
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
