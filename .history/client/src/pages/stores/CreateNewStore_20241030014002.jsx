import { useState } from "react";

const CreateNewStore = () => {
	const [formData, setFormData] = useState({});

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
				CreateNewStore
			</h1>
			<div className=''>
				<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
					<input
						type='text'
						id='phoneNumber'
						placeholder='Contact / Phone Number'
						className='p-4 border-2 rounded-lg w-full text-gray-700 focus:outline-none focus:border-indigo-500'
						onChange={handleChange}
					/>
					<input
						type='email'
						id='email'
						placeholder='Email Address'
						className='p-4 border-2 rounded-lg w-full text-gray-700 focus:outline-none focus:border-indigo-500'
						onChange={handleChange}
					/>
					<input
						type='password'
						id='password'
						placeholder='Password'
						className='p-4 border-2 rounded-lg w-full text-gray-700 focus:outline-none focus:border-indigo-500'
						onChange={handleChange}
					/>
					<input
						type='password'
						id='confirmPassword'
						placeholder='Confirm Password'
						className='p-4 border-2 rounded-lg w-full text-gray-700 focus:outline-none focus:border-indigo-500'
						onChange={handleChange}
					/>
					<button className='w-full py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-opacity disabled:opacity-75'>
						Create Store
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateNewStore;
