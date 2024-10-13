"use client";

import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useIcons } from "../components/CustomIcons";
import Link from "next/link";

const dropData1 = [
	{
		id: "afford",
		name: "Affordable Car Key Duplication",
		nest: "Are you looking for affordable car key duplication services that won't break the bank? Our low-cost car key duplication services provide budget-friendly solutions. We understand that losing or damaging your keys can be stressful, and replacing them shouldn't add to your worries. Whether you need a spare key or a replacement for a lost one, our efficient and accurate key duplication services have got you covered. We prioritize precision to ensure your key works seamlessly with your vehicle. Trust us for cheap car key copies that don't compromise on quality. Say goodbye to overpriced key duplication and hello to savings.",
	},
	{
		id: "quick",
		name: "Quick and Accurate Car Key Copy",
		nest: "We know that when you need a key duplicated, you need it fast. Our fast car key duplication services ensure you're back on the road without unnecessary delays. Accuracy is paramount when duplicating a key. Our experienced locksmiths take precision seriously to deliver an accurate car key copy that works flawlessly with your vehicle. Don't waste your time and money on inefficient services. We are dedicated to providing efficient key duplication that respects your time and ensures your satisfaction. Experience quick, accurate, and efficient key duplication with us.",
	},
	{
		id: "quality",
		name: "Quality Car Key Duplication",
		nest: "Your keys are essential for your daily routines. That's why we provide durable car key copies that won't let you down. When it comes to key duplication, experience matters. Trust our skilled locksmiths for the most experienced key duplication services. We've built our reputation on being a trusted key copy service that delivers quality and reliability. Our focus is on providing you with keys that are not only accurate but also long-lasting. If you want to ensure that your key works seamlessly with your vehicle and stands the test of time, choose our quality car key duplication services. Your satisfaction is our priority.",
	},
];

const dropData2 = [
	{
		id: "precise",
		name: "Precision Car Key Copies",
		nest: "Ensure your key duplication is precise with our precision car key copies. Precision is more than just a word to us; it's a commitment. When you choose our services, you can count on accurate key copies. Every key is carefully examined and cut with utmost precision. We understand the importance of a key that fits perfectly and works flawlessly with your vehicle. If you're in need of precise key duplication that prioritizes accuracy, don't hesitate to contact us. Our skilled locksmiths are ready to provide you with top-notch key copies tailored to your specific needs.",
	},
	{
		id: "kdt",
		name: "Key Duplication Technology",
		nest: "Key duplication isn't just a craft; it's also about using the right technology. We stay updated with the latest advancements in key duplication technology to ensure we provide efficient and accurate services. Our commitment to using state-of-the-art equipment and methods sets us apart as a tech-savvy key duplication service provider. Whether you have a traditional metal key, a transponder key, or even a smart key, we have the technology and expertise to duplicate it with precision. Trust us to provide you with cutting-edge key duplication solutions that cater to your evolving needs.",
	},
	{
		id: "conv",
		name: "Convenient and Efficient Key Duplication",
		nest: "Convenience is a key part of our key duplication service. We understand that you have a busy schedule, and you don't want to spend excessive time waiting for your key to be duplicated. Our efficient key duplication process ensures you get a new key quickly. With our streamlined and convenient service, you can have your key copied while you wait, so you can get back to your daily activities without significant interruptions. We prioritize your time and convenience, making us your best choice for efficient and convenient key duplication.",
	},
];

const dropData3 = [
	{
		id: "model",
		name: "Can you replace keys for all vehicle makes and models?",
		nest: "Yes, we are fully stocked with blank keys that fit all makes and models, as well as transponder chips.",
	},
	{
		id: "remote",
		name: "Do you offer keyless and remote automobile keys?",
		nest: "Absolutely! We have hundreds of authentic proximity (keyless) keys and remote automobile keys in stock.",
	},
	{
		id: "transponder",
		name: "Can you replace transponder and smart keys?",
		nest: "Yes, we certainly can! Autotronix specializes in transponder and smart key replacement. These advanced keys are an integral part of modern vehicles' security systems, and our experts are trained to program the new key to seamlessly integrate with your vehicle's technology. This ensures that your car remains secure, and you can regain access without a hitch. With our professional services, you can say goodbye to key-related hassles.",
	},
	{
		id: "exp",
		name: "Is car key replacement expensive with Autotronix Telematics?",
		nest: "No, unlike car dealerships in Kenya, we provide car key replacements at a far lesser cost and with more ease.",
	},
	{
		id: "payment",
		name: "What payment methods do you accept for key replacement?",
		nest: "We accept cash, credit cards, and M-pesa payments for your convenience.",
	},
	{
		id: "process",
		name: "How does your key replacement process work?",
		nest: "Once you're ready to proceed, our qualified technician will come to your location and safely unlock the automobile using specialist hardware. We then use cutting-edge software to cut and program the new key or remote.",
	},
];

