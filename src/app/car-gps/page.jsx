import React from "react";
import GeneratePage from "../components/GeneratePage";
import { cGpsData } from "@/data/solution";

export default function Page() {
	return <GeneratePage data={cGpsData} type="webp" />;
}
