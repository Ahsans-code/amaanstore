import Heading from "../components/Heading";

const Home = () => {
	return (
		<div className=" absolute right-0 h-auto px-12 py-10 bg-gray-100">
			<Heading title={'Ecommerce'} sub1={'Home'} sub2={'Ecommerce'} />
			<div className="flex items-center">
				<div className="w-1/2">
					<div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div></div>
				</div>
				<div className="w-1/2">
				</div>
			</div>
		</div>
	)
};

export default Home;
