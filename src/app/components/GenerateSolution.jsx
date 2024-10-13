import Image from "next/image";
import React from "react";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import ExtrudeText from "../components/ExtrudeText";
import BackgroundCard from "../components/BackgroundCard";

const dropData1 = [
	{
		id: "lost",
		name: "Lost car key replacement",
		nest: "Lost your car keys? Don't worry; our services are available around the clock. Whether you're stranded or need a spare, our affordable and quick locksmiths are here to help. Don't let a lost key ruin your day. Contact us now.",
	},
	{
		id: "program",
		name: "Car key programming",
		nest: "For professional car key programming services, look no further. Our team specializes in transponder and smart key programming, ensuring seamless integration with your vehicle's security system. Wondering how to program a car key yourself? Save time and hassle by consulting our experts. When you need to program a new car key, we're the trusted choice.",
	},
	{
		id: "emergency",
		name: "Emergency car key replacement",
		nest: "Facing a car key emergency? We've got your back. Our 24/7 emergency car key replacement services are just a call away. Whether you've lost your car keys or require a swift replacement, our expert locksmiths are here to assist. Don't stress over lost keys; contact us for urgent car key replacement, anytime, anywhere.",
	},
];

const dropData2 = [
	{
		id: "afford",
		name: "Affordable Car Key Replacement",
		nest: "Are you searching for an affordable car key replacement service near you? Look no further. At B-Max, we understand the importance of cost-effective solutions. Our budget-friendly car key cutting services are designed to fit your wallet. When you need a car key replacement that won't break the bank, we're here for you. Don't compromise on quality for price, trust B-Max for reasonable car key replacement costs.",
	},
	{
		id: "lostSol",
		name: "Lost Car Key Solutions",
		nest: "Have you lost your car keys and find yourself wondering what to do next? B-Max has the answer. Our professional lost car key replacement services are at your disposal. We know how stressful losing car keys can be, and that's why we specialize in the recovery and fast replacement of lost car keys. Our skilled locksmiths are dedicated to providing fast, efficient, and hassle-free solutions. If you're seeking lost car key locksmith services, you've come to the right place. Don't stress, contact B-Max today.",
	},
	{
		id: "fob",
		name: "Key Fob Replacement",
		nest: "When it comes to key fob replacement services, B-Max is your trusted partner. Our expertise extends beyond traditional car keys to include keyless entry remotes and car key fob battery replacements. Wondering where to buy a key fob for your car? Look no further. B-Max is your one-stop destination for quality key fob solutions. If you've lost your key fob and need a replacement, or if your key fob battery needs changing, we're here to help. Keep your vehicle secure and operational with B-Max's key fob expertise.",
	},
];

const dropData3 = [
	{
		id: "lost",
		name: "I've lost my car keys. What should I do?",
		nest: "Losing your car keys can be a frustrating experience. But don't worry; Autotronix is here to assist you. First, contact us immediately; our 24/7 emergency locksmith services are available to swiftly provide you with a replacement key. Our team of experts understands the urgency of such situations and is equipped to handle them efficiently. If you're worried about compatibility, rest assured that our car key replacement services cover a wide range of car makes and models. We prioritize your convenience and peace of mind, ensuring a hassle-free solution when you need it most.",
	},
	{
		id: "provide",
		name: "Do you provide car key replacement for all vehicle types?",
		nest: "Absolutely! Autotronix is your one-stop solution for car key replacement services, and we cater to a diverse range of vehicles. Whether you have a car, truck, van, or any other vehicle type, our skilled locksmiths are well-versed in various key types and car models. We understand that each vehicle comes with its unique key specifications, and our comprehensive coverage ensures that we can assist you, no matter the vehicle you drive.",
	},
	{
		id: "transponder",
		name: "Can you replace transponder and smart keys?",
		nest: "Yes, we certainly can! Autotronix specializes in transponder and smart key replacement. These advanced keys are an integral part of modern vehicles' security systems, and our experts are trained to program the new key to seamlessly integrate with your vehicle's technology. This ensures that your car remains secure, and you can regain access without a hitch. With our professional services, you can say goodbye to key-related hassles.",
	},
	{
		id: "long",
		name: "How long does it take to replace a car key?",
		nest: "The duration required to replace a car key can vary based on several factors. These include your car's make and model, the type of key you need, and the specific technology involved. However, our primary objective is to provide swift and efficient solutions to minimize any inconvenience. When you contact Autotronix for car key replacement, our experts will gather the necessary details and provide you with an estimated timeframe based on your unique requirements.",
	},
	{
		id: "damaged",
		name: "My car key is damaged but not lost. What should I do?",
		nest: "If your car key is damaged but still in your possession, Autotronix can assist you. Contact us, and our experienced locksmiths will assess the extent of the damage. In many cases, we can repair or refurbish damaged keys to ensure they are fully functional. Our priority is to provide you with an effective solution that allows you to continue using your key without any issues.",
	},
	{
		id: "spare",
		name: "Can I get a spare car key made even if I have the original?",
		nest: "Certainly! Autotronix offers car key duplication services to meet your needs. Whether you have the original key or not, we can provide you with a spare key. Our advanced equipment and skilled technicians make the process seamless. This service ensures that you always have a backup key on hand, reducing the risk of being locked out of your vehicle in case of loss or damage to the original key.",
	},
	{
		id: "apart",
		name: "What sets Autotronix's car key replacement services apart?",
		nest: "Autotronix distinguishes itself through a combination of factors that prioritize your satisfaction. Our team comprises skilled locksmiths who possess extensive experience in car key replacement. We stay updated with the latest industry technology, ensuring we can cater to various key types and vehicle models. We prioritize convenience, security, and affordability. When you choose Autotronix, you're choosing hassle-free car key replacement services tailored to your unique needs. Our goal is to ensure you have a reliable key solution, regardless of the circumstances.",
	},
];

