"use client";

import React from "react";
import Image from "next/image";

import { useIcons } from "@/app/components/CustomIcons";
import Link from "next/link";

export default function LogoStuff() {
	const { FacebookIcon, TwitterIcon, InstagramIcon, TiktokIcon } = useIcons();

	return (
		<section className="w-full">
			<div className="flex flex-col justify-stretch items-start gap-2">
				<div className="self-start w-full h-36 relative">
					<Image
						fill
						src="/images/logo.png"
						alt="B-Max"
						priority
						className="object-contain xl:object-cover object-left absolute"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<p className="text-sm pb-6 xl:w-[15rem]">
					Advanced telematics solutions for seamless fleet management. GPS
					tracking, video telematics, fuel monitoring, and more. Empower your
					business today. Contact us now.
				</p>
				<div className="flex gap-6 ps-4">
					<Link
						className="w-6 text-blue-700 bg-neutral-200 rounded-full"
						href="https://facebook.com"
						target="_blank"
					>
						{FacebookIcon}
					</Link>
					<Link
						className="w-6 text-blue-600"
						href="https://x.com"
						target="_blank"
					>
						{TwitterIcon}
					</Link>
					<Link
						className="w-6 text-pink-500"
						href="https://instagram.com"
						target="_blank"
					>
						{InstagramIcon}
					</Link>
					<Link
						className="w-6 bg-neutral-200 rounded-sm"
						href="https://tiktok.com"
						target="_blank"
					>
						{TiktokIcon}
					</Link>
				</div>
			</div>
		</section>
	);
}
