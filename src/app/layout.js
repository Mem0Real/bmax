import Head from "next/head";

import "./globals.css";
import Footer from "./navigation/Footer";
import CustomIcons from "./components/CustomIcons";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Nav from "./navigation/Nav";

import ScrollToTopButton from "./components/ScrollToTop";
import TopLoaderProvider from "./components/TopLoader";

import { raleway } from "@/app/ui/fonts";

import Topbar from "./components/Topbar";
import { Notifications } from "@mantine/notifications";

export const metadata = {
	title: "B-Max",
	description: "Auto Solutions for your vehicle Security",
	openGraph: {
		title: "B-Max Auto",
		description: "Auto Solutions for your Vehicle Security",
		url: "https://b-maxautosolutions.com",
		type: "website",
		images: [
			{
				url: "https://b-maxautosolutions.com/images/favicon.webp",
				width: 1200,
				height: 630,
				alt: "B-Max",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<meta name="description" content={metadata.description} />
				<meta property="og:title" content={metadata.openGraph.title} />
				<meta
					property="og:description"
					content={metadata.openGraph.description}
				/>
				<meta property="og:image" content={metadata.openGraph.images[0].url} />
				<meta property="og:url" content={metadata.openGraph.url} />
				<meta property="og:type" content={metadata.openGraph.type} />
			</Head>
			<CustomIcons>
				<body className={`${raleway.className} antialiased text-sm`}>
					<MantineProvider>
						<Nav />
						<Topbar />
						<TopLoaderProvider>
							<Notifications />
							<ScrollToTopButton>
								<div className="bg-neutral-100">{children}</div>
							</ScrollToTopButton>
						</TopLoaderProvider>
					</MantineProvider>
					<Footer />
				</body>
			</CustomIcons>
		</html>
	);
}
