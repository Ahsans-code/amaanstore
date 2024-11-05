import Heading from "../components/Heading";
import { GiAlarmClock } from "react-icons/gi";
import { PiBasketThin } from "react-icons/pi";
import { PiArrowsCounterClockwiseLight } from "react-icons/pi";
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
	return (
		<div className="w-full   px-12 py-10 bg-gray-50 h-[200vh]">
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
				<div>
					<h2>Recent Orders</h2>
					<div></div>
				</div>
				</div>
			</div>
		</div>
	)
};

export default Home;
