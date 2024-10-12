import React from "react";

export default function SayHello() {
	return (
		<div className="w-full px-12 xl:px-40">
			<div className="h-[60vh] flex justify-start items-center">
				<div className="w-[80%] mx-auto flex justify-start items-start gap-8">
					<div className="w-full flex flex-col justify-start items-start">
						<h1 className="text-5xl text-neutral-900 capitalize">Say Hello!</h1>
						<h1 className="h-56 w-full border border-black px-4 mt-5">Form</h1>
					</div>
					<div className="w-full flex flex-col justify-center items-start gap-4">
						<div className="invisible flex-1/4 h-8" />
						<div className="flex flex-col gap-2 pr-8">
							<h1 className="text-2xl font-semibold text-neutral-900">
								Address
							</h1>
							<p className="text-neutral-700/50 text-base">Bottom text</p>
						</div>

						<div className="flex flex-col gap-2 pr-8">
							<h1 className="text-2xl font-semibold text-neutral-900">
								Address
							</h1>
							<p className="text-neutral-700/50 text-base">Bottom text</p>
						</div>

						<div className="flex flex-col gap-2 pr-8">
							<h1 className="text-2xl font-semibold text-neutral-900">
								Address
							</h1>
							<p className="text-neutral-700/50 text-base">Bottom text</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