export default function GenerateSolution({ data, bgImage }) {
	return (
		<div
			className={`min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 gap-10 md:gap-12 lg:gap-16 ${
				bgImage ? "w-full" : "pt-12"
			}`}
		>
			{!bgImage ? (
				<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center items-center pt-8 md:py-2 gap-4 md:gap-8">
					<div className="basis-[40%] flex flex-col justify-center items-center md:items-start gap-4 md:gap-8">
						<h1 className="text-3xl md:text-4xl font-medium uppercase text-center md:text-start">
							{data.landing.header}
						</h1>
						<p className="text-base text-neutral-950/90">{data.landing.text}</p>
					</div>

					<div className="md:basis-[60%] relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
						<Image
							src={`/images/${data.location}/landing.jpg`}
							fill
							className="object-contain object-center absolute"
							alt={data.location}
						/>
					</div>
				</div>
			) : (
				<div
					className="w-full xl:w-[90%] min-h-[30rem] lg:min-h-[35rem] xl:min-h-[40rem] bg-fixed bg-cover lg:bg-auto  bg-center bg-no-repeat grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row lg:gap-12 justify-end place-content-around"
					style={{
						backgroundImage: `url("/images/${data.location}/landing.jpg`,
					}}
				>
					<div className="ps-4 lg:ps-12 py-5 lg:py-0 flex flex-col justify-center items-center gap-2 lg:gap-8 backdrop-blur-3xl md:backdrop-blur-lg text-black">
						<h1 className="text-2xl md:text-3xl xl:text-6xl font-medium uppercase">
							{data.landing.header}
						</h1>
						<p className="text-base text-black/90 py-8 font-medium">
							{data.landing.text}
						</p>
					</div>
				</div>
			)}
			<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0">
				<h1 className="text-3xl md:text-4xl font-medium uppercase text-center">
					{data.headerText.header}
				</h1>
				<p className="text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance">
					{data.headerText.text}
				</p>
			</div>

			<Alternating extrude>
				<AlternateImage img={`${data.location}/alt1.png`} />
				<AlternateText header={data.alt1.header} detail={data.alt1.text}>
					<ExtrudeText dropData={dropData1} />
				</AlternateText>
			</Alternating>
			<Alternating extrude>
				<AlternateText header={data.alt2.header} detail={data.alt2.text}>
					<ExtrudeText dropData={dropData2} />
				</AlternateText>
				<AlternateImage img={`${data.location}/alt2.png`} />
			</Alternating>

			{/* background */}
			<div className="flex flex-col w-full justify-center items-center gap-5">
				<div className="flex flex-col justify-center items-center gap-2 text-center md:text-balance">
					<h3 className="text-base md:text-lg text-neutral-900 capitalize font-medium">
						{data.background.title}
					</h3>
					<h2 className="text-2xl md:text-3xl font-medium text-mellow capitalize">
						{data.background.header}
					</h2>
					<p className="text-base text-neutral-900/80 text-center">
						{data.background.detail}
					</p>
				</div>

				<BackgroundCard
					location={data.location}
					header1={data.background.bg1.header}
					text1={data.background.bg1.text}
					header2={data.background.bg2.header}
					text2={data.background.bg2.text}
					header3={data.background.bg3.header}
					text3={data.background.bg3.text}
				/>
			</div>
			<Alternating>
				<AlternateImage img={`${data.location}/alt3.png`} />
				<AlternateText
					header={data.alt3.header}
					detail={data.alt3.text}
					linkText={data.linkText}
					address={data.linkSrc}
				/>
			</Alternating>
			<Alternating>
				<AlternateText
					header={data.alt4.header}
					detail={data.alt4.text}
					linkText={data.linkText}
					address={data.linkSrc}
				/>
				<AlternateImage img={`${data.location}/alt4.png`} />
			</Alternating>

			<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
				<ExtrudeText dropData={dropData3} className="bg-neutral-200/80" />
			</div>
		</div>
	);
}
