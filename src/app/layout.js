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
import BackDoor from "./components/BackDoor";

export const metadata = {
	metadataBase: new URL("https://b-maxautosolutions.com"),
	keywords: [
		"lock",
		"lock smith",
		"car",
		"car key",
		"replacement",
		"duplication",
		"unlock",
		"ignition",
		"ignition",
		"ignition repair",
		"fuel monitor",
		"fuel monitoring",
		"fleet",
		"fleet management",
		"dashcam",
		"video telematics",
		"tracking",
		"gps tracking",
		"car gps tracking",
		"bike gps tracking",
		"bus gps tracking",
		"truck gps tracking",
		"transport industry",
		"food beverage",
	],
	title: { default: "B-Max", template: `%s | B-Max` },
	description: "Auto Solutions for your vehicle Security",
	openGraph: {
		description: "Auto Solutions for your Vehicle Security",
		images: [
			{
				url: "https://b-maxautosolutions.com/images/favicon.webp",
				width: 1200,
				height: 630,
				alt: "B-Max",
			},
		],
		url: "https://b-maxautosolutions.com",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<CustomIcons>
				<body className={`${raleway.className} antialiased text-sm`}>
					<BackDoor>
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
					</BackDoor>
				</body>
			</CustomIcons>
		</html>
	);
}
