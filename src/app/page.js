import { Suspense } from "react";
import Home from "./Home";
import { Loader } from "@mantine/core";

export default function Landing() {
	return (
		<div className="bg-neutral-100 w-full flex flex-col justify-center items-center">
			<Suspense fallback={<Loader color="gray" size="lg" />}>
				<Home />
			</Suspense>
		</div>
	);
}
