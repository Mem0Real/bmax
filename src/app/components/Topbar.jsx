import React from "react";
import Links from "./Links";

const Topbar = ({ className }) => {
	return (
		<div
			className={`bg-lightestMellow text-neutral-900 px-4 xl:px-40 flex flex-col lg:flex-row justify-start md:justify-between items-center ${className}`}
		>
			<div className="flex justify-center items-center gap-1 md:gap-4 font-semibold flex-wrap text-xs md:text-sm">
				<h1 className="self-start ">+251-911 71 77 95</h1>
				<h1 className="self-end">+251-910 40 98 15</h1>
				<h1 className="self-center">info@b-maxautosolutions.com</h1>
			</div>
			<Links sm />
		</div>
	);
};

export default Topbar;
