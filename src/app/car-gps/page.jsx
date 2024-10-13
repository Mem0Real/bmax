import React from "react";
import GenerateSolution from "../components/GenerateSolution";
import { cGpsData } from "@/data/solution";

export default function page() {
	return <GenerateSolution data={cGpsData} />;
}
