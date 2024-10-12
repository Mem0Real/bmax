"use client";

import Image from "next/image";
import React from "react";

import { Carousel, CarouselSlide } from "@mantine/carousel";
import { useIcons } from "../components/CustomIcons";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

const whyList = [
	{
		title: "EXPERTISE",
		detail:
			"With years of experience in the automotive industry, our team at B-Max possesses the expertise and knowledge to handle all aspects of car key replacement, programming, and security systems installation with precision and efficiency.",
	},
	{
		title: "Cutting-Edge Technology",
		detail:
			"We stay at the forefront of technological advancements, utilizing the latest tools and equipment to ensure accurate key programming, seamless GPS tracking, and reliable car alarm system installations.",
	},
	{
		title: "Custom Solutions",
		detail:
			"At B-Max, we understand that every vehicle and client has unique requirements. That's why we offer personalized solutions tailored to your specific needs, whether it's replacing lost keys, enhancing vehicle security, or optimizing fleet management.",
	},
	{
		title: "Prompt Service",
		detail:
			"We value your time, which is why we strive to provide prompt and efficient service. Whether you need a car key replacement in a hurry or require urgent assistance with your GPS tracking system, you can rely on B-Max to deliver timely solutions.",
	},
	{
		title: "Customer Satisfaction",
		detail:
			"At the heart of our business is a commitment to customer satisfaction. We prioritize open communication, transparency, and integrity in all our interactions, ensuring that every client receives the highest level of service and support. Choose B-Max for all your car key replacement, programming, GPS tracking, car alarm system, and fleet management needs. Experience the difference of working with a trusted partner dedicated to your safety and peace of mind on the road.",
	},
];

const imgList = [
	"fuel.png",
	"driver.png",
	"truck.jpg",
	"monitor.png",
	"protect.png",
];

