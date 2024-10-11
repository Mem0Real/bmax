import React from "react";

const Topbar = ({ className }) => {
	return (
		<div
			className={`bg-blue-400 text-neutral-200 h-full min-h-12 px-12 xl:px-40 flex justify-evenly items-center ${className}`}
		>
			<div className="flex justify-center items-center gap-4 flex-wrap">
				<h1 className={className}>Top Bar</h1>
			</div>
			<div className="flex justify-center items-center gap-4 flex-wrap">
				<h1>1</h1>
				<h1>2</h1>
				<h1>3</h1>
				<h1>4</h1>
			</div>
		</div>
	);
};

export default Topbar;
