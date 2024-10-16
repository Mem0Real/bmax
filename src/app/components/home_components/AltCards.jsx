"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const description = [
	{
		smallTitle: "YOUR PREMIER AUTO LOCKSMITH PARTNER",
		title: "Car Key Replacement",
		detail:
			"If you have lost your car key, do not panic! We offer fast and reliable car key replacement services. Our team of experienced technicians can make your car replacement key  on site, saving you time and hassle. We use the latest technology and equipment to provide high-quality replacement of car keys for all makes and models of cars, including transponder keys and remote keys. With our fast and efficient service, you will be back on the road in no time. Contact us today to schedule your car key replacement or for any other car key services. Trust us to handle all of your car key needs!",
		address: "/car-key-replacement",
		image: "/images/landing-cards/car-key.png",
	},
	{
		smallTitle: "EXPERT LOCKSMITH SOLUTIONS",
		title: "Duplicate Car Keys",
		detail:
			"Looking for car key duplication services? Our team of experienced professionals can make a duplicate car key for your car quickly and efficiently. Whether you need a spare key or have lost your original one, we have the tools and knowledge needed to make a perfect duplicate. Our services are available for all major car brands, including BMW, Toyota, and Ford. We use advanced technology to ensure the car key works seamlessly with your car's ignition system. You can trust us for high-quality, affordable services that meet all your needs. Contact us today to schedule an appointment for car key duplication that fits your schedule.",
		address: "/car-key-duplication",
		image: "/images/landing-cards/duplicate-key.jpg",
	},
	{
		smallTitle: "VEHICLE SECURITY SOLUTIONS",
		title: "Car Alarm Installation",
		detail:
			"A car alarm is a security feature installed in vehicles to protect them from unauthorized access and theft. It is an electronic device that emits a loud noise when triggered by movement, vibration or attempted entry. The noise serves as a deterrent to potential thieves and alerts nearby individuals of the theft attempt. Car alarms have evolved over time and can now be synchronized with a smartphone app, allowing you to monitor and control your car's security remotely. Installing a car alarm is a wise investment to ensure the safety and security of your vehicle. It provides peace of mind knowing that you have taken the necessary steps to prevent theft and protect your investment.",
		address: "",
		image: "/images/landing-cards/car-alarm.jpg",
	},
	{
		smallTitle: "AUTO REPAIR SOLUTIONS",
		title: "Ignition Repair",
		detail:
			"Car ignition issues are one of the most frustrating problems for drivers. If you notice that your car's engine won't start or is difficult to start, it may be time for ignition repair. There are many reasons why your car's ignition system can fail, from a damaged key to a faulty starter. Our team of experienced technicians has the expertise to quickly diagnose the problem and provide quality ignition repairs. We use top-quality parts and tools to ensure that your car's ignition system is functioning properly. Our services include ignition switch repair, ignition coil replacement, and starter repair. Contact us today for reliable and efficient car ignition repair services to get you back on the road safely and quickly.",
		address: "/",
		image: "/images/landing-cards/ignition.png",
	},
	{
		smallTitle: "MUCH MORE THAN TELEMATICS",
		title: "Monitor All Your Assets",
		detail:
			"Unlock the power of comprehensive asset monitoring with B-Max Telematics. From key replacement to vehicle tracking, our professional locksmith and telematics services ensure the security and visibility of your assets. Experience reliability and professionalism like never before.",
		address: "/fleet-management-solutions",
		image: "/images/landing-cards/monitor.png",
	},
	{
		smallTitle: "SAFETY BACKED BY TECHNOLOGY",
		title: "Protect Your Vehicles and Cargo",
		detail:
			"Safeguard your vehicles and cargo with B-Max Telematics' advanced technology. Our automotive locksmith services and vehicle tracking solutions provide enhanced safety measures, ensuring peace of mind for individuals and businesses alike. Trust us to protect what matters most.",
		address: "/",
		image: "/images/landing-cards/protect.png",
	},
	{
		smallTitle: "POWERING POSITIVE BUSINESS IMPACT",
		title: "Fuel Monitoring",
		detail:
			"Fuel monitoring and management is the process of tracking and optimizing fuel consumption in various industries, such as transportation and manufacturing. By carefully monitoring fuel usage and analyzing data, companies can identify inefficiencies and make informed decisions to reduce costs and lower their carbon footprint. This involves monitoring fuel levels in tanks, analyzing fuel usage patterns, and implementing measures to improve fuel efficiency. Through effective fuel management, companies can save money and improve their environmental impact by achieving greater fuel efficiency and reducing carbon emissions. This is essential to ensure that resources are used efficiently and sustainably, while also minimizing the impact on the environment. Effective fuel management is essential for any industry that relies on fuel and understands the importance of sustainability and responsible resource management.",
		address: "/fuel-monitoring-system",
		image: "/images/landing-cards/fuel.png",
	},
	{
		smallTitle: "PERFORMANCE ON A NEW LEVEL",
		title: "Driver Perfomance Monitoring",
		detail:
			"Telematics technology is a revolutionary solution that allows for the tracking and monitoring of driver behavior. Specifically designed to improve driver safety and fuel efficiency, telematics technology offers a range of benefits for businesses and fleets. From keeping track of speeding and harsh braking habits, to ensuring that drivers are complying with all necessary regulations, telematics technology is an essential tool for modern fleet management. By providing valuable insights into driver behavior, telematics technology empowers fleet managers to make strategic decisions that can improve fuel efficiency, reduce carbon emissions, and ultimately enhance their bottom line. Whether you are a small business owner or a larger corporation, investing in telematics technology can help keep your drivers safe, compliant, and ahead of the curve in today's competitive business environment.",
		address: "/video-telematics",
		image: "/images/landing-cards/driver.png",
	},
];

