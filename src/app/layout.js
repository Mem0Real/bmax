import "./globals.css";
import Footer from "./navigation/Footer";
import CustomIcons from "./components/CustomIcons";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Nav from "./navigation/Nav";

import ScrollToTopButton from "./components/ScrollToTop";
import TopLoaderProvider from "./components/TopLoader";

import { raleway } from "@/app/ui/fonts";
import SlidingData from "./components/home_components/SlidingData";

export const metadata = {
	title: "B-Max",
	description: "Auto Solutions for your vehicle Security",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<CustomIcons>
				<body className="text-sm">
					<MantineProvider>
						<Nav />
						<TopLoaderProvider>
							<SlidingData />
							<ScrollToTopButton>
								<div className={`bg-neutral-100 ${raleway.className}`}>
									{children}
								</div>
							</ScrollToTopButton>
						</TopLoaderProvider>
					</MantineProvider>
					<Footer />
				</body>
			</CustomIcons>
		</html>
	);
}
