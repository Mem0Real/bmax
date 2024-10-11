"use client";

import { createContext, useContext } from "react";

const IconsContext = createContext({});

export default function CustomIcons({ children }) {
	const LeftArrowIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 18l-6-6 6-6" />
		</svg>
	);
	const RightArrowIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 18l6-6-6-6" />
		</svg>
	);
	const LeftIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 18l-6-6 6-6" />
		</svg>
	);
	const RightIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 18l6-6-6-6" />
		</svg>
	);
	const CloseIcon = (
		<svg
			aria-hidden="true"
			classNameName="w-5 h-5"
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
			width="17"
			height="17"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
		</svg>
	);
	const LoadingIcon2 = (
		<svg
			width="28px"
			height="28px"
			viewBox="0 0 44 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
				<path
					d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
					stroke="currentColor"
					stroke-width="1.488"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36"
					stroke="currentColor"
					stroke-width="1.488"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</g>
		</svg>
	);
	const SearchIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			classNameName="bi bi-search"
			viewBox="0 0 16 16"
		>
			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
		</svg>
	);
	const TopArrowIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M16 12l-4-4-4 4M12 16V9" />
		</svg>
	);
	const FacebookIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			classNameName="icon icon-tabler icon-tabler-brand-facebook"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth="2"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
		</svg>
	);
	const TelegramIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			classNameName="icon icon-tabler icon-tabler-brand-telegram"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth="1.3"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
		</svg>
	);
	const InstagramIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			classNameName="icon icon-tabler icon-tabler-brand-instagram"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth="1.3"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
			<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
			<path d="M16.5 7.5l0 .01"></path>
		</svg>
	);
	const PhoneIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
		</svg>
	);
	const MessageIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			<polyline points="22,6 12,13 2,6"></polyline>
		</svg>
	);

	// BMax
	const LockIcon = (
		<svg
			width="64px"
			height="64px"
			viewBox="0 0 24.00 24.00"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
					stroke="#dfa70c"
					stroke-width="1.5"
				></path>
				<path
					d="M6 10V8C6 4.68629 8.68629 2 12 2C14.7958 2 17.1449 3.91216 17.811 6.5"
					stroke="#dfa70c"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>
				<path
					d="M8 16H8.009M11.991 16H12M15.991 16H16"
					stroke="#dfa70c"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</g>
		</svg>
	);

	const FleetIcon = (
		<svg
			class="w-[72px] h-[72px] text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="#DFA70C"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.3"
				d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
			/>
		</svg>
	);

	const TrackingIcon = (
		<svg
			width="64px"
			height="64px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
					stroke="#DFA70C"
					stroke-width="1.5"
				></path>
				<path
					d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
					stroke="#DFA70C"
					stroke-width="1.5"
				></path>
				<path
					d="M2 12L4 12"
					stroke="#DFA70C"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>
				<path
					d="M20 12L22 12"
					stroke="#DFA70C"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>
				<path
					d="M12 4V2"
					stroke="#DFA70C"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>
				<path
					d="M12 22V20"
					stroke="#DFA70C"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>
			</g>
		</svg>
	);

	const FuelIcon = (
		<svg
			width="64px"
			height="64px"
			viewBox="0 0 1024 1024"
			className="icon"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
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
			width="64px"
			height="64px"
			viewBox="0 0 16 16"
			id="hardware-16px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
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
		<svg
			width="64px"
			height="64px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
					stroke="#DFA70C"
					stroke-width="1.104"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</g>
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
				FacebookIcon,
				TelegramIcon,
				InstagramIcon,
				PhoneIcon,
				MessageIcon,
				LockIcon,
				FleetIcon,
				TrackingIcon,
				FuelIcon,
				HardwareIcon,
				VideoIcon,
			}}
		>
			{children}
		</IconsContext.Provider>
	);
}

export const useIcons = () => useContext(IconsContext);
