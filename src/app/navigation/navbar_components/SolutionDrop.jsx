import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import { useIcons } from "@/app/components/CustomIcons";

export default function SolutionDrop() {
	const {
		LockIcon,
		FleetIcon,
		TrackingIcon,
		FuelIcon,
		HardwareIcon,
		VideoIcon,
	} = useIcons();

	const dropMenuData = [
		{
			icon: LockIcon,
			header: "Auto Locksmith Services",
			nest: [
				{ title: "Car Key Replacement", address: "/key-replacement" },
				{ title: "Car Key Duplication", address: "/key-duplication" },
				{ title: "Emergency Car Unlock", address: "/emergency-unlock" },
				{
					title: "Ignition & Door Lock Repair",
					address: "/ignition-repair",
				},
			],
		},
		{
			icon: FleetIcon,
			header: "Fleet management solutions",
			nest: [
				{
					title: "Single software platform for all your fleet needs",
					address: "/fleet-management",
				},
			],
		},
		{
			icon: TrackingIcon,
			header: "Vehicle Tracking",
			nest: [
				{ title: "Car GPS Tracking", address: "/car-gps" },
				{ title: "Bike GPS Tracking", address: "/bike-gps" },
				{ title: "Bus Tracking System", address: "/bus-gps" },
				{ title: "Truck Tracking System", address: "/truck-gps" },
			],
		},
		{
			icon: FuelIcon,
			header: "fuel Monitoring Solutions",
			nest: [
				{
					title: "Monitor Fuel Usage Prevent Theft",
					address: "/fuel-monitoring",
				},
			],
		},
		{
			icon: HardwareIcon,
			header: "Hardware & Software Combinations",
			nest: [
				{ title: "Dashcam", address: "/dashcam" },
				{ title: "Video Telematics", address: "/video-telematics" },
			],
		},
		{
			icon: VideoIcon,
			header: "Video Safety",
			nest: [
				{ title: "4G AI Built-in Dashcam", address: "/4g-ai-builtin-dashcam" },
				{
					title: "Enhance safety and reduce liability risk",
					address: "/video-telematics",
				},
			],
		},
	];

	return (
		<AnimatePresence>
			<motion.div className="z-50 xl:w-[50rem] py-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 place-items-start gap-y-2 gap-x-1 bg-transparent xl:bg-neutral-900 text-neutral-200 font-thin text-xs rounded-md">
				{dropMenuData.map(({ icon, header, nest }, index) => (
					<div
						key={`${index} - header`}
						className="flex flex-col justify-center items-start gap-4 xl:gap-2"
					>
						<div className="flex gap-4 items-center w-full ps-2 xl:px-6 xl:pb-3">
							<div className="w-8 text-mellow">{icon}</div>
							<div className="text-lg font-semibold">{header}</div>
						</div>
						<div className="flex flex-col justify-center items-start gap-4 pb-8 ps-6 xl:pb-3 xl:ps-8">
							{nest?.map(({ address, title }, index) => (
								<Link
									className="flex flex-col justify-center items-start ps-5 text-xs"
									key={index}
									href={address}
								>
									{title}
								</Link>
							))}
						</div>
					</div>
				))}
			</motion.div>
		</AnimatePresence>
	);
}
