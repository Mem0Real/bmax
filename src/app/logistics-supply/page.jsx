import React from "react";
import GeneratePage from "../components/GeneratePage";

import { logisticData } from "@/data/industry";

export default function OGData() {
	return <GeneratePage data={logisticData} type="webp" noExtra />;
}