export default function About() {
	const {
		LeftArrowIcon,
		RightArrowIcon,
		CheckIcon,
		TechnologyIcon,
		SupportIcon,
		ExpertIcon,
		ScaleIcon,
		InnovativeIcon,
	} = useIcons();

	const cardList = [
		{
			icon: CheckIcon,
			title: "Tailored Solutions",
			detail:
				"At B-Max,  we take immense pride in crafting customized solutions that precisely address your unique business needs and challenges. Our expert team works closely with you to understand your fleet management requirements, ensuring we deliver solutions that fit your goals flawlessly.",
		},
		{
			icon: TechnologyIcon,
			title: "Advanced Technology",
			detail:
				"Embrace the power of advanced technologies with Autotronix. Our state-of-the-art GPS tracking, video telematics, and fuel monitoring solutions offer real-time visibility and actionable insights. Stay ahead of the competition and make data-driven decisions for your fleet's success.",
		},
		{
			icon: SupportIcon,
			title: "Exceptional Support",
			detail:
				"Customer satisfaction is paramount to us. Our dedicated professionals provide top-notch support, training, and assistance. Whether you have questions, need guidance, or face challenges, we ensure you have a seamless experience with our products.",
		},
		{
			icon: ExpertIcon,
			title: "Industry Expertise",
			detail:
				"B-Max boasts extensive experience in the fleet management industry, offering deep understanding of businesses' challenges. Trust our domain knowledge to optimize your operations and achieve operational excellence.",
		},
		{
			icon: ScaleIcon,
			title: "Scalable Solutions",
			detail:
				"No matter your fleet size, our solutions are designed for growth. From small fleets to large enterprises, our services adapt to accommodate your expanding needs, providing flexibility and reliability.",
		},
		{
			icon: InnovativeIcon,
			title: "Innovative Approach",
			detail:
				"Innovation drives us forward. We continuously strive to bring the latest technologies and best practices to our offerings, keeping your fleet at the forefront of the industry. Experience our innovative approach to excel in a rapidly evolving market.",
		},
	];

	return (
		<div className="w-full px-4 xl:px-40 bg-neutral-100 text-neutral-950 pb-36">
			<div className="flex flex-col justify-center items-center gap-24 pt-28">
				{/* landing text */}
				<div className="flex flex-col justify-center items-center gap-6">
					<p className="text-2xl font-semibold">
						At B-Max, we're passionate about keeping you on the road safely and
						securely. As experts in car key replacement, programming, GPS
						tracking, car alarm systems, and fleet management in Kenya, we offer
						a comprehensive range of services to meet all your automotive
						security and management needs.
					</p>
					<h1 className="text-5xl font-bold">Sliding Text Effect</h1>
				</div>

				{/* image */}
				<div className="h-[90vh] flex justify-center items-center w-full relative">
					<Image
						src={"/images/aboutImage.png"}
						alt="About us"
						fill
						className="absolute object-cover object-center"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
						priority
					/>
				</div>

				{/* about stuff */}
				<div className="flex flex-col xl:flex-row justify-start items-start gap-4">
					<h1 className="basis-1/3 text-6xl font-semibold">ABOUT US_</h1>
					<div className="basis-2/3 grid grid-cols-1 xl:grid-cols-2 grid-flow-row gap-y-8 gap-x-2 text-base">
						<p className="xl:pr-16">
							At B-Max, we excel in fleet management solutions, providing
							cutting-edge GPS tracking, telematics, and video telematics
							technologies. Our fuel monitoring systems enhance operational
							efficiency and promote cost savings. We prioritize safety
							solutions to ensure real-time visibility and productivity for your
							fleet. With industry expertise, we offer tailored and scalable
							solutions to optimize fleet operations. Our exceptional support
							and customized fleet solutions cater to businesses of all sizes,
							making us the go-to partner for efficient and productive fleet
							management.
						</p>
						<p className="xl:pr-16">
							At B-Max,we pride ourselves on our industry expertise and
							commitment to exceptional support. Our team of experts ensures
							that businesses receive the best advice and assistance to make
							informed decisions about their fleet management needs. With
							cutting-edge technology and customized solutions, we enable
							businesses to streamline fleet operations and achieve their goals
							efficiently. Whether it's fleet optimization, real-time tracking,
							or improving operational efficiency, B-Max has the expertise and
							solutions to drive your fleet to success.
						</p>
						<p className="xl:pr-16">
							Our GPS tracking systems empower businesses with real-time
							visibility and analytics, allowing them to optimize fleet
							performance. B-Max harnesses the latest technology to deliver
							fleet tracking systems that boost operational efficiency and
							productivity. We leverage video telematics to provide valuable
							insights into driver behavior, further enhancing safety and
							compliance. Our fuel monitoring solutions reduce costs and
							minimize environmental impact. As industry leaders, we draw on our
							vast expertise to craft tailored solutions that meet the unique
							challenges of businesses across various sectors.
						</p>
						<p className="xl:pr-16">
							With a focus on operational efficiency and safety, B-Max offers
							fleet management solutions designed to boost productivity and
							performance. Our GPS tracking systems, telematics solutions, and
							video telematics technologies provide real-time visibility and
							data-driven insights. We pride ourselves on delivering
							cutting-edge technology tailored to the unique needs of our
							clients. Our fuel monitoring systems not only optimize consumption
							but also contribute to sustainability efforts. B-Max is the
							trusted partner for businesses seeking scalable fleet solutions
							and expert support in fleet management.
						</p>
					</div>
				</div>

				{/* why be max */}
				<div className="flex flex-col justify-center items-start gap-8">
					<h1 className="text-6xl font-semibold">Why Choose B-Max?</h1>
					{whyList.map(({ title, detail }, index) => (
						<>
							<h1 key={index} className="text-2xl font-semibold">
								{++index}.{title}
							</h1>
							<p className="font-thin text-lg">{detail}</p>
						</>
					))}
				</div>

				{/* slide carousel */}
				<div className="w-full h-[400] mx-auto lg:w-full relative flex flex-col justify-center items-center">
					<Carousel
						withIndicators
						slideGap={{ base: 0, sm: "md" }}
						loop
						align="start"
						slidesToScroll={1}
						height="100%"
						controlsOffset="xl"
						controlSize={30}
						nextControlIcon={
							<div className="w-8 text-white bg-neutral-950 rounded-full">
								{RightArrowIcon}
							</div>
						}
						previousControlIcon={
							<div className="w-8 text-white bg-neutral-950 rounded-full">
								{LeftArrowIcon}
							</div>
						}
						slideSize={{ base: "100%", sm: "50%", lg: "33%" }}
					>
						{imgList.map((source, index) => (
							<React.Fragment key={index}>
								<CarouselSlide>
									<Image
										src={`/images/landing-cards/${source}`}
										alt={source}
										width={400}
										height={400}
										className="object-contain md:object-cover lg:object-contain object-center"
									/>
								</CarouselSlide>
							</React.Fragment>
						))}
					</Carousel>
				</div>

				{/* our vision */}
				<div className="flex flex-col justify-center items-center">
					<div className="flex flex-col lg:flex-row justify-evenly items-start gap-8 ">
						<div className="flex flex-col justify-start items-start gap-4">
							<h1 className="text-5xl font-medium">OUR VISION</h1>
							<p className="text-neutral-700/90 text-lg font-light">
								To be the leading provider of intelligent fleet management and
								asset tracking solutions, empowering businesses worldwide with
								real-time insights and smart data-driven decisions.
							</p>
						</div>
						<div className="flex flex-col justify-start items-start gap-4">
							<h1 className="text-5xl font-medium">OUR MISSION</h1>
							<p className="text-neutral-700/90 text-lg font-light">
								Delivering comprehensive, user-friendly, and cost-effective
								solutions that enable businesses to optimize their fleet
								operations, reduce costs, and achieve unmatched customer
								satisfaction.
							</p>
						</div>
					</div>
				</div>

				{/* interested */}
				<div className="flex flex-col lg:flex-row justify-evenly lg:justify-between items-start w-full px-6 py-24 my-12 bg-neutral-200 rounded-lg gap-4 xl:gap-0">
					<h1 className="text-4xl font-semibold">
						Interested to work and cooperate with us?
					</h1>
					<Link href="contact">
						<AnimatePresence>
							<motion.div
								whileHover={{
									backgroundColor: "#FFF",
									color: "#000",
								}}
								className="w-fit py-4 xl:py-2 px-8 xl:px-6 border border-neutral-900 bg-neutral-900 text-white font-semibold uppercase text-nowrap"
							>
								HIRE US!
							</motion.div>
						</AnimatePresence>
					</Link>
				</div>

				{/* cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-24 md:gap-x-12">
					{cardList.map(({ icon, title, detail }, index) => (
						<div
							key={index}
							className="px-6 py-12 rounded-xl bg-neutral-950/80 flex flex-col justify-start items-start max-w-[30rem] gap-4"
						>
							<div className="w-12 text-mellow">{icon}</div>
							<div className="text-2xl font-medium text-mellow">{title}</div>
							<div className="text-lg text-neutral-200">{detail}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
