"use client";

import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useIcons } from "../components/CustomIcons";

export default function KeyReplace() {
	const [selectedOne, setSelectedOne] = useState("");
	const [selectedTwo, setSelectedTwo] = useState("");

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

	const dropData2 = [
		{
			id: "afford",
			name: "Affordable Car Key Replacement",
			nest: "Are you searching for an affordable car key replacement service near you? Look no further. At B-Max, we understand the importance of cost-effective solutions. Our budget-friendly car key cutting services are designed to fit your wallet. When you need a car key replacement that won't break the bank, we're here for you. Don't compromise on quality for price, trust B-Max for reasonable car key replacement costs.",
		},
		{
			id: "lostSol",
			name: "Lost Car Key Solutions",
			nest: "Have you lost your car keys and find yourself wondering what to do next? B-Max has the answer. Our professional lost car key replacement services are at your disposal. We know how stressful losing car keys can be, and that's why we specialize in the recovery and fast replacement of lost car keys. Our skilled locksmiths are dedicated to providing fast, efficient, and hassle-free solutions. If you're seeking lost car key locksmith services, you've come to the right place. Don't stress, contact B-Max today.",
		},
		{
			id: "fob",
			name: "Key Fob Replacement",
			nest: "When it comes to key fob replacement services, B-Max is your trusted partner. Our expertise extends beyond traditional car keys to include keyless entry remotes and car key fob battery replacements. Wondering where to buy a key fob for your car? Look no further. B-Max is your one-stop destination for quality key fob solutions. If you've lost your key fob and need a replacement, or if your key fob battery needs changing, we're here to help. Keep your vehicle secure and operational with B-Max's key fob expertise.",
		},
	];
	return (
		<div className="px-4 xl:px-48 w-full min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 lg:gap-16">
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

				<div className="lg:basis-[60%] relative w-full h-[35rem]">
					<Image
						src="/images/replacement-page/landing.jpg"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col justify-center items-center py-12 gap-8 lg:gap-0">
				<h1 className="text-5xl font-semibold uppercase text-center">
					How to replace your car keys
				</h1>
				<p className="text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance">
					Whether you've lost your keys, need a spare, or require a damaged key
					replacement, trust us for efficient and professional assistance.
				</p>
			</div>
			{/* alternating */}
			<div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-3 lg:gap-4 pb-8">
				<div className="lg:basis-1/2 relative w-full h-[35rem]">
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
									className={`${
										selectedOne === id ? "bg-mellow" : "bg-mellow/50"
									} py-8 ps-4 pe-2 flex justify-between items-center cursor-pointer`}
									onClick={() =>
										setSelectedOne((prev) => (prev === id ? "" : id))
									}
									layout="position"
									transition={{
										type: "spring",
										stiffness: 600, // Higher values make it snappier
										damping: 100, // Higher values reduce the bounciness
									}}
								>
									<h1 className=" text-2xl font-semibold uppercase">{name}</h1>
									<h3 className="w-8 text-neutral-900">
										{selectedOne !== id ? PlusIcon : MinusIcon}
									</h3>
								</motion.div>

								<AnimatePresence>
									{selectedOne === id && (
										<motion.div
											key="dropdown"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ ease: "easeInOut", duration: 0.2 }}
											className="overflow-hidden w-[90%] mx-auto text-base"
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
			<div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-3 lg:gap-4 pb-8">
				<div className="order-2 lg:order-1 basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl font-bold uppercase">
						Reliable Replacement Services
					</h1>
					<p className="text-base text-neutral-950/90">
						Trust us for efficient, professional assistance, whether you've
						lost, need a spare, or require a damaged key replacement.
					</p>
					<div className="w-full flex flex-col justify-center items-stretch gap-2">
						{dropData2.map(({ id, name, nest }) => (
							<motion.div
								key={id}
								className="flex flex-col justify-center items-stretch gap-4"
								layout
							>
								<motion.div
									className={`${
										selectedTwo === id ? "bg-mellow" : "bg-mellow/50"
									} py-8 ps-4 pe-2 flex justify-between items-center cursor-pointer`}
									onClick={() =>
										setSelectedTwo((prev) => (prev === id ? "" : id))
									}
									layout="position"
									transition={{
										type: "spring",
										stiffness: 600, // Higher values make it snappier
										damping: 100, // Higher values reduce the bounciness
									}}
								>
									<h1 className=" text-2xl font-semibold uppercase">{name}</h1>
									<h3 className="w-8 text-neutral-900">
										{selectedTwo !== id ? PlusIcon : MinusIcon}
									</h3>
								</motion.div>

								<AnimatePresence>
									{selectedTwo === id && (
										<motion.div
											key="dropdown"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ ease: "easeInOut", duration: 0.2 }}
											className="overflow-hidden w-[90%] mx-auto text-base"
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
				<div className="order-1 lg:order-2 lg:basis-1/2 relative w-full h-[35rem]">
					<Image
						src="/images/replacement-page/key-bunch.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>
		</div>
	);
}
