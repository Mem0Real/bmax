import React from "react";

import { igData } from "@/data/solutionPage";
import GenerateSolution from "../components/GenerateSolution";

export default function IgnitionRepair() {
	return <GenerateSolution data={igData} bgImage={true} />;
}
