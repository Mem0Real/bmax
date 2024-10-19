"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TopLoaderProvider = ({ children }) => {
	return (
		<>
			{children}
			<ProgressBar
				height="6px"
				color="#3686D3"
				options={{ showSpinner: false }}
				shallowRouting
			/>
		</>
	);
};

export default TopLoaderProvider;
