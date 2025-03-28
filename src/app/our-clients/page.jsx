"use client";
import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { raj } from "@/app/ui/fonts";

const clientList = [
	{ id: "Safaricom", source: "safari.webp" },
	{ id: "Jacaranda", source: "jacaranda.webp" },
	{ id: "Inspiration", source: "inspiration.webp" },
	{ id: "IPS", source: "ips.webp" },
	{ id: "InTouch", source: "intouch.webp" },
	{ id: "eyestyle", source: "eye.webp" },
	{ id: "epn", source: "epn.webp" },
	{ id: "neom", source: "neom.webp" },
	{ id: "flamex", source: "flamex.webp" },
	{ id: "embassy", source: "embassy.webp" },
];

export default function Clients() {
	const [isHovered, setIsHovered] = useState("else");

	return (
		<div className="w-full min-h-screen bg-neutral-200 text-neutral-900 flex flex-col justify-center items-center gap-16 py-12 pb-20">
			<div className="px-6 md:px-12 xl:px-40 flex flex-col justify-center items-center gap-8">
				<h1 className={`text-4xl font-semibold ${raj.className}`}>
					OUR VALUED CLIENTS
				</h1>
				<p className={`text-lg text-neutral-900/90 text-balance`}>
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
								className="relative w-36 md:w-44 lg:w-56 h-24 cursor-pointer"
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
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
			<div className="px-6 md:px-12 xl:px-40 flex flex-col xl:flex-row gap-6 xl:gap-12 justify-center items-start">
				<div className="flex flex-col justify-start items-start">
					<h1 className={`text-2xl font-bold ${raj.className}`}>
						OUR DIVERSE CLIENTELE
					</h1>
					<div className={`mt-4 text-lg text-neutral-950 text-balance`}>
						<p className="pb-6">
							Our clientele spans across various sectors, including:
						</p>
						<ul className="list-disc list-inside space-y-5 lg:space-y-0">
							<li>
								<span className="font-semibold">
									Individual Vehicle Owners:&nbsp;
								</span>
								We cater to individuals who seek advanced security solutions for
								their personal vehicles. Whether it&apos;s GPS tracking, remote
								immobilization, or alarm systems, we provide personalized
								security solutions.
							</li>
							<li>
								<span className="font-semibold">
									Commercial Fleet Operators:&nbsp;
								</span>
								B-Max Telematics Limited partners with businesses managing
								fleets of vehicles. Our comprehensive fleet management solutions
								enhance security, optimize routes, monitor driver behavior, and
								ensure operational efficiency.
							</li>
							<li>
								<span className="font-semibold">
									Automotive Manufacturers:&nbsp;
								</span>
								We collaborate with automotive manufacturers to integrate
								cutting-edge security features into their vehicles, ensuring a
								higher level of safety and protection for end-users.
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col justify-start items-start">
					<h1 className={`text-2xl font-bold uppercase ${raj.className}`}>
						Why Our Clients Choose Us
					</h1>
					<div className="mt-4 text-lg text-neutral-950">
						<ul className={`list-disc list-inside space-y-5 lg:space-y-0`}>
							<li>
								<span className="font-semibold">
									Cutting-edge Technology:&nbsp;
								</span>
								Our commitment to staying updated with the latest advancements
								in automotive security technology ensures that our clients
								benefit from the most advanced solutions available in the
								market.
							</li>
							<li>
								<span className="font-semibold">Customization:&nbsp;</span>
								We understand that each client&apos;s security needs are unique.
								Therefore, we offer tailored solutions to precisely match their
								requirements, ensuring optimal security measures.
							</li>
							<li>
								<span className="font-semibold">
									Exceptional Customer Service:&nbsp;
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
