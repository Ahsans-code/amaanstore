import { useState , useEffect} from "react";
import { SlScreenDesktop } from "react-icons/sl";
import { LiaStoreAltSolid } from "react-icons/lia";
import { TbAirBalloon } from "react-icons/tb";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TbArrowBearRight2 } from "react-icons/tb";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { PiInvoiceLight } from "react-icons/pi";

import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/')
  }, [])
  const [activeIndex, setActiveIndex] = useState(0);
  const [newSidebar, setNewSidebar] = useState(false)
  const menuItems = [
    { icon: LiaStoreAltSolid, label: "Dashboard",options:[] },
    { icon: SlScreenDesktop, label: "My-store",options:[{
      icon: <IoStorefrontSharp />,
      text: 'Manage-Store'
    },
    {
      icon: <IoStorefrontOutline />,
      text: 'Create-Store'
    }] },
    { icon: SlScreenDesktop, label: "Pages",options:[{icon: PiInvoiceLight,text:'Invoice'}] },
    { icon: TbAirBalloon, label: "Application",options:[] },
    { icon: HiOutlineBuildingOffice, label: "UI",options:[] },
    { icon: TbArrowBearRight2, label: "Menu",options:[] },
  ];

 
  const handleNavigation = (label) => {

    if (label == 'My-store') {
      setNewSidebar(true)
      return
    }
    setNewSidebar(false)
    navigate(`/${label}`);
  };
  
  return (
    <div className={`w-fit  z-50 `}>
      <div
        className={`fixed  z-50 top-24 pb-24 left-0 h-screen bg-white  text-sm transition-transform duration-300 ease-in-out  custom-scrollbar rounded-lg
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                ${newSidebar?'':'shadow-2xl'}
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
                      ? "text-primary before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[6px] before:bg-primary before:rounded-full"
                      : "text-gray-500"}`}
                  style={{ fontWeight: 300 }}
                >
                  <Icon size={32} />
                  <p className="py-1 " style={{ fontWeight: 300 }}>
                    {item.label.replace("-", " ")}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
      <div className={`${newSidebar & sidebarOpen ? 'left-[100px] md:left-[110px]' : '-translate-x-full'} fixed h-screen transition-all duration-300 ease-in-out top-24 shadow-2xl  z-40 rounded-lg  bg-white w-[150px] sm:w-[220px] border-l-[1px]`}>
        {
          mystoredata.map((item) => (
            <Link className="flex gap-4 text-gray-600 items-center pl-5 text-xs sm:text-sm px-2 pt-7 hover:text-primary"
              to={`/${item.text}`}
              onClick={() => setNewSidebar(false)}
            >
              {item.icon}
              <p>{item.text.replace('-', ' ')}</p>
            </Link>
          ))
        }

      </div>
    </div>
  );
};

export default Sidebar;
