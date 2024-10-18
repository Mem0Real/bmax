import React from "react";
import Image from "next/image";
import Links from "@/app/components/Links";
import { Rajdhani, Raleway } from "next/font/google";

const raleway = Raleway({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

export default function LogoStuff() {
	return (
		<section className="w-full">
			<div className="flex flex-col justify-stretch items-start gap-2 md:gap-4">
				<div className="self-start w-[250px] h-[80px] md:w-[288px] md:h-[93px] relative">
					<Image
						fill
						src="/images/logo3.png"
						alt="B-Max"
						priority
						className="object-cover object-center absolute"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<p
					className={`self-center text-sm pb-6 xl:w-[15rem] ${raleway.className}`}
				>
					Advanced telematics solutions for seamless fleet management. GPS
					tracking, video telematics, fuel monitoring, and more. Empower your
					business today. Contact us now.
				</p>
				{/* <AnimatePresence>
					<div className="flex gap-6 ps-4">
						<Link href="https://t.me/B_Max_Auto_Solutions_bot" target="_blank">
							<motion.div
								className="bg-mellow rounded-full"
								whileHover={{ background: "transparent", color: "#2563eb" }}
								transition={{ ease: "easeInOut", duration: 0.6 }}
							>
								{TelegramIcon}
							</motion.div>
						</Link>
						<Link
							href="https://www.facebook.com/share/EYTKdeYqzUgrtVAF/?mibextid=LQQJ4d"
							target="_blank"
						>
							<motion.div
								className="bg-mellow rounded-full"
								whileHover={{ background: "transparent", color: "#2563eb" }}
								transition={{ ease: "easeInOut", duration: 0.6 }}
							>
								{FacebookIcon}
							</motion.div>
						</Link>

						<Link href="https://instagram.com" target="_blank">
							<motion.div
								className="bg-mellow rounded-full"
								whileHover={{ background: "transparent", color: "#f472b6" }}
								transition={{ ease: "easeInOut", duration: 0.6 }}
							>
								{InstagramIcon}
							</motion.div>
						</Link>
						<Link
							href="https://www.linkedin.com/groups/10003292"
							target="_blank"
						>
							<motion.div
								className="bg-mellow rounded-full"
								whileHover={{ background: "#0077B5", color: "#fff" }}
								transition={{ ease: "easeInOut", duration: 0.6 }}
							>
								{LinkedInIcon}
							</motion.div>
						</Link>
					</div>
				</AnimatePresence> */}
				<Links />
			</div>
		</section>
	);
}
