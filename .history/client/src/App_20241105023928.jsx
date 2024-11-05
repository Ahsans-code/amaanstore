import { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./pages/dashboard/dashboard";
import Header from "./components/Header";
import Signup from "./pages/auth/Signup";
import SignIn from "./pages/auth/Signin";
import Stores from "./pages/stores/Stores";
import CreateNewStore from "./pages/stores/CreateNewStore";
import AllOrders from "./pages/orders/AllOrders";
import Sidebar from "./components/Sidebar";
import { Home, OrderDetails } from ".";

const routes = [
	{ path: "/", element: <Home /> },
	{ path: "/dashboard", element: <Dashboard /> },
	{ path: "/signup", element: <Signup /> },
	{ path: "/signin", element: <SignIn /> },
	{ path: "/stores", element: <Stores /> },
	{ path: "/create-new-store", element: <CreateNewStore /> },
	{ path: "/orders", element: <AllOrders /> },
	{ path: "/order-details/:id", element: <OrderDetails /> },
];

const App = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<>
			<Header toggleSidebar={toggleSidebar} />
			<div
				className={`flex transition-all duration-300 ${sidebarOpen ? "ml-32" : "ml-0"
					}`}
			>
				<Sidebar sidebarOpen={sidebarOpen} />
				<div className='flex-1'>

				</div>
			</div>
		</>

	);
};

export default App;
