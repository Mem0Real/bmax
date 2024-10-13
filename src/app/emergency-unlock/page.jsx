import React from "react";
import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";

export default function page() {
	return (
		<div className="w-full my-auto flex flex-col justify-center items-center text-neutral-900 gap-10 md:gap-12 lg:gap-16">
			<Alternating>
				<AlternateImage img="replacement-page/landing.jpg" />
				<AlternateText
					header="trial"
					detail="Contact us for guidance on broken door locks or ignitions. We can
						fix many issues, and if replacement is needed, we offer a wide
						selection of options."
					address="emerg"
				/>
			</Alternating>
		</div>
	);
}
