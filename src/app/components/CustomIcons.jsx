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
		<svg
			aria-hidden="true"
			className="w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clipRule="evenodd"
			></path>
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
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</g>
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
			}}
		>
			{children}
		</IconsContext.Provider>
	);
}

export const useIcons = () => useContext(IconsContext);
