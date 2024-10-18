import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import { useIcons } from "@/app/components/CustomIcons";

export default function SolutionDrop() {
	const { LockIcon, FleetIcon, TrackingIcon, FuelIcon, VideoIcon } = useIcons();

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
			icon: FuelIcon,
			header: "Fuel Monitoring Solutions",
			nest: [
				{
					title: "Monitor Fuel Usage Prevent Theft",
					address: "/fuel-monitoring",
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
			icon: VideoIcon,
			header: "Video Safety",
			nest: [
				{ title: "4G AI Built-in Dashcam", address: "/ai-dashcam" },
				{ title: "Dashcam", address: "/dashcam" },
				{ title: "Video Telematics", address: "/video-telematics" },
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
	];

	return (
		<AnimatePresence>
			<motion.div className="z-50 lg:w-[50rem] lg:max-h-[35rem] py-6 lg:py-12 flex flex-col justify-end lg:justify-start items-start gap-4 lg:flex-wrap bg-lightestMellow text-neutral-900 font-thin text-xs rounded-b-md">
				{dropMenuData.map(({ icon, header, nest }, index) => (
					<div
						key={`${index} - header`}
						className="flex flex-col justify-center items-start gap-4 lg:gap-2"
					>
						<div className="flex gap-4 items-center w-full ps-2 lg:px-6 lg:pb-3">
							<div className="w-8 text-mellow">{icon}</div>
							<div className="text-lg font-bold">{header}</div>
						</div>
						<div className="flex flex-col justify-center items-start gap-4 pb-8 ps-6 lg:pb-3 lg:ps-8">
							{nest?.map(({ address, title }, index) => (
								<Link
									className="flex flex-col justify-center items-start ps-5 text-sm font-semibold"
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
