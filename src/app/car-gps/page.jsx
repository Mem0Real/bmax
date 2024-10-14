import React from "react";
import GenerateSolution from "../components/GenerateSolution";
import { cGpsData } from "@/data/solution";

export default function Page() {
	return <GenerateSolution data={cGpsData} />;
}
