import React from "react";

import { fuelData } from "@/data/solution";
import GeneratePageWithBg from "../components/GeneratePageWithBg";

export default function Page() {
	return <GeneratePageWithBg data={fuelData} landingType="png" noCards />;
}
