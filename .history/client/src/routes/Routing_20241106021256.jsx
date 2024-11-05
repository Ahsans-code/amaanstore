import React from 'react'
import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Header, Sidebar } from '../components/Components'
import { Application, Home, Menu, Mystore, UI } from '../pages/Pages'

export default function Routing() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <Router>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar sidebarOpen={sidebarOpen} />
            <div className={`flex transition-all duration-300 ${sidebarOpen ? "w-full md:w-11/12 " : "w-full"
                } absolute right-0 pt-24 `}>
                <Routes  >
                    <Route path='/' element={<Home />} />
                    <Route path='/Dashboard' element={<Home />} />
                    <Route path='/My store' element={<Mystore />} />
                    <Route path='/Application' element={<Application />} />
                    <Route path='/Menu' element={<Menu />} />
                    <Route path='/UI' element={<UI />} />
                </Routes>
            </div>
        </Router>
    )
}
