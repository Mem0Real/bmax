import React from "react";

export default function Map() {
	return (
		<div className="relative h-[60vh] w-full">
			<span className="z-1">
				<iframe
					width="100%"
					height="100%"
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.340652960034!2d38.74999041025282!3d9.032656790991396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855999d29f4b%3A0x99338fc20315ddde!2sPiassa%20Arada%20building!5e0!3m2!1sen!2set!4v1728746848364!5m2!1sen!2set"
					allowFullScreen=""
					loading="eager"
				></iframe>
			</span>
		</div>
	);
}
