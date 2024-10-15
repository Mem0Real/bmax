"use client";
import React from "react";

import { bikeGpsData } from "@/data/solution";
import { useIcons } from "../components/CustomIcons";
import GeneratePageWithBg from "../components/GeneratePageWithBg";

export default function Page() {
	const { ClockIcon, LockedIcon, WifiIcon, CycleIcon, MonitorIcon, BikeIcon } =
		useIcons();

	const iconList = [
		ClockIcon,
		LockedIcon,
		WifiIcon,
		CycleIcon,
		MonitorIcon,
		BikeIcon,
	];

	return <GeneratePageWithBg iconList={iconList} data={bikeGpsData} />;
}
