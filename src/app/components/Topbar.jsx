import React from "react";
import Links from "./Links";

import { raj } from "../ui/fonts";
import Link from "next/link";

const Topbar = ({ className }) => {
	return (
		<div
			className={`bg-lightestMellow text-neutral-900 px-4 xl:px-40 pb-2 flex flex-col lg:flex-row justify-start md:justify-between items-center ${className}`}
		>
			<div
				className={`flex justify-center items-center gap-1 md:gap-4 font-semibold flex-wrap text-base ${raj.className}`}
			>
				<h1 className="self-start ">0950444646</h1>
				<Link href="/#hello" className="self-center">
					info@b-maxautosolutions.com
				</Link>
			</div>
			<Links sm top />
		</div>
	);
};

export default Topbar;
