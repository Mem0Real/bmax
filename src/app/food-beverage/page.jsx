import React from "react";
import GeneratePage from "../components/GeneratePage";
import { fbData } from "@/data/industry";

export default function FbPage() {
	return <GeneratePage data={fbData} noExtra type="webp" />;
}
