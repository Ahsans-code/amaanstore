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
			<div className="flex items-center">
				<div className="w-1/2">
					<div>
						{
							iconcard.map((item) => (
								<div className="flex flex-col items-center justify-center">
									{item.icon}
									<p className="pt-3">{item.title}</p>
									<p className="pt-9">{item.number}</p>
								</div>
							))
						}

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
