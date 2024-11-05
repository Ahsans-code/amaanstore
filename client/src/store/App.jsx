import { useState } from "react";
import { Routes, BrowserRouter as Router, Route, Outlet } from "react-router-dom";
import './App.css'
import Routing from "../routes/Routing";

const App = () => {
	return (
		<Routing/>
	);
};

export default App;
