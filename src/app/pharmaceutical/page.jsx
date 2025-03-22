import React from "react";
import GeneratePage from "../components/GeneratePage";
import { pharmaData } from "@/data/industry";

export default function Pharma() {
	return <GeneratePage data={pharmaData} noExtra type="webp" />;
}
