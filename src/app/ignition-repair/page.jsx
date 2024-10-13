"use client";

import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useIcons } from "../components/CustomIcons";
import Link from "next/link";

const dropData1 = [
	{
		id: "assess",
		name: "Quick Assessments",
		nest: "Our skilled technicians conduct quick assessments of broken door locks and ignitions, determining the most suitable repair or replacement option.",
	},
	{
		id: "rely",
		name: "Reliable Repairs",
		nest: "Count on us for reliable repairs, where possible, to fix broken door locks and ignitions effectively, saving you the cost of replacements.",
	},
	{
		id: "selection",
		name: "Wide Selection of Replacements",
		nest: "If repairs are not possible, we provide a wide selection of high-quality replacements for your convenience and needs.",
	},
];

const dropData2 = [
	{
		id: "reserve",
		name: "No Advance Reservations Needed",
		nest: "You don't need to make advance reservations for diagnosis; simply reach out to us, and our team will be ready to assist you.",
	},
	{
		id: "sched",
		name: "Scheduled Repairs & Replacements",
		nest: "Our work on repairs or replacements takes no more than a full day, and we schedule it in advance to ensure a smooth process.",
	},
	{
		id: "cust",
		name: "Customer Satisfaction",
		nest: "We prioritize customer satisfaction and strive to exceed your expectations with every replacement service, offering professional and friendly assistance throughout the process.",
	},
];

const dropData3 = [
	{
		id: "ign",
		name: "Can you repair my broken ignition?",
		nest: "Yes, we can conduct a quick assessment, and if possible, we will provide reliable repairs for your broken ignition.",
	},
	{
		id: "door",
		name: "What if my door lock is beyond repair?",
		nest: "If your door lock is beyond repair, we offer a wide selection of replacement options to suit your needs.",
	},
	{
		id: "long",
		name: "How long does it take to repair or replace a lock or ignition?",
		nest: "Our skilled technicians can typically complete repairs or replacements within a full day, depending on the complexity.",
	},
	{
		id: "reserv",
		name: "Do I need to make a reservation for a diagnosis?",
		nest: "No, you do not need to make advance reservations. Contact us, and our team will promptly assess your lock or ignition.",
	},
	{
		id: "entr",
		name: "Can you fix keyless entry problems?",
		nest: "Yes, we offer auto locksmith services to resolve keyless entry issues, including broken proximity twist ignition knobs.",
	},
	{
		id: "genu",
		name: "Do you provide genuine replacement parts for ignition knobs?",
		nest: "Yes, we offer genuine replacement twist ignition knobs from reputable brands like Mazda, Suzuki, Mitsubishi, and Honda.",
	},
	{
		id: "skil",
		name: "Are your locksmiths skilled and professional?",
		nest: "Absolutely, our locksmiths are highly skilled and trained professionals with extensive experience in handling ignition and door lock repairs.",
	},
	{
		id: "satis",
		name: "Is customer satisfaction guaranteed?",
		nest: "Yes, at B-Max, we prioritize customer satisfaction and aim to deliver top-quality ignition and door lock repair services that leave you satisfied and pleased with our work.",
	},
];

