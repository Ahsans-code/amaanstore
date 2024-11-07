import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Sidebar } from '../components/Components';
import { Application, CreateStore, Home, Invoice, ManageStore, Menu, UI,Orders, ProductsList, EditStore } from '../pages/Pages';

export default function Routing() {
    
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Router>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar sidebarOpen={sidebarOpen} />
            <div className={`flex transition-all duration-300 ${sidebarOpen ? "w-full md:w-11/12" : "w-full"}
                absolute right-0 pt-24 text-gray-700`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dashboard" element={<Home />} />
                    <Route path="/Application" element={<Application />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/UI" element={<UI />} />
                    <Route path="/Manage-Store" element={<ManageStore />} />
                    <Route path="/Create-Store" element={<CreateStore />} />
                    <Route path="/Invoice" element={< Invoice/>} />
                    <Route path="/Orders" element={< Orders/>} />
                    <Route path="/Products" element={< ProductsList/>} />
                    <Route path="Manage-Store/Products" element={< ProductsList/>} />
                    <Route path="EditStore" element={< EditStore/>} />
                </Routes>
            </div>
        </Router>
    );
}
