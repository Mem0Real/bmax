"use client";
import React from "react";

import { aiDashData } from "@/data/solution";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import GenerateCard from "../components/GenerateCard";
import { useIcons } from "../components/CustomIcons";

import { Table } from "@mantine/core";
import GenerateTable from "../components/GenerateTable";

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

export default function Page() {
	const {
		EyeIcon,
		StorageIcon,
		RecordignIcon,
		ExtensionIcon,
		VideoIcon,
		CursorIcon,
	} = useIcons();

	const iconList = [
		EyeIcon,
		StorageIcon,
		RecordignIcon,
		ExtensionIcon,
		VideoIcon,
		CursorIcon,
	];

	const body1 = aiDashData.data.obj1.table.map((entry, index) => (
		<Table.Tr key={index}>
			<Table.Td>{entry.title}</Table.Td>
			<Table.Td>{entry.value}</Table.Td>
		</Table.Tr>
	));
	const body2 = aiDashData.data.obj2.table.map((entry, index) => (
		<Table.Tr key={index}>
			<Table.Td>{entry.title}</Table.Td>
			<Table.Td>{entry.value}</Table.Td>
		</Table.Tr>
	));
	const body3 = aiDashData.data.obj3.table.map((entry, index) => (
		<Table.Tr key={index}>
			<Table.Td>{entry.title}</Table.Td>
			<Table.Td>{entry.value}</Table.Td>
		</Table.Tr>
	));
	const body4 = aiDashData.data.obj4.table.map((entry, index) => (
		<Table.Tr key={index}>
			<Table.Td>{entry.title}</Table.Td>
			<Table.Td>{entry.value}</Table.Td>
		</Table.Tr>
	));

	return (
		<div className="relative w-full flex flex-col">
			<div
				className=" min-h-screen bg-cover bg-bottom bg-no-repeat"
				style={{ backgroundImage: "url(/images/aidash-page/background.jpg)" }}
			>
				<div className="absolute inset-0 bg-black opacity-60" />

				<div className="relative w-full min-h-[50rem] flex flex-col justify-center items-center text-neutral-100 gap-10 md:gap-12 lg:gap-16">
					<Alternating>
						<AlternateText
							header={aiDashData.landing.header}
							detail={aiDashData.landing.text}
							address={aiDashData.linkSrc}
							linkText={aiDashData.linkText}
							swap={true}
						/>
						<AlternateImage img={`${aiDashData.location}/landing.png`} />
					</Alternating>
				</div>
			</div>
			<div className="relative bg-white text-neutral-900 py-12 flex flex-col justify-center items-center gap-6">
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0 ">
					<h1
						className={`text-3xl md:text-5xl font-medium text-center uppercase ${raj.className}`}
					>
						{aiDashData.headerText1.header}
					</h1>
				</div>
				<Alternating>
					<AlternateImage img={`${aiDashData.location}/alt1.png`} sm />
					<AlternateText
						header={aiDashData.alt1.header}
						detail={[aiDashData.alt1.text1, aiDashData.alt1.text2]}
						linkText={aiDashData.linkText}
						address={aiDashData.linkSrc}
						dark
					/>
				</Alternating>
				<Alternating>
					<AlternateText
						header={aiDashData.alt2.header}
						detail={[aiDashData.alt2.text1, aiDashData.alt2.text2]}
						linkText={aiDashData.linkText}
						address={aiDashData.linkSrc}
						dark
					/>
					<AlternateImage img={`${aiDashData.location}/alt2.png`} />
				</Alternating>
				{/* Header1 */}
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0">
					<h1
						className={`text-3xl md:text-5xl font-bold uppercase text-center ${raj.className}`}
					>
						{aiDashData.headerText2.header}
					</h1>
					<p
						className={`text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-start lg:text-balance ${raleway.className}`}
					>
						{aiDashData.headerText2.text}
					</p>
				</div>
				{/* cards */}
				<div className="w-full px-4 xl:px-40 flex justify-center xl:justify-evenly items-center gap-8 lg:gap-4 xl:gap-20 flex-wrap">
					<GenerateCard icons={iconList} data={aiDashData.cards} size="sm" />
				</div>
				{/* header2 */}
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-10 py-12">
					<h1
						className={`text-3xl md:text-5xl font-bold uppercase text-center ${raj.className}`}
					>
						{aiDashData.headerText3.header}
					</h1>
					<p
						className={`px-6 xl:px-16 text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-start ${raleway.className}`}
					>
						{aiDashData.headerText3.text}
					</p>
				</div>
				{/* tabular data */}
				<div className="w-full px-4 xl:px-40 flex justify-evenly items-start flex-wrap gap-y-12">
					<div className="flex flex-col justify-start items-center gap-8 max-w-full lg:min-w-[30rem] lg:max-w-[30rem] min-h-[35rem]">
						<div
							className={`text-3xl md:text-5xl font-bold uppercase text-center self-center ${raj.className}`}
						>
							{aiDashData.data.obj1.header}
						</div>
						<GenerateTable body={body1} />
					</div>
					<div className="flex flex-col justify-start items-center gap-8 max-w-full lg:min-w-[30rem] lg:max-w-[30rem] min-h-[35rem]">
						<div
							className={`text-3xl md:text-5xl font-bold uppercase text-center self-center ${raj.className}`}
						>
							{aiDashData.data.obj2.header}
						</div>
						<GenerateTable body={body2} />
					</div>
					<div className="flex flex-col justify-start items-center gap-8 max-w-full lg:min-w-[30rem] lg:max-w-[30rem] min-h-[35rem]">
						<div
							className={`text-3xl md:text-5xl font-bold uppercase text-center self-center ${raj.className}`}
						>
							{aiDashData.data.obj3.header}
						</div>
						<GenerateTable body={body3} />
					</div>
					<div className="flex flex-col justify-start items-center gap-8 max-w-full lg:min-w-[30rem] lg:max-w-[30rem] min-h-[35rem]">
						<div
							className={`text-3xl md:text-5xl font-bold uppercase text-center self-center ${raj.className}`}
						>
							{aiDashData.data.obj4.header}
						</div>
						<GenerateTable body={body4} />
					</div>
				</div>
			</div>
		</div>
	);
}
