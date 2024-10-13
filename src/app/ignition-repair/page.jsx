import React from "react";

import { ignitionData } from "@/data/solution";
import GenerateSolution from "../components/GenerateSolution";

export default function IgnitionRepair() {
	return <GenerateSolution data={ignitionData} bgImage={true} />;
}
