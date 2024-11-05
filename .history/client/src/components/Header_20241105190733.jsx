import { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { PiCirclesFourLight } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaChevronDown } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
	// State to toggle between search input and full header
	const [showSearchInput, setShowSearchInput] = useState(false);

	const IconWrapper = ({ Icon, size }) => (
		<Icon
			size={size}
			style={{ color: "#808080", transition: "color 0.3s" }}
			onMouseEnter={(e) => (e.currentTarget.style.color = "#4B9E60")}
			onMouseLeave={(e) => (e.currentTarget.style.color = "#808080")}
		/>
	);

	const [selected, setSelected] = useState('English');
	const [isOpen, setIsOpen] = useState(false);

	const options = [
		{ value: 'en', label: 'English' },
		{ value: 'ar', label: 'Arabic' },
		{ value: 'tr', label: 'Turkish' }
	];

	const toggleDropdown = () => setIsOpen(!isOpen);
	const handleSelect = (option) => {
		setSelected(option.label);
		setIsOpen(false);
	}

	return (
		<div className='h-24 fixed z-[50] w-full bg-white  md:p-6 lg:p-8 shadow-sm border-b flex items-center justify-between'>
			{/* Conditionally render only the search input on small and medium screens */}
			{showSearchInput ? ''
				// <div className='flex items-center w-full rounded-full py-2 px-3'>
				// 	<input
				// 		type='text'
				// 		placeholder='Search'
				// 		className='outline-none text-sm w-full bg-transparent'
				// 	/>
				// 	<GoSearch
				// 		size={24}
				// 		className='text-gray-400 cursor-pointer'
				// 		onClick={() => setShowSearchInput(false)}
				// 	/>
				// </div>
				: (
					<>
						<div className='flex gap-3 md:gap-5 lg:gap-6 items-center'>
							<TfiMenuAlt
								size={24}
								onClick={toggleSidebar}
								className='cursor-pointer text-lg md:text-xl lg:text-2xl'
							/>
							{/* Search icon for small and medium screens */}
							<GoSearch
								size={24}
								className='text-gray-400 cursor-pointer md:hidden'
								onClick={() => setShowSearchInput(true)}
							/>
							{/* Search input for larger screens */}
							<div className='hidden md:flex items-center rounded-full py-2 px-3 bg-gray-100'>
								<input
									type='text'
									placeholder='Search'
									className='outline-none text-xs md:text-sm bg-transparent md:bg-gray-100 w-28 md:w-32 lg:w-40'
								/>
								<GoSearch size={18} className='text-gray-400' />
							</div>
							<div className="relative inline-block w-fit">
								<button
									onClick={toggleDropdown}
									className="appearance-none bg-gray-100 rounded-full py-2 px-3 text-xs md:text-sm text-gray-500 w-full flex justify-between items-center"
								>
									<span className="pr-2">{selected}</span>
									<FaChevronDown className={`w-4 h-4  text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
								</button>
								{isOpen && (
									<div className="absolute mt-2 w-44 bg-white border rounded-lg shadow-lg z-10">
										{options.map((option) => (
											<div
												key={option.value}
												onClick={() => handleSelect(option)}
												className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
											>
												{option.label}
											</div>
										))}
									</div>
								)}
							</div>
							<button className='bg-gray-100 rounded-full py-2 px-5 text-xs md:text-sm text-gray-500 border border-[#4B9E60] hover:bg-[#4B9E60] hover:text-white'>
								BUY
							</button>
						</div>
						<Link
							to={"/"}
							className='font-semibold text-lg md:text-xl lg:text-2xl text-gray-600 justify-center'
						>
							Amaan Store
						</Link>
						<ul className='flex gap-3 md:gap-4 items-center'>
							<li>
								<IconWrapper Icon={IoMoonOutline} size={22} />
							</li>
							<li>
								<IconWrapper Icon={MdOutlineSettings} size={22} />
							</li>
							<li>
								<IconWrapper Icon={PiCirclesFourLight} size={22} />
							</li>
							<li>
								<IconWrapper Icon={IoMdNotificationsOutline} size={22} />
							</li>
							<li>
								<IconWrapper Icon={AiOutlineFullscreen} size={22} />
							</li>
							{/* Text is hidden on small and medium screens */}
							<p className='hidden lg:block text-xs'>Umair</p>
							<li className='flex gap-2 justify-between items-center'>
								<img
									src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
									alt='profile image'
									className='h-8 w-8 rounded-full'
								/>
							</li>
						</ul>
					</>
				)}
		</div>
	);
};

export default Header;
