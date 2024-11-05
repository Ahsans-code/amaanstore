import Heading from "../components/Heading";
import { GiAlarmClock } from "react-icons/gi";
import { PiBasketThin } from "react-icons/pi";
import { PiArrowsCounterClockwiseLight } from "react-icons/pi";
import r1 from '../images/marble-cake.jpg'
const Home = () => {
	const iconcard = [
		{
			icon: <GiAlarmClock />,
			title: 'Pending Orders',
			number: '14'
		},
		{
			icon: <PiBasketThin />,
			title: 'Completed Orders',
			number: '32'
		},
		{
			icon: <PiArrowsCounterClockwiseLight />,
			title: 'Refund Request',
			number: '74'
		}

	]
	const recentOrders = [
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r1,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
	]
	return (
		<div className="w-full   px-12 py-10 bg-gray-50  text-gray-700">
			<Heading title={'Ecommerce'} sub1={'Home'} sub2={'Ecommerce'} />
			<div className="flex items-start py-6">
				<div className="w-1/2">
					<div className="flex items-center gap-4">
						{
							iconcard.map((item) => (
								<div className="py-8 w-44 flex flex-col items-center justify-center bg-white rounded-2xl shadow-md ">
									<p className="text-4xl text-[#4B9E60]">{item.icon}</p>

									<p className="pt-3 text-gray-500 text-sm font-semibold">{item.title}</p>
									<p className="pt-9 text-[#4B9E60] text-xl">{item.number}</p>
								</div>
							))
						}

					</div>
					<div></div>
				</div>
				<div className="w-1/2">
					<div className="bg-white shadow-md p-5 rounded-2xl">
						<h2>Recent Orders</h2>
						<div>
							{
								recentOrders.map((item) => (
									<div className="w-full py-4 px-2 flex items-center gap-3 ">
										<img className="w-24 rounded-xl" src={item.image} alt="recently ordered" />
										<div className="flex justify-between flex-col p-0 h-full ">
											<p className="text-base ">{item.Name}</p>
											<p className="text-xs pt-4">{item.description}</p>
											<p className="text-sm ">{item.date}</p>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Home;
