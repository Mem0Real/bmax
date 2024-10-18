export function Video({ src, type }) {
	return (
		<video
			width="98vw"
			height="90vh"
			preload="none"
			autoPlay
			loop
			muted
			playsInline
		>
			<source src={src} type={`video/${type}`} />
		</video>
	);
}