export default function AltCards() {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", resize);
		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	const { width } = dimension;

	return (
		<div className="min-h-screen w-full flex flex-col text-neutral-900">
			<motion.div className="w-[97%] xl:w-[95%] mx-auto">
				{description.map(
					({ smallTitle, title, detail, address, image }, index) => {
						return (
							<motion.div
								id={index}
								key={index}
								className="flex flex-col xl:flex-row xl:odd:flex-row-reverse justify-center md:gap-9 xl:gap-6 relative px-4 md:px-8 xl:px-40 xl:py-12"
							>
								<motion.div
									className={`order-2 xl:order-1 xl:flex-1 flex flex-col items-center justify-center self-center justify-self-center my-auto py-6 gap-5 xl:gap-12 text-start ${
										++index % 2 === 0 ? "pr-2 md:pr-8" : "pl-2 md:pl-8"
									}`}
									itemID={`${index}-text`}
									initial={
										++index % 2 !== 0
											? {
													opacity: 0,
													x: -15,
													y: 0,
											  }
											: { opacity: 0, x: 15, y: 0 }
									}
									whileInView={{
										opacity: 1,
										x: 0,
										y: 0,
										transition: { duration: 1, ease: "easeInOut" },
									}}
									exit={
										++index % 2 !== 0
											? {
													opacity: 0,
													x: -15,
													y: 0,
											  }
											: { opacity: 0, x: 15, y: 0 }
									}
									transition={{ delay: 0.2 }}
								>
									<div className="self-start flex flex-col gap-2">
										<h2 className=" text-lg font-semibold">{smallTitle}</h2>
										<h2 className=" text-mellow text-4xl font-semibold">
											{title}
										</h2>
									</div>
									<p className="text-balance text-sm font-medium">{detail}</p>
									{address && (
										<Link href={address} className="self-start">
											<motion.div
												whileHover={{
													backgroundColor: "#DFA70C",
													color: "#FFF",
												}}
												className="px-4 py-3 border border-mellow text-mellow font-bold cursor-pointer"
											>
												KNOW MORE
											</motion.div>
										</Link>
									)}
								</motion.div>

								{width >= 1280 ? (
									<motion.div
										itemID={`${index}-image`}
										className="flex-1 flex flex-col items-center justify-center relative h-[70vh] my-auto"
										initial={
											++index % 2 === 0
												? {
														opacity: 0,
														x: -15,
														y: 0,
												  }
												: { opacity: 0, x: 15, y: 0 }
										}
										whileInView={{
											opacity: 1,
											x: 0,
											y: 0,
											transition: { duration: 1, ease: "easeInOut" },
										}}
										exit={
											++index % 2 === 0
												? {
														opacity: 0,
														x: -15,
														y: 0,
												  }
												: { opacity: 0, x: 15, y: 0 }
										}
									>
										<Image
											src={image}
											alt={index}
											className="absolute object-contain object-center"
											priority
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</motion.div>
								) : (
									<div className="order-1 w-full md:w-[70%] lg:w-[50%] h-64 md:h-96 drop-shadow-xl overflow-hidden mt-8">
										<motion.div
											className="relative w-full h-full mx-auto"
											initial={{
												opacity: 0,
												x: 0,
												y: -30,
											}}
											whileInView={{
												opacity: 1,
												x: 0,
												y: 0,
												transition: { duration: 1, ease: "easeInOut" },
											}}
										>
											<Image
												src={image}
												alt={index}
												fill
												className="absolute object-contain md:object-fill object-center"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												priority
											/>
										</motion.div>
									</div>
								)}
							</motion.div>
						);
					}
				)}
			</motion.div>
		</div>
	);
}
