import React from "react";
import GenerateSolution from "../components/GenerateSolution";
import { pharmaData } from "@/data/industry";

export default function Pharma() {
	return <GenerateSolution data={pharmaData} noExtra type="png" />;
}
