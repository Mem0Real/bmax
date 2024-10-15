"use client";
import React from "react";

import { bikeGpsData } from "@/data/solution";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import GenerateCard from "../components/GenerateCard";
import { useIcons } from "../components/CustomIcons";
import BackgroundCard from "../components/BackgroundCard";
import ExtrudeText from "../components/ExtrudeText";
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
