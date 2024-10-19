import localFont from "next/font/local";

import "./globals.css";
import Footer from "./navigation/Footer";
import CustomIcons from "./components/CustomIcons";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Nav from "./navigation/Nav";

import ScrollToTopButton from "./components/ScrollToTop";
import TopLoaderProvider from "./components/TopLoader";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "B-Max Auto",
	description: "Auto Solutions for your vehicle Security",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<CustomIcons>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased text-sm`}
				>
					<MantineProvider>
						<Nav />
						<TopLoaderProvider>
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
