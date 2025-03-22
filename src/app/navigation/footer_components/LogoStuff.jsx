import React from "react";
import Image from "next/image";
import Links from "@/app/components/Links";

export default function LogoStuff() {
	return (
		<section className="w-full">
			<div className="flex flex-col justify-stretch items-start gap-2 md:gap-4">
				{/* <div className="self-start w-[150px] h-[70px] md:w-[200px] md:h-[100px] xl:h-20 xl:w-48 relative"> */}
				<div className="self-start w-[100px] h-16 relative">
					<Image
						fill
						src="/images/logo4.webp"
						alt="B-Max"
						priority
						className="object-fill object-center absolute"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<p className={`self-center text-sm pb-6 xl:w-[15rem]`}>
					Advanced telematics solutions for seamless fleet management. GPS
					tracking, video telematics, fuel monitoring, and more. Empower your
					business today. Contact us now.
				</p>

				<Links />
			</div>
		</section>
	);
}
