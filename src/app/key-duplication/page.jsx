import React from "react";

import { duplicationData } from "@/data/solution";
import GeneratePage from "../components/GeneratePage";

export default function KeyDuplicate() {
	return <GeneratePage data={duplicationData} type="webp" />;
}
