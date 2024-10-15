import React from "react";
import GeneratePage from "../components/GeneratePage";

import { oilGasData } from "@/data/industry";

export default function OGData() {
	return <GeneratePage data={oilGasData} type="png" noExtra />;
}
