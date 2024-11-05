import Heading from "../components/Heading";
import { GiAlarmClock } from "react-icons/gi";
import { PiBasketThin } from "react-icons/pi";
import { PiArrowsCounterClockwiseLight } from "react-icons/pi";
import r1 from '../images/marble-cake.jpg'
import r2 from '../images/fat-rascal.jpg'
import r3 from '../images/goose-breast.jpg'
import r4 from '../images/chocolate-cake.jpg'
import r5 from '../images/petit.jpg'
import r6 from '../images/salzbur.jpg'
import Logs from "../components/Logs";
import Ticket from "../components/Ticket";
import PolarAreaChart from "../components/PolarAreaChart";
import SalesChart from "../components/SalesChart";

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
			image: r2,
			Name: 'Fat Rascal',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r3,
			Name: 'Goose Breast',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r4,
			Name: 'Chocolate Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r5,
			Name: 'Petit Gâteau',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r6,
			Name: 'Salzburger Nockerl',
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
			image: r2,
			Name: 'Fat Rascal',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r3,
			Name: 'Goose Breast',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r4,
			Name: 'Chocolate Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r5,
			Name: 'Petit Gâteau',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: r6,
			Name: 'Salzburger Nockerl',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
	]
	return (
		<div className="w-full   px-12 py-10 bg-gray-100  text-gray-700">
			<Heading title={'Ecommerce'} sub1={'Home'} sub2={'Ecommerce'} />
			<div className="flex flex-col lg:flex-row items-start py-6 lg:h-[110vh] ">
				<div className="w-full lg:w-1/2 h-full max-lg:pb-4 lg:pr-3">
					<div className="flex items-center justify-between  w-full h-1/3 ">
						{
							iconcard.map((item) => (
								<div className="w-[31%] py-3 h-full">
									<div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl shadow-md ">
										<p className="text-4xl text-[#4B9E60]">{item.icon}</p>

										<p className="pt-3 text-gray-500 text-sm font-semibold">{item.title}</p>
										<p className="pt-9 text-[#4B9E60] text-xl">{item.number}</p>
									</div>
								</div>
							))
						}

					</div>
					<div className="pt-5 h-2/3">
					
						<SalesChart />
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:pl-3 h-full ">
					<div className="bg-white shadow-md p-5 rounded-2xl h-full">
						<h2 className="text-lg font-semibold py-2">Recent Orders</h2>
						<div className=" h-[90%] custom-scrollbar">
							{
								recentOrders.map((item) => (
									<div className="w-full py-4 px-2 flex items-center gap-3 ">
										<img className="w-24 rounded-xl" src={item.image} alt="recently ordered" />
										<div className="flex justify-between flex-col p-0 h-full ">
											<p className="font-semibold text-base ">{item.Name}</p>
											<p className="text-gray-500 text-xs pt-4">{item.description}</p>
											<p className="text-sm text-[#4B9E60]">{item.date}</p>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex items-start justify-between  ">
				<div className="w-[32%]">

					<PolarAreaChart />


				</div>
				<div className="w-[32%]">
					<Logs />

				</div>
				<div className="w-[32%]">

					<Ticket />

				</div>
			</div>
		</div>
	)
};

export default Home;
