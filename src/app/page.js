import Home from "./Home";

export default function Landing() {
	const items = [
		["Welcome to our site", "Explore our features", "Discover more"],
		["Our Services", "What We Offer", "Why Choose Us"],
		["Latest News", "Upcoming Events", "Join Our Community"],
		["Contact Us", "Get Support", "Follow Us on Social Media"],
	];

	return (
		<div className="bg-neutral-100 w-full flex flex-col justify-center items-center">
			<Home />
		</div>
	);
}
