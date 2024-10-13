import Image from "next/image";
import React from "react";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import ExtrudeText from "../components/ExtrudeText";
import BackgroundCard from "../components/BackgroundCard";

import { duplicateData } from "@/data/solutionPage";

const dropData1 = [
	{
		id: "afford",
		name: "Affordable Car Key Duplication",
		nest: "Are you looking for affordable car key duplication services that won't break the bank? Our low-cost car key duplication services provide budget-friendly solutions. We understand that losing or damaging your keys can be stressful, and replacing them shouldn't add to your worries. Whether you need a spare key or a replacement for a lost one, our efficient and accurate key duplication services have got you covered. We prioritize precision to ensure your key works seamlessly with your vehicle. Trust us for cheap car key copies that don't compromise on quality. Say goodbye to overpriced key duplication and hello to savings.",
	},
	{
		id: "quick",
		name: "Quick and Accurate Car Key Copy",
		nest: "We know that when you need a key duplicated, you need it fast. Our fast car key duplication services ensure you're back on the road without unnecessary delays. Accuracy is paramount when duplicating a key. Our experienced locksmiths take precision seriously to deliver an accurate car key copy that works flawlessly with your vehicle. Don't waste your time and money on inefficient services. We are dedicated to providing efficient key duplication that respects your time and ensures your satisfaction. Experience quick, accurate, and efficient key duplication with us.",
	},
	{
		id: "quality",
		name: "Quality Car Key Duplication",
		nest: "Your keys are essential for your daily routines. That's why we provide durable car key copies that won't let you down. When it comes to key duplication, experience matters. Trust our skilled locksmiths for the most experienced key duplication services. We've built our reputation on being a trusted key copy service that delivers quality and reliability. Our focus is on providing you with keys that are not only accurate but also long-lasting. If you want to ensure that your key works seamlessly with your vehicle and stands the test of time, choose our quality car key duplication services. Your satisfaction is our priority.",
	},
];

const dropData2 = [
	{
		id: "precise",
		name: "Precision Car Key Copies",
		nest: "Ensure your key duplication is precise with our precision car key copies. Precision is more than just a word to us; it's a commitment. When you choose our services, you can count on accurate key copies. Every key is carefully examined and cut with utmost precision. We understand the importance of a key that fits perfectly and works flawlessly with your vehicle. If you're in need of precise key duplication that prioritizes accuracy, don't hesitate to contact us. Our skilled locksmiths are ready to provide you with top-notch key copies tailored to your specific needs.",
	},
	{
		id: "kdt",
		name: "Key Duplication Technology",
		nest: "Key duplication isn't just a craft; it's also about using the right technology. We stay updated with the latest advancements in key duplication technology to ensure we provide efficient and accurate services. Our commitment to using state-of-the-art equipment and methods sets us apart as a tech-savvy key duplication service provider. Whether you have a traditional metal key, a transponder key, or even a smart key, we have the technology and expertise to duplicate it with precision. Trust us to provide you with cutting-edge key duplication solutions that cater to your evolving needs.",
	},
	{
		id: "conv",
		name: "Convenient and Efficient Key Duplication",
		nest: "Convenience is a key part of our key duplication service. We understand that you have a busy schedule, and you don't want to spend excessive time waiting for your key to be duplicated. Our efficient key duplication process ensures you get a new key quickly. With our streamlined and convenient service, you can have your key copied while you wait, so you can get back to your daily activities without significant interruptions. We prioritize your time and convenience, making us your best choice for efficient and convenient key duplication.",
	},
];

