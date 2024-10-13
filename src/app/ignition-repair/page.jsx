"use client";

import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useIcons } from "../components/CustomIcons";
import Link from "next/link";
import ExtrudeText from "../components/ExtrudeText";
import Alternating from "../components/Alternating";
import AlternateImage from "../components/AlternateImage";
import AlternateText from "../components/AlternateText";
import BackgroundCard from "../components/BackgroundCard";

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
				className="w-full xl:w-[90%] min-h-[30rem] lg:min-h-[35rem] xl:min-h-[40rem] bg-fixed bg-cover lg:bg-contain bg-center bg-no-repeat grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row lg:gap-12 justify-end place-content-around"
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
			<Alternating extrude>
				<AlternateImage img="ignition-page/handle.png" />
				<AlternateText
					header="Swift Repairs and Replacements"
					detail="Our auto locksmith services offer swift repairs and replacements for
						broken door locks and ignitions. Trust us for efficient solutions to
						get you back on the road without delays"
				>
					<ExtrudeText dropData={dropData1} />
				</AlternateText>
			</Alternating>
			<Alternating extrude>
				<AlternateText
					header="Efficient Solutions"
					detail="Our team promptly assesses the problem and offers efficient repairs
						or replacements, ensuring a lasting solution for your door locks and
						ignitions."
				>
					<ExtrudeText dropData={dropData2} />
				</AlternateText>
				<AlternateImage img="ignition-page/kb.png" />
			</Alternating>
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

				<BackgroundCard
					src1="ignition-page/bg1.jpg"
					header1="Precision Duplication"
					text1="Experience top-notch key duplication, tailored to your needs,
								ensuring the highest security for your vehicle."
					src2="ignition-page/bg2.jpg"
					header2="Key Variety"
					text2="From traditional to smart keys, our experts handle them all,
								providing reliable, customized copies for your car's security."
					src3="ignition-page/bg3.jpg"
					header3="Fast Turnaround"
					text3="At B-Max, we understand the urgency of car key replacement
								needs. Our services are designed for quick turnaround times,
								getting you back on the road promptly."
				/>
			</div>
			<Alternating>
				<AlternateImage img="ignition-page/alt1.png" />
				<AlternateText
					header="Secure and Professional Ignition & Door Lock Repair"
					detail="B-Max is your trusted partner for expert ignition and door lock
						repair services. With a team of skilled technicians and a wide
						selection of genuine replacement parts, we deliver secure and
						professional solutions for your car's lock and ignition problems.
						Whether it's a quick repair or a replacement, our efficient services
						will get you back on the road in no time. Contact us for swift and
						reliable solutions you can rely on."
					linkText="Get Service"
				/>
			</Alternating>
			<Alternating>
				<AlternateText
					header="Top-Quality Ignition & Door Lock Repair"
					detail="At B-Max, customer satisfaction is our top priority. We strive to
						provide top-quality ignition and door lock repair services that meet
						and exceed your expectations. Our skilled team ensures a damage-free
						and efficient repair process, ensuring your car's safety and
						functionality. Trust in our dedicated service for all your ignition
						and door lock needs."
					linkText="Get Service"
				/>
				<AlternateImage img="ignition-page/alt2.png" />
			</Alternating>

			<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
				<ExtrudeText dropData={dropData3} className="bg-neutral-200/80" />
			</div>
		</div>
	);
}
