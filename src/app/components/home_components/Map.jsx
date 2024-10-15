import React from "react";

export default function Map() {
	return (
		<div className="relative h-[60vh] w-full">
			<span className="z-1">
				<iframe
					width="100%"
					height="100%"
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.133452629574!2d38.7652243901535!3d9.000764569738669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855402964879%3A0xdf68c1e50bd60c54!2sGazebo%20adebabaye!5e1!3m2!1sen!2set!4v1729031680097!5m2!1sen!2set"
					loading="eager"
				></iframe>
			</span>
		</div>
	);
}
