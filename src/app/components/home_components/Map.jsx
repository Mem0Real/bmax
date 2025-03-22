import React from "react";

export default function Map() {
	return (
		<div className="relative h-[60vh] w-full">
			<span className="z-1">
				<iframe
					width="100%"
					height="100%"
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.7436487969867!2d38.762125!3d8.99572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknNDQuNiJOIDM4wrA0NSc0My43IkU!5e0!3m2!1sen!2set!4v1742293843290!5m2!1sen!2set"
					loading="eager"
				></iframe>
			</span>
		</div>
	);
}