export default function KeyDuplicate() {
	const [selectedOne, setSelectedOne] = useState("");
	const [selectedTwo, setSelectedTwo] = useState("");
	const [selectedThree, setSelectedThree] = useState("");

	const { PlusIcon, MinusIcon } = useIcons();

	return (
		<div className="px-4 xl:px-48 w-full min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 gap-10 md:gap-12 lg:gap-16 pt-12">
			<div className="w-full flex flex-col md:flex-row justify-center items-center pt-8 md:py-2 gap-4 md:gap-8">
				<div className="basis-[40%] flex flex-col justify-start items-center md:items-start gap-4 md:gap-8">
					<h1 className="text-3xl md:text-4xl font-medium uppercase text-center md:text-start">
						Efficient Car Key Duplication Services
					</h1>
					<p className="text-base text-neutral-950/90">
						Autotronix offers seamless car key duplication services, ensuring
						you get spare keys affordably and efficiently. Trust our experts for
						hassle-free solutions.
					</p>
				</div>

				<div className="md:basis-[60%] relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/duplication-page/landing.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0">
				<h1 className="text-3xl md:text-4xl font-medium uppercase text-center">
					Replicating Chipped Keys
				</h1>
				<p className="text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance">
					We duplicate all types of transponder keys for over 5,000 vehicle
					models, with a vast stock of transponders for various makes.
				</p>
			</div>

			{/* alternating */}
			<div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-3 lg:gap-4">
				<div className="lg:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/duplication-page/dup.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
				<div className="basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl md:text-4xl font-medium">
						All your duplication services
					</h1>
					<p className="text-base text-neutral-950/90">
						Autotronix Telematics offers efficient car key duplication services
						for various scenarios, providing quick solutions while you wait.
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
									<h1 className="text-xl md:text-2xl font-medium capitalize">
										{name}
									</h1>
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
					<h1 className="text-3xl md:text-4xl font-medium">
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
									<h1 className="text-xl md:text-2xl font-medium capitalize">
										{name}
									</h1>
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
				<div className="order-1 lg:order-2 lg:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/duplication-page/conv.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>

			{/* background */}
			<div className="flex flex-col w-full justify-center items-center gap-5">
				<div className="flex flex-col justify-center items-center gap-2 text-center md:text-balance">
					<h3 className="text-base md:text-lg text-neutral-900 capitalize font-medium">
						Our Key Duplication Expertise
					</h3>
					<h2 className="text-2xl md:text-3xl font-medium text-mellow capitalize">
						Car Key Duplication: Expert Solutions for Your Convenience
					</h2>
					<p className="text-base text-neutral-900/80 text-center">
						When it comes to car key duplication, Autotronix stands out with
						precision, reliability, and advanced technology. Our expert
						locksmiths excel in duplicating a wide range of car keys, from
						traditional to smart keys. This expertise, coupled with
						state-of-the-art key duplication technology, ensures you receive
						flawless copies tailored to your specific needs. Discover the
						convenience and efficiency of Autotronix's key duplication services,
						where your satisfaction and security are our top priorities.
					</p>
				</div>

				{/* images */}
				<div className="w-full flex flex-col md:flex-row flex-shrink justify-evenly items-center pb-8 gap-6 md:gap-0">
					<div
						className="w-full md:w-[30%] h-[25rem] md:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6 rounded-xl"
						style={{
							backgroundImage: 'url("/images/duplication-page/bg1.jpg")',
							backdropFilter: "brightness 0.4",
						}}
					>
						<div className="flex flex-col gap-5 text-white min-h-24 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
							<h1 className="text-xl font-base text-darkYellow capitalize">
								Precision Duplication
							</h1>
							<p className="font-medium">
								Experience top-notch key duplication, tailored to your needs,
								ensuring the highest security for your vehicle.
							</p>
						</div>
					</div>
					<div
						className="w-full md:w-[30%] h-[25rem] md:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6 rounded-xl"
						style={{
							backgroundImage: 'url("/images/duplication-page/bg2.jpg")',
						}}
					>
						<div className="flex flex-col gap-5 text-white min-h-24 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
							<h1 className="text-xl font-base text-darkYellow capitalize">
								Key Variety
							</h1>
							<p className="font-medium">
								From traditional to smart keys, our experts handle them all,
								providing reliable, customized copies for your car's security.
							</p>
						</div>
					</div>
					<div
						className="w-full md:w-[30%] h-[25rem] md:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6 rounded-xl"
						style={{
							backgroundImage: 'url("/images/duplication-page/bg3.jpg")',
						}}
					>
						<div className="flex flex-col gap-5 text-white min-h-24 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
							<h1 className="text-xl font-base text-darkYellow capitalize">
								Fast Turnaround
							</h1>
							<p className="font-medium">
								At Autotronix, we understand the urgency of car key replacement
								needs. Our services are designed for quick turnaround times,
								getting you back on the road promptly.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* alternating again */}
			<div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-3 lg:gap-4 pb-8">
				<div className="lg:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/duplication-page/alt1.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
				<div className="basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl md:text-4xl font-medium">
						Comprehensive Car Key Replacement Solutions
					</h1>
					<p className="text-base text-neutral-950/90">
						Discover B-Max's comprehensive car key replacement services. Whether
						you've lost your car keys, need a spare, or require a transponder
						key, we've got you covered. Our skilled locksmiths are equipped with
						the latest technology to swiftly replace your keys, ensuring you're
						back on the road in no time. We specialize in a wide range of car
						makes and models, offering affordable and efficient solutions. Don't
						let lost or damaged keys disrupt your day. Contact B-Max for
						hassle-free car key replacement services that prioritize your
						convenience and security.
					</p>
					<Link href="/">
						<motion.h1
							whileHover={{
								backgroundColor: "#DFA70C",
								color: "#FFF",
							}}
							className="px-4 py-3 border border-darkYellow text-darkYellow font-bold uppercase"
						>
							Contact Us
						</motion.h1>
					</Link>
				</div>
			</div>
			<div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-3 lg:gap-4 pb-8">
				<div className="order-2 lg:order-1 basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl md:text-4xl font-medium capitalize">
						Swift and Reliable Car Key Replacements
					</h1>
					<p className="text-base text-neutral-950/90">
						At B-Max, we understand the frustration of losing car keys or
						dealing with damaged ones. That's why we offer swift and reliable
						car key replacement services. Our expert locksmiths are skilled in
						handling various key types and car models, ensuring a hassle-free
						experience. We utilize cutting-edge technology for precision and
						accuracy, so you can trust us for seamless key replacements. Whether
						you need a traditional key, transponder key, or smart key, we've got
						the expertise to assist. Don't stress over lost or broken keys;
						choose B-Max for quick and dependable car key replacements that get
						you back behind the wheel without delay.
					</p>
					<Link href="/">
						<motion.h1
							whileHover={{
								backgroundColor: "#DFA70C",
								color: "#FFF",
							}}
							className="px-4 py-3 border border-darkYellow text-darkYellow font-bold uppercase"
						>
							Contact Us
						</motion.h1>
					</Link>
				</div>
				<div className="order-1 lg:order-2 lg:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/duplication-page/alt2.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>

			{/* extruding */}
			<div className="w-full flex flex-col justify-center items-stretch gap-2 pb-12">
				{dropData3.map(({ id, name, nest }) => (
					<motion.div
						key={id}
						className="flex flex-col justify-center items-stretch gap-4"
						layout
					>
						<motion.div
							className={`${
								selectedThree === id ? "bg-neutral-200/80" : ""
							} py-8 ps-4 pe-2 flex justify-between items-center cursor-pointer`}
							onClick={() =>
								setSelectedThree((prev) => (prev === id ? "" : id))
							}
							layout="position"
							transition={{
								type: "spring",
								stiffness: 200, // Higher values make it snappier
								damping: 100, // Higher values reduce the bounciness
							}}
						>
							<h1 className="text-xl md:text-2xl font-medium capitalize">
								{name}
							</h1>
							<h3 className="w-8 text-neutral-900">
								{selectedThree !== id ? PlusIcon : MinusIcon}
							</h3>
						</motion.div>

						<AnimatePresence>
							{selectedThree === id && (
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
	);
}