const dropData3 = [
	{
		id: "model",
		name: "Can you replace keys for all vehicle makes and models?",
		nest: "Yes, we are fully stocked with blank keys that fit all makes and models, as well as transponder chips.",
	},
	{
		id: "remote",
		name: "Do you offer keyless and remote automobile keys?",
		nest: "Absolutely! We have hundreds of authentic proximity (keyless) keys and remote automobile keys in stock.",
	},
	{
		id: "transponder",
		name: "Can you replace transponder and smart keys?",
		nest: "Yes, we certainly can! B-Max specializes in transponder and smart key replacement. These advanced keys are an integral part of modern vehicles' security systems, and our experts are trained to program the new key to seamlessly integrate with your vehicle's technology. This ensures that your car remains secure, and you can regain access without a hitch. With our professional services, you can say goodbye to key-related hassles.",
	},
	{
		id: "exp",
		name: "Is car key replacement expensive with B-Max Telematics?",
		nest: "No, unlike car dealerships in Kenya, we provide car key replacements at a far lesser cost and with more ease.",
	},
	{
		id: "payment",
		name: "What payment methods do you accept for key replacement?",
		nest: "We accept cash, credit cards, and M-pesa payments for your convenience.",
	},
	{
		id: "process",
		name: "How does your key replacement process work?",
		nest: "Once you're ready to proceed, our qualified technician will come to your location and safely unlock the automobile using specialist hardware. We then use cutting-edge software to cut and program the new key or remote.",
	},
];

export default function KeyDuplicate() {
	return (
		<div className="w-full min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 gap-10 md:gap-12 lg:gap-16 pt-12">
			<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center items-center pt-8 md:py-2 gap-4 md:gap-8">
				<div className="basis-[40%] flex flex-col justify-start items-center md:items-start gap-4 md:gap-8">
					<h1 className="text-3xl md:text-4xl font-medium uppercase text-center md:text-start">
						{duplicateData.landing.header}
					</h1>
					<p className="text-base text-neutral-950/90">
						{duplicateData.landing.text}
					</p>
				</div>

				<div className="md:basis-[60%] relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src="/images/duplication-page/landing.png"
						fill
						className="object-contain object-center absolute"
						alt="Replacement"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0">
				<h1 className="text-3xl md:text-4xl font-medium uppercase text-center">
					{duplicateData.headerText.header}
				</h1>
				<p className="text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance">
					{duplicateData.headerText.text}
				</p>
			</div>

			<Alternating extrude>
				<AlternateImage img="duplication-page/dup.png" />
				<AlternateText
					header={duplicateData.alt1.header}
					detail={duplicateData.alt1.text}
				>
					<ExtrudeText dropData={dropData1} />
				</AlternateText>
			</Alternating>
			<Alternating extrude>
				<AlternateText
					header={duplicateData.alt2.header}
					detail={duplicateData.alt2.text}
				>
					<ExtrudeText dropData={dropData2} />
				</AlternateText>
				<AlternateImage img="duplication-page/conv.png" />
			</Alternating>

			{/* background */}
			<div className="flex flex-col w-full justify-center items-center gap-5">
				<div className="flex flex-col justify-center items-center gap-2 text-center md:text-balance">
					<h3 className="text-base md:text-lg text-neutral-900 capitalize font-medium">
						{duplicateData.background.title}
					</h3>
					<h2 className="text-2xl md:text-3xl font-medium text-mellow capitalize">
						{duplicateData.background.header}
					</h2>
					<p className="text-base text-neutral-900/80 text-center">
						{duplicateData.background.detail}
					</p>
				</div>

				{/* images */}
				<BackgroundCard
					location={duplicateData.background.location}
					header1={duplicateData.background.bg1.header}
					text1={duplicateData.background.bg1.text}
					header2={duplicateData.background.bg2.header}
					text2={duplicateData.background.bg2.text}
					header3={duplicateData.background.bg3.header}
					text3={duplicateData.background.bg3.text}
				/>
			</div>

			<Alternating>
				<AlternateImage img="duplication-page/alt2.png" />
				<AlternateText
					header={duplicateData.alt3.header}
					detail={duplicateData.alt3.text}
					linkText="Contact Us"
					address="contact"
				/>
			</Alternating>
			<Alternating>
				<AlternateText
					header={duplicateData.alt4.header}
					detail={duplicateData.alt4.text}
					linkText="Contact Us"
					address="contact"
				/>
				<AlternateImage img="duplication-page/alt1.png" />
			</Alternating>

			<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
				<ExtrudeText dropData={dropData3} className="bg-neutral-200/80" />
			</div>
		</div>
	);
}
