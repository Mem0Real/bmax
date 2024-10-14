"use client";

import { createContext, useContext } from "react";

const IconsContext = createContext({});

export default function CustomIcons({ children }) {
	const LeftArrowIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 18l-6-6 6-6" />
		</svg>
	);
	const RightArrowIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 18l6-6-6-6" />
		</svg>
	);
	const LeftIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 18l-6-6 6-6" />
		</svg>
	);
	const RightIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 18l6-6-6-6" />
		</svg>
	);
	const CloseIcon = (
		// <svg
		// 	aria-hidden="true"
		// 	className="w-5 h-5"
		// 	fill="currentColor"
		// viewBox="0 0 20 20"
		// 	xmlns="http://www.w3.org/2000/svg"
		// >
		// 	<path
		// 		fillRule="evenodd"
		// 		d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
		// 		clipRule="evenodd"
		// 	></path>
		// </svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
		</svg>
	);
	const LoadingIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
		</svg>
	);
	const LoadingIcon2 = (
		<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<rect width="48" height="48" fill="white" fillOpacity="0.01"></rect>
				<path
					d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</g>
		</svg>
	);
	const SearchIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="16"
			fill="currentColor"
			className="bi bi-search"
			viewBox="0 0 16 16"
		>
			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
		</svg>
	);
	const TopArrowIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="32"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M16 12l-4-4-4 4M12 16V9" />
		</svg>
	);
	const TelegramIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="icon icon-tabler icon-tabler-brand-telegram"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
		</svg>
	);

	// BMax
	const LockIcon = (
		<svg
			viewBox="0 0 24.00 24.00"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
					stroke="currentColor"
					strokeWidth="1.5"
				></path>
				<path
					d="M6 10V8C6 4.68629 8.68629 2 12 2C14.7958 2 17.1449 3.91216 17.811 6.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				></path>
				<path
					d="M8 16H8.009M11.991 16H12M15.991 16H16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</g>
		</svg>
	);
	const FleetIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
			/>
		</svg>
	);
	const TrackingIcon = (
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				></path>
				<path
					d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				></path>
				<path
					d="M2 12L4 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				></path>
				<path
					d="M20 12L22 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				></path>
				<path
					d="M12 4V2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				></path>
				<path
					d="M12 22V20"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				></path>
			</g>
		</svg>
	);
	const FuelIcon = (
		<svg
			viewBox="0 0 1024 1024"
			className="icon"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M273.536 472.448h418.432v267.456H273.536z"
					fill="#DFA70CACD3DB"
				></path>
				<path
					d="M716.032 855.68a21.824 21.824 0 0 1-21.888 21.824H223.168a21.76 21.76 0 0 1-21.76-21.824V141.568a21.76 21.76 0 0 1 21.76-21.824h470.976c12.096 0 21.888 9.792 21.888 21.824V855.68z"
					fill="#DFA70C"
				></path>
				<path
					d="M112.32 841.088h807.232v76.48H112.32z"
					fill="#DFA70C5A7784"
				></path>
				<path
					d="M264.896 179.008h387.584v247.68H264.896z"
					fill="#DFA70CACD3DB"
				></path>
				<path
					d="M436.16 390.656l-20.8 36.032h83.2l-20.928-36.032zM334.784 270.784l-22.464 17.152-20.8-27.2 22.464-17.152zM608.64 244.032l22.4 17.088-20.8 27.2-22.4-17.088zM534.144 217.664l26.88 8.96-10.752 32.448-26.88-8.96zM441.216 211.968h28.352v34.24h-28.352zM395.136 249.856l-26.88 8.96-10.88-32.448 26.944-8.96z"
					fill="#DFA70C555F69"
				></path>
				<path
					d="M463.744 402.816l-19.008-11.712 100.096-149.248 7.36 4.544z"
					fill="#DFA70CCA5349"
				></path>
				<path
					d="M820.416 345.984a19.328 19.328 0 0 1-14.272-6.144l-105.664-110.976a19.84 19.84 0 0 1 0.768-27.904 19.648 19.648 0 0 1 27.776 0.768l105.664 111.04a19.712 19.712 0 0 1-14.272 33.216z"
					fill="#DFA70C478BBB"
				></path>
				<path
					d="M842.176 796.032c-9.792 0-20.352-1.408-31.872-4.288-74.304-18.048-65.024-137.408-57.024-190.656h-38.592v-39.424h86.208l-4.928 23.744c-10.624 50.432-18.752 157.824 23.616 168.128 21.12 5.12 36.288 3.904 45.248-3.904 14.912-12.736 20.032-46.4 15.232-100.032-2.944-32.96-14.72-46.976-29.696-64.768-22.912-27.392-48.96-58.368-47.808-150.336l39.296 0.512c-0.96 77.376 18.304 100.224 38.656 124.48 16.256 19.392 34.624 41.28 38.656 86.592 6.144 68.928-2.944 111.296-28.736 133.504-12.608 10.944-28.8 16.448-48.256 16.448z"
					fill="#DFA70C5A7784"
				></path>
				<path
					d="M777.6 326.464h85.632v103.744H777.6z"
					fill="#DFA70C478BBB"
				></path>
			</g>
		</svg>
	);
	const HardwareIcon = (
		<svg
			fill="#DFA70C"
			viewBox="0 0 16 16"
			id="hardware-16px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					id="Path_94"
					data-name="Path 94"
					d="M37.5,0h-13A1.5,1.5,0,0,0,23,1.5v13A1.5,1.5,0,0,0,24.5,16h13A1.5,1.5,0,0,0,39,14.5V1.5A1.5,1.5,0,0,0,37.5,0Zm0,15H28v-.5a.5.5,0,0,0-1,0V15H26V12.5a.5.5,0,0,0-1,0V15h-.5a.5.5,0,0,1-.5-.5V1.5a.5.5,0,0,1,.5-.5H29V9.5a.5.5,0,0,0,.5.5h1.592a1.5,1.5,0,1,0,0-1H30V1h7.5a.5.5,0,0,1,.5.5V2H35.5a.5.5,0,0,0,0,1H38V4H36.5a.5.5,0,0,0,0,1H38V6H33V4.908a1.5,1.5,0,1,0-1,0V6.5a.5.5,0,0,0,.5.5H38v7.5A.5.5,0,0,1,37.5,15ZM32,9.5a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,9.5Zm0-6a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,3.5ZM35.5,11a1.5,1.5,0,0,0-1.408,1H28.707L27,10.293V4.908a1.5,1.5,0,1,0-1,0V10.5a.5.5,0,0,0,.146.354l2,2A.5.5,0,0,0,28.5,13h5.592A1.5,1.5,0,1,0,35.5,11Zm-9-8a.5.5,0,1,1-.5.5A.5.5,0,0,1,26.5,3Zm9,10a.5.5,0,1,1,.5-.5A.5.5,0,0,1,35.5,13Z"
					transform="translate(-23)"
				></path>
			</g>
		</svg>
	);
	const VideoIcon = (
		// <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 	<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		// 	<g
		// 		id="SVGRepo_tracerCarrier"
		// 		strokeLinecap="round"
		// 		strokeLinejoin="round"
		// 	></g>
		// 	<g id="SVGRepo_iconCarrier">
		// 		<path
		// 			d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
		// 			stroke="currentColor"
		// 			strokeWidth="1.5"
		// 			strokeLinecap="round"
		// 			strokeLinejoin="round"
		// 		></path>
		// 	</g>
		// </svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path d="M4 11c-2.21 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm10 2c.702 0 1.373-.127 2-.35v6.35c0 1.104-.896 2-2 2h-10c-1.104 0-2-.896-2-2v-6.35c.627.223 1.298.35 2 .35 2.084 0 3.924-1.068 5-2.687 1.076 1.619 2.916 2.687 5 2.687zm4 1v4l6 3v-10l-6 3zm-4-11c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z" />
		</svg>
	);
	const BarIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.5"
				d="M5 7h14M5 12h14M5 17h14"
			/>
		</svg>
	);
	const AlarmIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z"
			/>
		</svg>
	);
	const SecurityIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
			/>
		</svg>
	);
	const FacebookIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				fillRule="evenodd"
				d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
				clipRule="evenodd"
			/>
		</svg>
	);
	const TwitterIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				fillRule="evenodd"
				d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
				clipRule="evenodd"
			/>
		</svg>
	);
	const InstagramIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
				clipRule="evenodd"
			/>
		</svg>
	);
	const TiktokIcon = (
		<svg viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
			<path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
		</svg>
	);
	const CheckIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	);
	const TechnologyIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3"
			/>
		</svg>
	);
	const SupportIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="0.9"
				d="m13.46 8.291 3.849-3.849a1.5 1.5 0 0 1 2.122 0l.127.127a1.5 1.5 0 0 1 0 2.122l-3.84 3.838a4 4 0 0 0-2.258-2.238Zm0 0a4 4 0 0 1 2.263 2.238l3.662-3.662a8.961 8.961 0 0 1 0 10.27l-3.676-3.676m-2.25-5.17 3.678-3.676a8.961 8.961 0 0 0-10.27 0l3.662 3.662a4 4 0 0 0-2.238 2.258L4.615 6.863a8.96 8.96 0 0 0 0 10.27l3.662-3.662a4 4 0 0 0 2.258 2.238l-3.672 3.676a8.96 8.96 0 0 0 10.27 0l-3.662-3.662a4.001 4.001 0 0 0 2.238-2.262m0 0 3.849 3.848a1.5 1.5 0 0 1 0 2.122l-.127.126a1.499 1.499 0 0 1-2.122 0l-3.838-3.838a4 4 0 0 0 2.238-2.258Zm.29-1.461a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-7.718 1.471-3.84 3.838a1.5 1.5 0 0 0 0 2.122l.128.126a1.5 1.5 0 0 0 2.122 0l3.848-3.848a4 4 0 0 1-2.258-2.238Zm2.248-5.19L6.69 4.442a1.5 1.5 0 0 0-2.122 0l-.127.127a1.5 1.5 0 0 0 0 2.122l3.849 3.848a4 4 0 0 1 2.238-2.258Z"
			/>
		</svg>
	);
	const ExpertIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1"
				d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
			/>
		</svg>
	);
	const ScaleIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1"
				d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"
			/>
		</svg>
	);
	const InnovativeIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
			/>
		</svg>
	);
	const PlusIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M5 12h14m-7 7V5"
			/>
		</svg>
	);
	const MinusIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M5 12h14"
			/>
		</svg>
	);
	const UnlockIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
			/>
		</svg>
	);
	const CarIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				fillRule="evenodd"
			/>
		</svg>
	);
	const PhoneIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
			/>
		</svg>
	);
	const TechIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M10 2h-2v-2h2v2zm-8 6h-2v2h2v-2zm0-5c0-.551.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3v4h2v-4zm0 8h-2v2h2v-2zm14-11h-2v2h2v-2zm-3 0h-2v2h2v-2zm-11 14h-2v2h2v-2zm18-2.042h-2.277l-2.36 5.386-2.883-7.93-2.442 5.78-2.071-4.14-1.129 1.966h-2.838v6.98h16v-8.042zm-16 .063h2.259l1.768-3.081 1.935 3.866 2.589-6.126 2.899 7.976 1.62-3.697h2.93v-6.959h-16v8.021zm10 11.979h2v-2h-2v2zm8-11h2v-2h-2v2zm-20 8v-4h-2v4c0 1.657 1.343 3 3 3h4v-2h-4c-.552 0-1-.449-1-1zm20 0c0 .551-.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3v-4h-2v4zm0-11h2v-2h-2v2zm0 6h2v-2h-2v2zm2-13c0-1.657-1.343-3-3-3h-4v2h4c.552 0 1 .449 1 1v4h2v-4zm-16 21h2v-2h-2v2zm3 0h2v-2h-2v2z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				fillRule="evenodd"
			/>
		</svg>
	);
	const MapIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M17.545 5l-5.545-4-5.545 4-6.455-4v18l6.455 4 5.545-4 5.545 4 6.455-4v-18l-6.455 4zm-10.545 2.073l4-2.886v13.068l-4 2.885v-13.067zm6-2.886l4 2.886v13.068l-4-2.885v-13.069zm-11 .405l4 2.479v13.294l-4-2.479v-13.294zm20 13.295l-4 2.479v-13.295l4-2.479v13.295z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				fillRule="evenodd"
			/>
		</svg>
	);
	const KeyIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			viewBox="0 0 24 24"
		>
			<path
				d="M24 11.5c0 3.613-2.951 6.5-6.475 6.5-2.154 0-4.101-1.214-5.338-3h-2.882l-1.046-1.013-1.302 1.019-1.362-1.075-1.407 1.081-4.188-3.448 3.346-3.564h8.841c1.145-1.683 3.104-3 5.339-3 3.497 0 6.474 2.866 6.474 6.5zm-10.691 1.5c.98 1.671 2.277 3 4.217 3 2.412 0 4.474-1.986 4.474-4.5 0-2.498-2.044-4.5-4.479-4.5-2.055 0-3.292 1.433-4.212 3h-9.097l-1.293 1.376 1.312 1.081 1.38-1.061 1.351 1.066 1.437-1.123 1.715 1.661h3.195zm5.691-3.125c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				fillRule="evenodd"
			/>
		</svg>
	);
	const ClockIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	);
	const LockedIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
			/>
		</svg>
	);
	const WifiIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path d="M0 7.244c3.071-3.24 7.314-5.244 12-5.244 4.687 0 8.929 2.004 12 5.244l-2.039 2.15c-2.549-2.688-6.071-4.352-9.961-4.352s-7.412 1.664-9.961 4.352l-2.039-2.15zm5.72 6.034c1.607-1.696 3.827-2.744 6.28-2.744s4.673 1.048 6.28 2.744l2.093-2.208c-2.143-2.261-5.103-3.659-8.373-3.659s-6.23 1.398-8.373 3.659l2.093 2.208zm3.658 3.859c.671-.708 1.598-1.145 2.622-1.145 1.023 0 1.951.437 2.622 1.145l2.057-2.17c-1.197-1.263-2.851-2.044-4.678-2.044s-3.481.782-4.678 2.044l2.055 2.17zm2.622 1.017c-1.062 0-1.923.861-1.923 1.923s.861 1.923 1.923 1.923 1.923-.861 1.923-1.923-.861-1.923-1.923-1.923z" />
		</svg>
	);
	const CycleIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={0.7}
		>
			<path d="M6.804 10.336l1.181-2.331-.462-1.005h-4.523v-1h5.992c.238 0 .5.19.5.5 0 .311-.26.5-.5.5h-.368l.47 1h6.483l-.841-2h3.243c.823.005 1.49.675 1.49 1.5 0 .828-.672 1.5-1.5 1.5-.711 0-.727-1 0-1 .239 0 .5-.189.5-.5 0-.239-.189-.5-.5-.5h-1.727l1.324 3.209c.454-.136.936-.209 1.434-.209 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.759 0-5-2.24-5-5 0-1.906 1.069-3.564 2.64-4.408l-.43-1.039-4.493 5.947h-1.742c-.251 2.525-2.384 4.5-4.975 4.5-2.759 0-5-2.24-5-5s2.241-5 5-5c.636 0 1.244.119 1.804.336zm-.455.897c-.421-.151-.876-.233-1.349-.233-2.207 0-4 1.792-4 4s1.793 4 4 4c2.038 0 3.723-1.528 3.97-3.5h-3.103c-.174.299-.497.5-.867.5-.551 0-1-.448-1-1 0-.533.419-.97.946-.998l1.403-2.769zm10.675.29c-1.208.688-2.024 1.988-2.024 3.477 0 2.208 1.792 4 4 4s4-1.792 4-4-1.792-4-4-4c-.363 0-.716.049-1.05.14l1.182 2.869c.49.064.868.484.868.991 0 .552-.448 1-1 1-.551 0-1-.448-1-1 0-.229.077-.44.207-.609l-1.183-2.868zm-9.783.164l-1.403 2.766.029.047h3.103c-.147-1.169-.798-2.183-1.729-2.813zm.454-.898c1.254.804 2.126 2.152 2.28 3.711h.998l-2.455-5.336-.823 1.625zm7.683-1.789h-5.839l2.211 4.797 3.628-4.797zm-14.378 0h4v-1h-4v1zm1-4h4v-1h-4v1z" />
		</svg>
	);
	const MonitorIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M21.169 19.754c.522-.79.831-1.735.831-2.754 0-2.761-2.238-5-5-5s-5 2.239-5 5 2.238 5 5 5c1.019 0 1.964-.309 2.755-.832l2.831 2.832 1.414-1.414-2.831-2.832zm-4.169.246c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-4.89 2h-7.11l2.599-3h2.696c.345 1.152.976 2.18 1.815 3zm-2.11-5h-10v-17h22v12.11c-.574-.586-1.251-1.068-2-1.425v-8.685h-18v13h8.295c-.19.634-.295 1.305-.295 2zm-2.131-4.372l.945-5.759.965 4.145c.096.425.686.473.847.063l.895-2.328.479.974c.08.169.164.277.438.277h1.208v-.877h-.921l-.836-1.624c-.156-.364-.677-.356-.82.014l-.741 1.895-1.144-5.062c-.052-.232-.242-.346-.43-.346-.2 0-.4.127-.44.373l-.948 5.847-.969-3.6c-.109-.43-.715-.455-.853-.029l-.721 2.545h-.823v.864h1.172c.16 0 .334-.13.38-.284l.406-1.257 1.043 4.206c.117.468.791.437.868-.037z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1"
			/>
		</svg>
	);
	const BikeIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			viewBox="0 0 24 24"
		>
			<path
				d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2c5.52 0 10 4.481 10 10 0 5.52-4.48 10-10 10-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10zm-2 2.252v1.038c-2.89.862-5 3.542-5 6.71 0 3.863 3.137 7 7 7 1.932 0 3.682-.784 4.949-2.051l.706.706c-1.448 1.449-3.448 2.345-5.655 2.345-4.416 0-8-3.585-8-8 0-3.725 2.551-6.859 6-7.748zm0 3.165v1.119c-1.195.692-2 1.984-2 3.464 0 2.208 1.792 4 4 4 1.104 0 2.104-.448 2.828-1.172l.707.707c-.905.904-2.155 1.465-3.535 1.465-2.76 0-5-2.24-5-5 0-2.049 1.235-3.811 3-4.583zm1 2.851v-6.268c0-.265.105-.52.293-.707.187-.188.442-.293.707-.293.265 0 .52.105.707.293.188.187.293.442.293.707v6.268c.598.346 1 .992 1 1.732 0 1.104-.896 2-2 2s-2-.896-2-2c0-.74.402-1.386 1-1.732z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1"
			/>
		</svg>
	);
	const BusIcon = (
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5 6V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.07989 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6H19M5 13H19M17 21V19M7 21V19M8 16H8.01M16 16H16.01"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	);
	const RouteIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="none"
			stroke="currentColor"
			strokeWidth="20"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M265.767,152.986l0.367,12.226H245.86l0.373-12.226h-77.996l-56.201,206.027h127.943l0.911-29.861h30.222 l0.906,29.861h128.019l-56.231-206.027H265.767z M245.15,188.742h21.7l0.823,27.121h-23.346L245.15,188.742z M242.238,284.627 l1.13-37.223h25.263l1.13,37.223H242.238z"></path>
		</svg>
	);
	const IntegrateIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"
			/>
		</svg>
	);
	const EfficientIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
			/>
		</svg>
	);
	const SignIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 400 400"
			stroke="currentColor"
			strokeWidth="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M354.737,108.917L307.76,68.793c-1.266-1.083-2.879-1.678-4.545-1.678h-76.898V36.471c0-0.58-0.072-1.143-0.211-1.683 C224.258,15.182,207.709,0,187.895,0c-19.805,0-36.346,15.161-38.211,34.75c-0.139,0.551-0.213,1.127-0.213,1.721v30.644h-34.164 c-3.865,0-7,3.134-7,7v82.209c0,3.866,3.135,7,7,7h34.164v15.359H82.524c-1.406,0-2.779,0.424-3.941,1.216l-46.979,32.003 c-1.891,1.288-3.031,3.419-3.059,5.707c-0.025,2.288,1.068,4.443,2.93,5.773l46.978,33.57c1.188,0.849,2.609,1.305,4.07,1.305 h66.947v113.478H74.377c-3.867,0-7,3.133-7,7c0,3.865,3.133,7,7,7h82.094h62.846h82.09c3.865,0,7-3.135,7-7c0-3.867-3.135-7-7-7 h-75.09V258.258h44.113c3.867,0,7-3.134,7-7v-65.574c0-3.865-3.133-7-7-7h-44.113v-15.359h76.898c1.723,0,3.387-0.636,4.67-1.786 l46.976-42.085c1.504-1.347,2.354-3.277,2.328-5.296C357.166,112.138,356.272,110.228,354.737,108.917z M163.471,37.645 c0.041-0.243,0.07-0.491,0.086-0.743C164.348,24.06,175.04,14,187.895,14c12.854,0,23.543,10.06,24.336,22.902 c0.016,0.249,0.045,0.494,0.086,0.734v29.478h-48.846V37.645z M212.317,371.735h-48.846V258.258h48.846V371.735z M263.43,192.684 v51.574H84.768l-36.99-26.433l36.904-25.142H263.43z M163.471,178.684v-15.359h48.846v15.359H163.471z M300.538,149.324h-168.23 h-10V81.115h178.324l11.709,10l27.221,23.25L300.538,149.324z"></path>
		</svg>
	);
	const PersonIcon = (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M13.9 2.999A1.9 1.9 0 1 1 12 1.1a1.9 1.9 0 0 1 1.9 1.899zM13.544 6h-3.088a1.855 1.855 0 0 0-1.8 1.405l-1.662 6.652a.667.667 0 0 0 .14.573.873.873 0 0 0 .665.33.718.718 0 0 0 .653-.445L10 9.1V13l-.922 9.219a.71.71 0 0 0 .707.781h.074a.69.69 0 0 0 .678-.563L12 14.583l1.463 7.854a.69.69 0 0 0 .678.563h.074a.71.71 0 0 0 .707-.781L14 13V9.1l1.548 5.415a.718.718 0 0 0 .653.444.873.873 0 0 0 .665-.329.667.667 0 0 0 .14-.573l-1.662-6.652A1.855 1.855 0 0 0 13.544 6z"></path>
		</svg>
	);
	const TruckIcon = (
		<svg
			fillRule="evenodd"
			clipRule="evenodd"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M3 18h-2c-.552 0-1-.448-1-1v-13c0-.552.448-1 1-1h13c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm12 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-13v2h1.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h7.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm-2-9h-11v7h11v-7zm3 4v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705z" />
		</svg>
	);
	const HeartIcon = (
		<svg
			fillRule="evenodd"
			clipRule="evenodd"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21.826 9h-2.086c.171-.487.262-.957.262-1.41 0-2.326-1.818-3.776-4.024-3.573-2.681.247-4.518 3.71-4.978 4.484-.527-.863-2.261-4.238-4.981-4.494-2.11-.199-4.019 1.181-4.019 3.582 0 3.109 4.347 7.084 9.001 11.615 1.16-1.127 2.285-2.208 3.324-3.243l.97 1.857c-1.318 1.302-2.769 2.686-4.294 4.181-6.164-6.037-11.001-10.202-11.001-14.403 0-3.294 2.462-5.526 5.674-5.596 2.163-.009 4.125.957 5.327 2.952 1.177-1.956 3.146-2.942 5.253-2.942 3.064 0 5.746 2.115 5.746 5.595 0 .464-.06.928-.174 1.395zm-11.094 4c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1h1.222l1.88-2.71c.14-.202.376-.315.622-.299.245.016.464.161.576.38l2.27 4.437.813-1.45c.124-.221.357-.358.611-.358h5.274v2h-4.513l-1.759 2.908c-.132.219-.373.348-.629.337-.255-.01-.484-.16-.598-.389l-2.256-4.559-.989 1.406c-.131.186-.345.297-.573.297h-1.951z"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
	const PinIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M14.24 4.559c1.705 2.816-1.52 5.378-3.858 3.539 1.902.49 4.171-1.303 3.858-3.539zm-1.24 7.351v10.09l-2 2v-12.09c-2.836-.477-5-2.938-5-5.91 0-3.314 2.687-6 6-6s6 2.687 6 6c0 2.972-2.164 5.433-5 5.91zm3-5.91c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4z" />
		</svg>
	);
	const SecureIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path d="M12 2.631c1.648 1.064 3.546 1.049 5.039.051l1.958 1.672c-2.852 3.671 1.003 7.384 1.003 11.011 0 2.964-2.273 4.17-4.18 4.66-1.974.507-2.887.847-3.82 1.466-.933-.619-1.846-.959-3.82-1.466-1.907-.49-4.18-1.696-4.18-4.66 0-3.635 3.859-7.336 1.004-11.011l1.959-1.673c1.475.982 3.355 1.032 5.037-.05zm5.016-2.631c-1.67 1.723-2.755 2.097-5.004.048-2.244 1.982-3.292 1.742-5.011-.03l-4.871 4.16c1.652 1.734 2.564 2.285 1.44 5.37-.843 2.309-1.57 3.991-1.57 5.817 0 3.266 2.071 5.67 5.682 6.597 2.596.666 2.989.951 4.318 2.038 1.329-1.087 1.722-1.372 4.318-2.038 3.611-.927 5.682-3.332 5.682-6.597 0-1.826-.727-3.507-1.569-5.817-1.125-3.084-.213-3.635 1.438-5.371-4.759-4.065-3.786-3.222-4.853-4.177z" />
		</svg>
	);
	const RiskIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path d="M12 2.829l9.171 9.171-9.171 9.171-9.171-9.171 9.171-9.171zm0-2.829l-12 12 12 12 12-12-12-12zm3.787 14.462l-2.463-2.462 2.463-2.463-1.324-1.323-2.463 2.462-2.463-2.463-1.324 1.324 2.463 2.463-2.463 2.463 1.323 1.324 2.464-2.464 2.463 2.463 1.324-1.324z" />
		</svg>
	);
	const SafetyIcon = (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
			/>
		</svg>
	);
	const GaugeIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="0.7"
		>
			<path d="M20.043 10.76c-.141-.427-.314-.844-.516-1.242l-2.454 1.106c.217.393.39.81.517 1.242l2.453-1.106zm-12.572-.904c.271-.354.579-.674.918-.957l-1.89-1.968c-.328.293-.637.614-.919.957l1.891 1.968zm1.714-1.514c.38-.221.781-.396 1.198-.523l-1.033-2.569c-.412.142-.813.317-1.2.524l1.035 2.568zm-2.759 3.615c.121-.435.287-.854.498-1.25l-2.47-1.066c-.196.403-.364.823-.498 1.25l2.47 1.066zm9.434-6.2c-.387-.205-.79-.379-1.2-.519l-1.023 2.573c.418.125.82.299 1.2.519l1.023-2.573zm2.601 2.131c-.281-.342-.59-.664-.918-.957l-1.891 1.968c.34.283.648.604.919.957l1.89-1.968zm-5.791-3.06c-.219-.017-.437-.026-.648-.026-.213 0-.432.009-.65.026v2.784c.216-.025.434-.038.65-.038.215 0 .434.013.648.038v-2.784zm-.649 13.782c-1.293 0-2.343-1.049-2.343-2.343 0-.883.489-1.652 1.21-2.051l1.133-5.309 1.133 5.309c.723.399 1.211 1.168 1.211 2.051 0 1.294-1.049 2.343-2.344 2.343zm-.021-15.61c5.514 0 10 4.486 10 10 0 1.758-.458 3.5-1.303 5h-4.427c-.41 1.047-1.645 3-4.27 3-2.656 0-3.859-1.953-4.27-3h-4.427c-.845-1.5-1.303-3.242-1.303-5 0-5.514 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12 0 2.583.816 5.042 2.205 7h4.357c.93 1.647 3.015 3 5.438 3s4.508-1.353 5.438-3h4.357c1.389-1.958 2.205-4.417 2.205-7 0-6.627-5.373-12-12-12z" />
		</svg>
	);
	const ComplyIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fillRule="evenodd"
			clipRule="evenodd"
			fill="none"
			stroke="currentColor"
		>
			<path d="M24 6.278l-11.16 12.722-6.84-6 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.278zm-22.681 5.232l6.835 6.01-1.314 1.48-6.84-6 1.319-1.49zm9.278.218l5.921-6.728 1.482 1.285-5.921 6.756-1.482-1.313z" />
		</svg>
	);
	const DriverIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path d="M23 18h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-15.999-10c-2.493 0-4.227 2.383-1.866 6.839.774 1.464-.826 1.812-2.545 2.209-1.491.345-1.59 1.072-1.59 2.334l.002.618h1.329c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.212-.463.355-1.22-.162-2.197-.952-1.798-1.219-3.374-.712-4.215.547-.909 2.27-.908 2.819.015.935 1.567-.793 3.982-1.02 4.982h1.396c.44-1 1.206-2.208 1.206-3.9.001-2.01-1.31-3.1-2.997-3.1zm7.754-1.556c.895-1.487 3.609-1.494 4.512.022.77 1.291.423 3.484-.949 6.017-.098.18-.17.351-.232.517h1.464c3.057-5.744.816-9-2.548-9-3.323 0-5.635 3.177-2.488 9.119 1.033 1.952-1.101 2.416-3.394 2.946-1.988.458-2.12 1.429-2.12 3.11l.003.825h1.331c0-2.069-.08-2.367 1.173-2.657 1.918-.442 3.729-.86 4.39-2.305.241-.527.401-1.397-.206-2.543-1.362-2.572-1.704-4.777-.936-6.051z" />
		</svg>
	);
	const CostIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path d="M22 14h-3v-1h3v1zm-4-.5c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5-2.5 1.122-2.5 2.5zm6 0c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5zm-20 2.5h6v-1h-6v1zm-1.5 2c-.276 0-.5-.224-.5-.5v-6.5h14.535c.833-1.317 2.294-2.2 3.965-2.2.527 0 1.026.107 1.5.268v-3.068c0-1.104-.896-2-2-2h-18c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2h-19.5zm-.5-11.5c0-.276.224-.5.5-.5h17c.276 0 .5.224.5.5v1.5h-18v-1.5zm11 6.5h-9v1h9v-1z" />
		</svg>
	);
	const InsuranceIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path d="M12.011 3.981c3.005 0 6.033 1.069 8.21 3.974-1.605-.054-3.101.402-4.301 1.229-1.131-.785-2.508-1.223-3.955-1.223-1.451 0-2.833.438-3.965 1.221-1.264-.875-2.783-1.281-4.239-1.227 2.14-2.888 5.156-3.997 8.25-3.974zm-.011-3.981c-.552 0-1 .448-1 1v1.052c-6.916.522-10.372 5.594-11 9.906 1.865-2.677 6.136-2.677 8 0 1.836-2.637 6.044-2.689 7.917 0 1.865-2.677 6.219-2.677 8.083 0-.625-4.292-4.125-9.333-11-9.902v-1.056c0-.552-.448-1-1-1zm1 12.157v8.843c0 1.657-1.343 3-3 3s-3-1.343-3-3v-1h2v1c0 .551.449 1 1 1s1-.449 1-1v-8.866c.68-.226 1.27-.242 2 .023z" />
		</svg>
	);
	return (
		<IconsContext.Provider
			value={{
				LeftArrowIcon,
				RightArrowIcon,
				LeftIcon,
				RightIcon,
				CloseIcon,
				LoadingIcon,
				LoadingIcon2,
				SearchIcon,
				TopArrowIcon,
				TelegramIcon,
				LockIcon,
				FleetIcon,
				TrackingIcon,
				FuelIcon,
				HardwareIcon,
				VideoIcon,
				BarIcon,
				AlarmIcon,
				SecurityIcon,
				FacebookIcon,
				TwitterIcon,
				InstagramIcon,
				TiktokIcon,
				CheckIcon,
				TechnologyIcon,
				SupportIcon,
				ExpertIcon,
				ScaleIcon,
				InnovativeIcon,
				PlusIcon,
				MinusIcon,
				UnlockIcon,
				CarIcon,
				PhoneIcon,
				TechIcon,
				MapIcon,
				KeyIcon,
				ClockIcon,
				LockedIcon,
				WifiIcon,
				CycleIcon,
				MonitorIcon,
				BikeIcon,
				RouteIcon,
				BusIcon,
				IntegrateIcon,
				EfficientIcon,
				SignIcon,
				PersonIcon,
				TruckIcon,
				HeartIcon,
				PinIcon,
				SecureIcon,
				RiskIcon,
				SafetyIcon,
				GaugeIcon,
				ComplyIcon,
				DriverIcon,
				CostIcon,
				InsuranceIcon,
			}}
		>
			{children}
		</IconsContext.Provider>
	);
}

export const useIcons = () => useContext(IconsContext);
