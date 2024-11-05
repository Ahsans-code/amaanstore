import { useState } from "react";
import { SlScreenDesktop } from "react-icons/sl";
import { LiaStoreAltSolid } from "react-icons/lia";
import { TbAirBalloon } from "react-icons/tb";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TbArrowBearRight2 } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: LiaStoreAltSolid, label: "Dashboard" },
    { icon: SlScreenDesktop, label: "My Store" },
    { icon: TbAirBalloon, label: "Application" },
    { icon: HiOutlineBuildingOffice, label: "UI" },
    { icon: TbArrowBearRight2, label: "Menu" },
  ];

  const navigate = useNavigate();
  const handleNavigation = (label) => {
    navigate(`${label}`);
  };

  return (
    <div
      className={`fixed top-0 md:top-24 left-0 h-full md:h-screen bg-white text-sm transition-transform duration-300 ease-in-out shadow-2xl custom-scrollbar
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        w-3/4 sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-1/12`}
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div>
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <li
                key={index}
                onClick={() => {
                  handleNavigation(item.label);
                  setActiveIndex(index);
                }}
                className={`menuItem flex flex-col py-6 items-center cursor-pointer border-b-[1px] border-gray-200 relative last:border-0
                  ${isActive
                    ? "text-[#4B9E60] before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[6px] before:bg-[#4B9E60] before:rounded-full"
                    : "text-[#404040]"}
                `}
                style={{ fontWeight: 300 }}
              >
                <Icon size={32} />
                <p className="py-1" style={{ fontWeight: 300 }}>
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
