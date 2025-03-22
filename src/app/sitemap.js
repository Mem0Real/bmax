import { linkData } from "@/data/links";

export default async function sitemap() {
	const baseUrl = "https://b-maxautosolutions.com";

	const links = linkData.map(({ address }) => {
		return {
			url: `${baseUrl}${address}`,
			lastModified: new Date(),
		};
	});

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		...links,
	];
}
