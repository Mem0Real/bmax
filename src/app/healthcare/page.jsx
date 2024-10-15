"use client";
import React from "react";

import { healthData } from "@/data/industry";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import GenerateCard from "../components/GenerateCard";
import { useIcons } from "../components/CustomIcons";
import BackgroundCard from "../components/BackgroundCard";
import GeneratePageWithBg from "../components/GeneratePageWithBg";

export default function Page() {
	const {
		ThermoIcon,
		ClinicIcon,
		HospitalIcon,
		AmbulanceIcon,
		IntegrationIcon,
		ExpertsIcon,
	} = useIcons();

	const iconList = [
		ThermoIcon,
		ClinicIcon,
		HospitalIcon,
		AmbulanceIcon,
		IntegrationIcon,
		ExpertsIcon,
	];

	return (
		<GeneratePageWithBg
			iconList={iconList}
			data={healthData}
			landingType="png"
			size="md"
		/>
	);
}
