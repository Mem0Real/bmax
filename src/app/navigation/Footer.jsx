import React from "react";
import LogoStuff from "./footer_components/LogoStuff";
import QuickLinks from "./footer_components/QuickLinks";
import SolutionLinks from "./footer_components/SolutionLinks";

export default function Footer() {
	return (
		<div className="min-h-[30rem] bg-neutral-900 pt-12 flex flex-col justify-around items-center">
			<div className="px-12 xl:px-40 min-h-[24rem] flex justify-center items-stretch text-neutral-200">
				<div className="basis-1/4">
					<LogoStuff />
				</div>
				<div className="basis-1/2 -mt-2">
					<SolutionLinks />
				</div>
				<div className="basis-1/4 -mt-2">
					<QuickLinks />
				</div>
			</div>
			<div className="w-full bg-mellow py-6">
				<div className="px-12 xl:px-40 flex justify-between items-center">
					<h1>©2024 All Rights Reserved.</h1>
					<h1>Web developed by Mem0Real</h1>
				</div>
			</div>
			<div className="hidden h-16" />
		</div>
	);
}
