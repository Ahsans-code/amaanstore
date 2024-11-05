import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const StyledNavLink = ({ to, children }) => (
	<NavLink
		to={to}
		className={({ isActive }) =>
			`p-2 text-sm font-medium ${
				isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-800"
			} hover:text-blue-600`
		}
	>
		{children}
	</NavLink>
);

const Dropdown = ({ label, items, isOpen, toggleOpen }) => (
	<div className='relative'>
		<div
			className='flex items-center cursor-pointer p-2 text-sm font-medium text-gray-800 hover:text-blue-600'
			onClick={toggleOpen}
		>
			<span>{label}</span>
			{isOpen ? (
				<FaChevronUp className='ml-1' />
			) : (
				<FaChevronDown className='ml-1' />
			)}
		</div>
		{isOpen && (
			<div className='absolute bg-white border rounded shadow-lg mt-1 w-40'>
				{items.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
					>
						{item.name}
					</NavLink>
				))}
			</div>
		)}
	</div>
);

const Header = () => {
	const [activeDropdown, setActiveDropdown] = useState(null);

	const homeItems = [
		{ name: "Products", to: "/products" },
		{ name: "Cart", to: "/carts" },
		{ name: "Profile", to: "/profile" },
	];

	const productItems = [
		{ name: "Category 1", to: "/products/category1" },
		{ name: "Category 2", to: "/products/category2" },
	];

	const cartItems = [
		{ name: "View Cart", to: "/carts/view" },
		{ name: "Checkout", to: "/carts/checkout" },
	];

	const toggleDropdown = (dropdown) => {
		if (activeDropdown === dropdown) {
			setActiveDropdown(null);
		} else {
			setActiveDropdown(dropdown);
		}
	};

	return (
		<div className='flex justify-between items-center p-4 shadow'>
			<Link to='/' className='text-lg font-bold text-gray-800'>
				Header
			</Link>
			<div className='flex gap-6 items-center'>
				<Dropdown
					label='Home'
					items={homeItems}
					isOpen={activeDropdown === "home"}
					toggleOpen={() => toggleDropdown("home")}
				/>

				<Dropdown
					label='Products'
					items={productItems}
					isOpen={activeDropdown === "products"}
					toggleOpen={() => toggleDropdown("products")}
				/>

				<Dropdown
					label='Cart'
					items={cartItems}
					isOpen={activeDropdown === "cart"}
					toggleOpen={() => toggleDropdown("cart")}
				/>

				<StyledNavLink to='/profile'>Profile</StyledNavLink>
			</div>
		</div>
	);
};

export default Header;