export default function IgnitionRepair() {
	const [selectedOne, setSelectedOne] = useState("");
	const [selectedTwo, setSelectedTwo] = useState("");
	const [selectedThree, setSelectedThree] = useState("");

	const { PlusIcon, MinusIcon } = useIcons();

	return (
		<div className="w-full my-auto flex flex-col justify-center items-center text-neutral-900 gap-10 md:gap-12 lg:gap-16">
			<div
				className="w-full min-h-[30rem] lg:min-h-[35rem] xl:min-h-[40rem] bg-fixed bg-cover lg:bg-contain bg-center bg-no-repeat grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row lg:gap-12 justify-end place-content-around"
				style={{ backgroundImage: 'url("/images/ignition-page/landing.jpg' }}
			>
				<div className="ps-4 lg:ps-12 py-5 lg:py-0 flex flex-col justify-center items-center gap-2 lg:gap-8 backdrop-blur-3xl md:backdrop-blur-lg text-black">
					<h1 className="text-2xl md:text-3xl xl:text-6xl font-medium uppercase">
						Reliable Solutions for Broken Locks and Ignitions
					</h1>
					<p className="text-base text-black/90 py-8 font-medium">
						Contact us for guidance on broken door locks or ignitions. We can
						fix many issues, and if replacement is needed, we offer a wide
						selection of options. Our skilled technicians provide quick
						assessments, repairs, and replacements, ensuring lasting solutions.
						No advance reservations are necessary for diagnosis, and our
						efficient repair or replacement work can be scheduled in advance.
					</p>
				</div>
			</div>
			<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0">
				<h1 className="text-3xl md:text-4xl font-medium uppercase text-center">
					Professional Auto Locksmith Services
				</h1>
				<p className="text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance">
					No advance reservations are necessary for diagnosis, and our efficient
					repair or replacement work can be scheduled in advance.
				</p>
			</div>

			{/* alternating */}
			<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-3 lg:gap-4">
				<div className="lg:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/ignition-page/handle.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
				<div className="basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl md:text-4xl font-medium">
						Swift Repairs and Replacements
					</h1>
					<p className="text-base text-neutral-950/90">
						Our auto locksmith services offer swift repairs and replacements for
						broken door locks and ignitions. Trust us for efficient solutions to
						get you back on the road without delays.
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
			<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-3 lg:gap-4 pb-8">
				<div className="order-2 lg:order-1 basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl md:text-4xl font-medium">
						Efficient Solutions
					</h1>
					<p className="text-base text-neutral-950/90">
						Our team promptly assesses the problem and offers efficient repairs
						or replacements, ensuring a lasting solution for your door locks and
						ignitions.
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
						src="/images/ignition-page/kb.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>

			{/* background */}
			<div className="px-4 xl:px-48 flex flex-col w-full justify-center items-center gap-5">
				<div className="flex flex-col justify-center items-center gap-2 text-center md:text-balance">
					<h3 className="text-base md:text-lg text-neutral-900 capitalize font-medium">
						Keyless Entry Problems Resolved
					</h3>
					<h2 className="text-2xl md:text-3xl font-medium text-mellow capitalize">
						Auto Locksmith Services for Broken Ignition Knobs
					</h2>
					<p className="text-base text-neutral-900/80 text-center">
						Having trouble starting your car with keyless entry due to a broken
						proximity twist ignition knob? Don't worry! Rely on our auto
						locksmith services to resolve the issue.
					</p>
				</div>

				{/* images */}
				<div className="w-full flex flex-col md:flex-row flex-shrink justify-evenly items-center pb-8 gap-6 md:gap-0">
					<div
						className="w-full md:w-[30%] h-[25rem] md:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6 rounded-xl"
						style={{
							backgroundImage: 'url("/images/ignition-page/bg1.jpg")',
							backdropFilter: "brightness 0.4",
						}}
					>
						<div className="flex flex-col gap-5 text-white min-h-12 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
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
							backgroundImage: 'url("/images/ignition-page/bg2.jpg")',
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
							backgroundImage: 'url("/images/ignition-page/bg3.jpg")',
						}}
					>
						<div className="flex flex-col gap-5 text-white min-h-24 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
							<h1 className="text-xl font-base text-darkYellow capitalize">
								Fast Turnaround
							</h1>
							<p className="font-medium">
								At B-Max, we understand the urgency of car key replacement
								needs. Our services are designed for quick turnaround times,
								getting you back on the road promptly.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* alternating again */}
			<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-3 lg:gap-4 pb-8">
				<div className="lg:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/ignition-page/alt1.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
				<div className="basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl md:text-4xl font-medium">
						Secure and Professional Ignition & Door Lock Repair
					</h1>
					<p className="text-base text-neutral-950/90">
						B-Max is your trusted partner for expert ignition and door lock
						repair services. With a team of skilled technicians and a wide
						selection of genuine replacement parts, we deliver secure and
						professional solutions for your car’s lock and ignition problems.
						Whether it’s a quick repair or a replacement, our efficient services
						will get you back on the road in no time. Contact us for swift and
						reliable solutions you can rely on.
					</p>
					<Link href="/">
						<motion.h1
							whileHover={{
								backgroundColor: "#DFA70C",
								color: "#FFF",
							}}
							className="px-4 py-3 border border-darkYellow text-darkYellow font-bold uppercase"
						>
							Get Service
						</motion.h1>
					</Link>
				</div>
			</div>
			<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-3 lg:gap-4 pb-8">
				<div className="order-2 lg:order-1 basis-1/2 flex flex-col justify-center items-start gap-8">
					<h1 className="text-3xl md:text-4xl font-medium capitalize">
						Top-Quality Ignition & Door Lock Repair
					</h1>
					<p className="text-base text-neutral-950/90">
						At B-Max, customer satisfaction is our top priority. We strive to
						provide top-quality ignition and door lock repair services that meet
						and exceed your expectations. Our skilled team ensures a damage-free
						and efficient repair process, ensuring your car's safety and
						functionality. Trust in our dedicated service for all your ignition
						and door lock needs.
					</p>
					<Link href="/">
						<motion.h1
							whileHover={{
								backgroundColor: "#DFA70C",
								color: "#FFF",
							}}
							className="px-4 py-3 border border-darkYellow text-darkYellow font-bold uppercase"
						>
							Get Service
						</motion.h1>
					</Link>
				</div>
				<div className="order-1 lg:order-2 lg:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/ignition-page/alt2.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>

			{/* extruding */}
			<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
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
