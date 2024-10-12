import Image from "next/image";
import React from "react";

export default function LogoStuff() {
	return (
		<section className="w-full">
			<div className="flex flex-col justify-stretch items-start gap-6">
				<div className="self-start w-full h-12 relative">
					<Image
						fill
						src="/images/logo.png"
						alt="B-Max"
						priority
						className="object-contain object-left absolute"
					/>
				</div>
				<p className="text-sm pl-4 pr-24">
					Advanced telematics solutions for seamless fleet management. GPS
					tracking, video telematics, fuel monitoring, and more. Empower your
					business today. Contact us now.
				</p>
				<div className="flex gap-2">
					<h1 className="px-2">1</h1>
					<h1 className="px-2">2</h1>
					<h1 className="px-2">3</h1>
					<h1 className="px-2">4</h1>
					<h1 className="px-2">5</h1>
				</div>
			</div>
		</section>
	);
}
