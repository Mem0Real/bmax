import React from "react";
import Image from "next/image";

import Alternating from "./Alternating";
import AlternateText from "./AlternateText";
import AlternateImage from "./AlternateImage";
import ExtrudeText from "./ExtrudeText";
import BackgroundCard from "./BackgroundCard";

import { Rajdhani, Raleway } from "next/font/google";

const raleway = Raleway({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

const raj = Rajdhani({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

export default function GeneratePage({ data, bgImage, noExtra, type = "jpg" }) {
	return (
		<div
			className={`min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 gap-10 md:gap-12 lg:gap-16 ${
				bgImage ? "w-full" : "pt-12"
			}`}
		>
			{!bgImage ? (
				<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center items-center pt-8 md:py-2 gap-4 md:gap-8">
					<div className="basis-[40%] flex flex-col justify-center items-center md:items-start gap-4 md:gap-8">
						<h1
							className={`text-3xl md:text-6xl text-darkYellow font-bold uppercase text-center md:text-start ${raj.className}`}
						>
							{data.landing.header}
						</h1>
						<p className={`text-lg text-neutral-950/90 ${raleway.className}`}>
							{data.landing.text}
						</p>
					</div>

					<div className="md:basis-[60%] relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
						<Image
							src={`/images/${data.location}/landing.${type}`}
							fill
							className="object-fill md:object-contain object-center absolute"
							alt={data.location}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							priority
						/>
					</div>
				</div>
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
						<p
							className={`text-base text-neutral-950 py-8 font-medium ${raleway.className}`}
						>
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
						<p
							className={`text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance ${raleway.className}`}
						>
							{data.headerText.text}
						</p>
					)}
				</div>
			)}

			<Alternating extrude>
				<AlternateImage img={`${data.location}/alt1.png`} />
				<AlternateText header={data.alt1.header} detail={data.alt1.text}>
					<ExtrudeText dropData={data.dropData1} />
				</AlternateText>
			</Alternating>
			<Alternating extrude>
				<AlternateText header={data.alt2.header} detail={data.alt2.text}>
					<ExtrudeText dropData={data.dropData2} />
				</AlternateText>
				<AlternateImage img={`${data.location}/alt2.png`} />
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
							<p
								className={`text-base text-neutral-900/80 text-center px-2 md:px-0 xl:px-8 font-medium ${raleway.className}`}
							>
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
							<AlternateImage img={`${data.location}/alt3.png`} />
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
							<AlternateImage img={`${data.location}/alt4.png`} />
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
