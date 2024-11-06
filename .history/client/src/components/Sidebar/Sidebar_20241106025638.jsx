import { useState } from "react";
import { SlScreenDesktop } from "react-icons/sl";
import { LiaStoreAltSolid } from "react-icons/lia";
import { TbAirBalloon } from "react-icons/tb";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TbArrowBearRight2 } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [newSidebar, setNewSidebar] = useState(false)
  const menuItems = [
    { icon: LiaStoreAltSolid, label: "Dashboard" },
    { icon: SlScreenDesktop, label: "My-store" },
    { icon: TbAirBalloon, label: "Application" },
    { icon: HiOutlineBuildingOffice, label: "UI" },
    { icon: TbArrowBearRight2, label: "Menu" },
  ];

  const navigate = useNavigate();
  const handleNavigation = (label) => {
   
    if (label == 'My-store') {
      setNewSidebar(prev=>!prev)
      return
    }
    setNewSidebar(false)
    navigate(`/${label}`);
  };

  return (
    <div className="shadow-2xl">
      <div
        className={`fixed z-50 top-24 pb-24 left-0 h-screen bg-white text-sm transition-transform duration-300 ease-in-out  custom-scrollbar rounded-lg
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                w-[100px] md:w-[110px]`}
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="">
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
                      : "text-[#404040]"}`}
                  style={{ fontWeight: 300 }}
                >
                  <Icon size={32} />
                  <p className="py-1" style={{ fontWeight: 300 }}>
                    {item.label.replace("-", " ")}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
      <div className={`${newSidebar?'translate-x-full':''} fixed h-screen transition-all duration-300 ease-in-out top-24 z-40 rounded-lg shadow-lg bg-white w-[100px] md:w-[110px] border-l-[1px]`}>

      </div>
    </div>
  );
};

export default Sidebar;