import React from "react";
import { raj } from "@/app/ui/fonts";

export default function OurWork() {
	return (
		<div className="min-h-screen w-full px-4 md:px-12 xl:px-40 bg-neutral-950 text-neutral-100 flex flex-col justify-center items-center py-8">
			<div className="w-full flex flex-col xl:flex-row justify-stretch items-stretch relative gap-12 xl:gap-0">
				<h1
					className={`flex-1/4 text-6xl md:text-7xl lg:text-8xl boldt-semibold uppercase xl:pr-4 text-nowrap xl:-mt-5 ${raj.className}`}
				>
					Our Work
				</h1>
				<div className="w-full flex-3/4 flex flex-col gap-12 lg:gap-20 xl:gap-36">
					<div className="flex flex-col md:flex-row gap-12 xl:gap-0">
						<div className="w-full">
							<h1 className="relative inset-0 text-neutral-500/10 text-[12rem] tracking-tighter font-bold">
								<p className="absolute top-12"> 01</p>
							</h1>
							<div className="w-full h-full flex flex-col justify-start items-start gap-6 px-2 xl:pl-8">
								<h1
									className={`text-neutral-100 font-bold text-xl pt-3 ${raj.className}`}
								>
									Automotive Locksmith Services
								</h1>
								<p className={`text-neutral-200/90 pr-2 xl:pr-8 text-sm`}>
									B-Max Telematics offers key replacement, programming, repair,
									and emergency car unlocking services with professionalism and
									efficiency.
								</p>
							</div>
						</div>
						<div className="w-full">
							<h1 className="relative inset-0 text-neutral-500/10 text-[12rem] tracking-tighter font-bold">
								<p className="absolute top-12"> 02</p>
							</h1>
							<div className="w-full h-full flex flex-col justify-start items-start gap-6 px-2 xl:pl-8">
								<h1
									className={`text-neutral-100 font-bold text-xl pt-3 ${raj.className}`}
								>
									Telematics Solutions
								</h1>
								<p className={`text-neutral-200/90 pr-2 xl:pr-8 text-sm`}>
									Enhance vehicle security and monitoring with B-Max
									Telematics&apos; advanced solutions, including tracking, fleet
									management, car alarms, and dashcam installations.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-12 xl:gap-0">
						<div className="w-full">
							<h1 className="relative inset-0 text-neutral-500/10 text-[12rem] tracking-tighter font-bold">
								<p className="absolute top-12"> 03</p>
							</h1>
							<div className="w-full h-full flex flex-col justify-start items-start gap-6 px-2 xl:pl-8">
								<h1
									className={`text-neutral-100 font-bold text-xl pt-3 ${raj.className}`}
								>
									Vehicle Security
								</h1>
								<p className={`text-neutral-200/90 pr-2 xl:pr-8 text-sm`}>
									Protect your vehicles with B-Max Telematics&apos;
									immobilizers, GPS tracking, and anti-theft systems, ensuring
									peace of mind.
								</p>
							</div>
						</div>
						<div className="w-full">
							<h1 className="relative inset-0 text-neutral-500/10 text-[12rem] tracking-tighter font-bold">
								<p className="absolute top-12"> 04</p>
							</h1>
							<div className="w-full h-full flex flex-col justify-start items-start gap-6 px-2 xl:pl-8">
								<h1
									className={`text-neutral-100 font-bold text-xl pt-3 ${raj.className}`}
								>
									Fleet Services
								</h1>
								<p className={`text-neutral-200/90 pr-2 xl:pr-8 text-sm`}>
									Optimize fleet operations with B-Max Telematics&apos;
									tracking, fuel management, driver behavior monitoring, and
									maintenance management solutions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
