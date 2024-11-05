import { useState } from "react";
import { SlScreenDesktop } from "react-icons/sl";
import { LiaStoreAltSolid } from "react-icons/lia";
import { TbAirBalloon } from "react-icons/tb";
import { BsBucket } from "react-icons/bs";
import { SlDocs } from "react-icons/sl";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TbArrowBearRight2 } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
	// Track active item
	const [activeIndex, setActiveIndex] = useState(0);

	// Menu items with icons and labels
	const menuItems = [
		{ icon: LiaStoreAltSolid, label: "Dashboard" },
		{ icon: SlScreenDesktop, label: "My Store" },
		{ icon: TbAirBalloon, label: "Application" },
		{ icon: HiOutlineBuildingOffice, label: "UI" },
		{ icon: TbArrowBearRight2, label: "Menu" },
		
	];
	const navigate = useNavigate()
	const handleNavigation = (label) => {
		
		navigate(`${label}`)
	}

	return (
		<div
			className={`fixed z-50 top-24 py-2 left-0 h-[100vh-96px] text-sm w-1/12 rounded-lg
				${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
				transition-transform duration-300 ease-in-out z-50 shadow-2xl  custom-scrollbar`}
			style={{ fontFamily: "'Roboto', sans-serif" }}
		>
			<div className=' '>
				<ul className='space-y-2'>
					{menuItems.map((item, index) => {
						const Icon = item.icon;
						const isActive = activeIndex === index;

						return (
							<li
								key={index}
								onClick={() => handleNavigation(item.label) & setActiveIndex(index)}
								className={`menuItem flex-col py-6 flex items-center cursor-pointer border-b-[1px] border-gray-200 relative last:border-0
									${isActive
										? "text-[#4B9E60] before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[6px] before:bg-[#4B9E60] before:rounded-full"
										: "text-[#404040]"
									}
								`}
								style={{ fontWeight: 300 }} // Apply thinner font weight
							>
								<Icon size={32} />
								<p className='py-1' style={{ fontWeight: 300 }}>
									{item.label}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;