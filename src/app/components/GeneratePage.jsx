import React from "react";
import Image from "next/image";

import Alternating from "./Alternating";
import AlternateText from "./AlternateText";
import AlternateImage from "./AlternateImage";
import ExtrudeText from "./ExtrudeText";
import BackgroundCard from "./BackgroundCard";

import { raj } from "@/app/ui/fonts";

export default function GeneratePage({
	data,
	bgImage,
	noExtra,
	type = "webp",
	sm = false,
}) {
	return (
		<div
			className={`min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 gap-10 md:gap-12 lg:gap-16 ${
				bgImage ? "w-full" : "pt-12"
			}`}
		>
			{!bgImage ? (
				<Alternating>
					<AlternateText
						header={data.landing.header}
						detail={data.landing.text}
					/>

					<AlternateImage img={`${data.location}/landing.${type}`} sm />
				</Alternating>
			) : (
				<div
					className="w-full min-h-[30rem] lg:min-h-[35rem] xl:min-h-[40rem] bg-fixed bg-cover lg:bg-auto bg-center bg-no-repeat grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row lg:gap-12 justify-end place-content-around"
					style={{
						backgroundImage: `url("/images/${data.location}/landing.${type}`,
					}}
				>
					<div className="ps-4 lg:ps-12 py-5 lg:py-12 flex flex-col justify-center items-center gap-2 lg:gap-8 backdrop-blur-3xl md:backdrop-blur-2xl text-black">
						<h1
							className={`text-2xl md:text-3xl xl:text-6xl font-bold uppercase ${raj.className}`}
						>
							{data.landing.header}
						</h1>
						<p className="text-base text-neutral-950 py-8 font-medium">
							{data.landing.text}
						</p>
					</div>
				</div>
			)}
			{data.headerText && (
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0">
					{data.headerText.header && (
						<h1
							className={`text-3xl md:text-4xl font-bold uppercase text-center ${raj.className}`}
						>
							{data.headerText.header}
						</h1>
					)}
					{data.headerText.text && (
						<p className="text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance">
							{data.headerText.text}
						</p>
					)}
				</div>
			)}

			<Alternating extrude>
				<AlternateImage img={`${data.location}/alt1.webp`} />
				<AlternateText header={data.alt1.header} detail={data.alt1.text}>
					<ExtrudeText dropData={data.dropData1} />
				</AlternateText>
			</Alternating>
			<Alternating extrude>
				<AlternateText header={data.alt2.header} detail={data.alt2.text}>
					<ExtrudeText dropData={data.dropData2} />
				</AlternateText>
				<AlternateImage img={`${data.location}/alt2.webp`} />
			</Alternating>

			{/* background */}
			<div className="flex flex-col w-full justify-center items-center gap-5">
				{data.background && (
					<div className="xl:px-4 flex flex-col justify-center items-center gap-2 text-center md:text-balance">
						{data.background.title && (
							<h3 className="text-base md:text-lg text-neutral-900 capitalize font-medium">
								{data.background.title}
							</h3>
						)}
						{data.background.header && (
							<h2
								className={`text-3xl md:text-5xl font-bold text-mellow capitalize ${raj.className}`}
							>
								{data.background.header}
							</h2>
						)}
						{data.background.detail && (
							<p className="text-base text-neutral-900/80 text-center px-2 md:px-0 xl:px-8 font-medium">
								{data.background.detail}
							</p>
						)}
					</div>
				)}

				<BackgroundCard location={data.location} data={data.background.bgs} />
			</div>
			{!noExtra && (
				<>
					{data.alt3 && (
						<Alternating>
							<AlternateImage img={`${data.location}/alt3.webp`} />
							<AlternateText
								header={data.alt3.header}
								detail={data.alt3.text}
								linkText={data.linkText}
								address={data.linkSrc}
							/>
						</Alternating>
					)}
					{data.alt4 && (
						<Alternating>
							<AlternateText
								header={data.alt4.header}
								detail={data.alt4.text}
								linkText={data.linkText}
								address={data.linkSrc}
							/>
							<AlternateImage img={`${data.location}/alt4.webp`} />
						</Alternating>
					)}
				</>
			)}

			<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
				<ExtrudeText dropData={data.dropData3} className="bg-neutral-200/80" />
			</div>
		</div>
	);
}
