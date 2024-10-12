"use client";

import Image from "next/image";
import React from "react";

export default function About() {
	return (
		<div className="w-full px-4 xl:px-40 bg-neutral-100 text-neutral-900">
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
				<div className="flex justify-start items-start gap-4">
					<h1 className="basis-1/3 text-6xl font-semibold">ABOUT US_</h1>
					<div className="basis-2/3 grid grid-cols-2 grid-flow-row gap-y-16 gap-x-2 justify-start text-lg">
						<p className="pr-16">
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
						<p className="pr-16">
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
						<p className="pr-16">
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
						<p className="pr-16">
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
			</div>
		</div>
	);
}
