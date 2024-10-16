import React from "react";
import Links from "./Links";

const Topbar = ({ className }) => {
	return (
		<div
			className={`bg-mellow/20 text-neutral-900 px-4 xl:px-40 font-semibold h-full min-h-8 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 ${className}`}
		>
			<div className="flex justify-center items-center gap-4 flex-wrap">
				<h1 className={className}>
					+251-911 71 77 95, +251-910 40 98 15, info@b-maxautosolutions.com
				</h1>
			</div>
			<Links sm />
		</div>
	);
};

export default Topbar;
