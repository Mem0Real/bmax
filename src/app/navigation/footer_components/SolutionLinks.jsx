"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
	{ title: "Car Key Duplication", address: "/key-duplication" },
	{ title: "Emergency Car Unlock", address: "/emergency-unlock" },
	{
		title: "Ignition Repair",
		address: "/ignition-repair",
	},
	{
		title: "Fleet Management",
		address: "/fleet-management",
	},
	{ title: "Car GPS", address: "/car-gps" },
	{ title: "Bike GPS", address: "/bike-gps" },
	{ title: "Bus GPS", address: "/bus-gps" },
	{ title: "Truck GPS", address: "/truck-gps" },
	{
		title: " Fuel Monitoring",
		address: "/fuel-monitoring",
	},
	{ title: "Dashcam", address: "/dashcam" },
	{ title: "4G AI Dashcam", address: "/ai-dashcam" },
	{ title: "Video Telematics", address: "/video-telematics" },
];
export default function SolutionLinks() {
	return (
		<div className="min-h-56">
			<div className="w-full flex flex-col justify-center items-start gap-8">
				<h1 className="text-4xl text-mellow uppercase">Solutions</h1>
				<div className="w-[90%] mx-auto grid md:grid-rows-4 xl:grid-rows-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-2 grid-flow-row md:grid-flow-col justify-items-between xl:justify-items-start gap-3">
					{links.map(({ title, address }, index) => (
						<Link href={address} key={index} className="lg:min-w-[70%]">
							<motion.div
								whileHover={{
									borderColor: "#FFA500",
								}}
								className="py-2 md:py-0.5 xl:py-1 px-4 border border-white text-white font-base cursor-pointer uppercase"
							>
								{title}
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
