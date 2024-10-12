"use client";
import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const clientList = [
	{ id: "Safaricom", source: "safari.png" },
	{ id: "Jacaranda", source: "jacaranda.png" },
	{ id: "Inspiration", source: "inspiration.png" },
	{ id: "IPS", source: "ips.png" },
	{ id: "InTouch", source: "intouch.png" },
	{ id: "eyestyle", source: "eye.jpg" },
	{ id: "epn", source: "epn.jpg" },
	{ id: "neom", source: "neom.jpg" },
	{ id: "flamex", source: "flamex.jpg" },
	{ id: "embassy", source: "embassy.jpg" },
];

export default function Clients() {
	const [isHovered, setIsHovered] = useState("else");

	return (
		<div className="px-6 md:px-12 xl:px-40 w-full min-h-screen bg-neutral-200 text-neutral-900 flex flex-col justify-center items-center gap-16 py-12 pb-20">
			<div className="flex flex-col justify-center items-center gap-8">
				<h1 className="text-4xl font-semibold">OUR VALUED CLIENTS</h1>
				<p className="text-lg text-neutral-900/60 text-center">
					At B-Max Auto Solutions, our commitment to excellence and unwavering
					dedication to providing top-notch automotive security solutions have
					allowed us to build strong partnerships with a diverse range of
					clients. We take immense pride in serving our clients and delivering
					tailored, innovative solutions that meet their unique needs and exceed
					their expectations.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-8">
				<AnimatePresence>
					<motion.div
						className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-3 gap-x-0"
						transition={{ staggerChildren: 2.5 }}
						onMouseLeave={() => setIsHovered("else")}
					>
						{clientList.map(({ id, source }, index) => (
							<motion.div
								key={index}
								className="relative w-44 md:48 lg:w-56 h-24 cursor-pointer"
								animate={
									isHovered === id || isHovered === "else"
										? { opacity: 1 }
										: { opacity: 0.4 }
								}
								onMouseEnter={() => setIsHovered(id)}
								onMouseLeave={() => setIsHovered("")}
							>
								<Image
									fill
									alt={id}
									src={`/images/clients/${source}`}
									className="object-contain object-center absolute"
								/>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
			<div className="flex flex-col xl:flex-row gap-6 xl:gap-12 justify-center items-start">
				<div className="flex flex-col justify-start items-start">
					<h1 className="text-2xl font-bold">OUR DIVERSE CLIENTELE</h1>
					<div className="mt-4 text-lg text-neutral-950">
						<p className="pb-6">
							Our clientele spans across various sectors, including:
						</p>
						<ul className="list-disc list-inside space-y-5 lg:space-y-0">
							<li>
								<span className="font-medium">Individual Vehicle Owners:</span>
								We cater to individuals who seek advanced security solutions for
								their personal vehicles. Whether it's GPS tracking, remote
								immobilization, or alarm systems, we provide personalized
								security solutions.
							</li>
							<li>
								<span className="font-medium">Commercial Fleet Operators:</span>
								B-Max Telematics Limited partners with businesses managing
								fleets of vehicles. Our comprehensive fleet management solutions
								enhance security, optimize routes, monitor driver behavior, and
								ensure operational efficiency.
							</li>
							<li>
								<span className="font-medium">Automotive Manufacturers:</span>
								We collaborate with automotive manufacturers to integrate
								cutting-edge security features into their vehicles, ensuring a
								higher level of safety and protection for end-users.
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col justify-start items-start">
					<h1 className="text-2xl font-bold uppercase">
						Why Our Clients Choose Us
					</h1>
					<div className="mt-4 text-lg text-neutral-950">
						<ul className="list-disc list-inside space-y-5 lg:space-y-0">
							<li>
								<span className="font-medium">Cutting-edge Technology:</span>
								Our commitment to staying updated with the latest advancements
								in automotive security technology ensures that our clients
								benefit from the most advanced solutions available in the
								market.
							</li>
							<li>
								<span className="font-medium">Customization:</span>
								We understand that each client's security needs are unique.
								Therefore, we offer tailored solutions to precisely match their
								requirements, ensuring optimal security measures.
							</li>
							<li>
								<span className="font-medium">
									Exceptional Customer Service:
								</span>
								B-Max Auto Solutions prioritizes customer satisfaction. Our
								dedicated support team ensures a seamless experience for our
								clients, providing prompt assistance and guidance at every step.
							</li>
							<li>
								We take immense pride in the trust and confidence our clients
								place in us. Their success and security are our driving forces,
								and we remain committed to delivering innovative and reliable
								solutions to safeguard their vehicles and data.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
