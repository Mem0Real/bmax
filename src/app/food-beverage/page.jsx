import React from "react";
import GenerateSolution from "../components/GenerateSolution";
import { fbData } from "@/data/industry";

export default function FbPage() {
	return <GenerateSolution data={fbData} noExtra type="png" />;
}
