import React from "react";

import { replacementData } from "@/data/solution";
import GeneratePage from "../components/GeneratePage";

export default function KeyReplace() {
	return <GeneratePage data={replacementData} type="png" sm />;
}
