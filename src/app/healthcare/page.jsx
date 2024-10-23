"use client";
import React from "react";

import { healthData } from "@/data/industry";
import { useIcons } from "../components/CustomIcons";
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
			landingtype="webp"
			size="md"
		/>
	);
}
