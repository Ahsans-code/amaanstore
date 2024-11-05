import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [formData, setFormData] = useState({
		phoneNumber: "",
		email: "",
		imageUrls: [],
		languages: [],
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg'>
			<h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
				SignUp
			</h1>
			<div className=''>
				<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
					<input
						type='text'
						id='phoneNumber'
						placeholder='Contact / Phone Number'
						className='p-4 border-2 rounded-lg w-full text-gray-700 focus:outline-none focus:border-indigo-500'
						onChange={handleChange}
						required
					/>
					<input
						type='email'
						id='email'
						placeholder='Email Address'
						className='p-4 border-2 rounded-lg w-full text-gray-700 focus:outline-none focus:border-indigo-500'
						onChange={handleChange}
						required
					/>
					<input
						type='password'
						id='password'
						placeholder='Password'
						className='p-4 border-2 rounded-lg w-full text-gray-700 focus:outline-none focus:border-indigo-500'
						onChange={handleChange}
						required
					/>
					<input
						type='password'
						id='confirmPassword'
						placeholder='Confirm Password'
						className='p-4 border-2 rounded-lg w-full text-gray-700 focus:outline-none focus:border-indigo-500'
						onChange={handleChange}
						required
					/>
					<button className='w-full py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-opacity disabled:opacity-75'>
						SignUp
					</button>
				</form>
			</div>
			<div className='flex justify-center mt-6 gap-2'>
				<p className='text-gray-700'>Already have an account?</p>
				<Link className='text-indigo-600 hover:underline' to='/signin'>
					SignIn
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
