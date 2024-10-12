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
				{ title: "Car Key Replacement", address: "car-key-replacement" },
				{ title: "Car Key Duplication", address: "car-key-duplication" },
				{ title: "Emergency Car Unlock", address: "emergency-car-unlock" },
				{
					title: "Ignition & Door Lock Repair",
					address: "ignition-doorlock-repair",
				},
			],
		},
		{
			icon: FleetIcon,
			header: "Fleet management solutions",
			nest: [
				{
					title: "Single software platform for all your fleet needs",
					address: "fleet-management-solutions",
				},
			],
		},
		{
			icon: TrackingIcon,
			header: "Vehicle Tracking",
			nest: [
				{ title: "Car GPS Tracking", address: "car-gps-tracking" },
				{ title: "Bike GPS Tracking", address: "bike-gps-tracking" },
				{ title: "Bus Tracking System", address: "bus-gps-tracking" },
				{ title: "Truck Tracking System", address: "truck-gps-tracking" },
			],
		},
		{
			icon: FuelIcon,
			header: "fuel Monitoring Solutions",
			nest: [
				{
					title: "Monitor Fuel Usage Prevent Theft",
					address: "fuel-monitoring-solutions",
				},
			],
		},
		{
			icon: HardwareIcon,
			header: "Hardware & Software Combinations",
			nest: [
				{ title: "Dashcam", address: "dashcam" },
				{ title: "Video Telematics", address: "video-telematics" },
			],
		},
		{
			icon: VideoIcon,
			header: "Video Safety",
			nest: [
				{ title: "4G AI Built-in Dashcam", address: "4g-ai-builtin-dashcam" },
				{
					title: "Enhance safety and reduce liability risk",
					address: "video-telematics",
				},
			],
		},
	];

	return (
		<AnimatePresence>
			<motion.div className="z-50 xl:w-[50rem] py-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 place-items-start gap-y-2 gap-x-1 bg-transparent xl:bg-neutral-900 text-neutral-200 font-thin text-xs rounded-md">
				{dropMenuData.map(({ icon, header, nest }) => (
					<div className="flex flex-col justify-center items-start gap-4 xl:gap-2">
						<div className="flex gap-4 items-center w-full ps-2 xl:px-6 xl:pb-3">
							<div className="w-8 text-yellow-500">{icon}</div>
							<div className="text-lg font-semibold">{header}</div>
						</div>
						<div className="flex flex-col justify-center items-start gap-4 pb-8 ps-6 xl:pb-3 xl:ps-8">
							{nest?.map((data) => (
								<Link
									className="flex flex-col justify-center items-start ps-5 text-xs"
									href={`/${data.address}`}
								>
									{data.title}
								</Link>
							))}
						</div>
					</div>
				))}
			</motion.div>
		</AnimatePresence>
	);
}
