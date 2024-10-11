import React from "react";
import LogoStuff from "./footer_components/LogoStuff";
import QuickLinks from "./footer_components/QuickLinks";
import SolutionLinks from "./footer_components/SolutionLinks";

export default function Footer() {
	return (
		<div className="min-h-96 bg-pink-200/60 pt-12 pb-8 flex flex-col justify-center items-center">
			<div className="px-12 xl:px-40 flex justify-center items-center flex-wrap gap-4 md:gap-8 xl:gap-16">
				<LogoStuff />
				<QuickLinks />
				<SolutionLinks />
			</div>
			<div className="bg-blue-400 py-6">
				<div className="px-12 xl:px-40 flex justify-between items-center">
					<h1>©2024 All Rights Reserved.</h1>
					<h1>Web developed by Mem0Real</h1>
				</div>
			</div>
		</div>
	);
}
