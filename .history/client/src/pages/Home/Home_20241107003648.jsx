import Heading from "../../components/Heading/Heading";
import { GiAlarmClock } from "react-icons/gi";
import { PiBasketThin } from "react-icons/pi";
import { PiArrowsCounterClockwiseLight } from "react-icons/pi";
import Logs from "../../components/Logs/Logs";
import Ticket from "../../components/Ticket/Ticket";
import PolarAreaChart from "../../components/PolarAreaChart/PolarAreaChart";
import SalesChart from "../../components/SalesChart/SalesChart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { chocolateCake, fatRascal, gooseBreast, marbleCake, petit, salzbur } from "../../assets";
const Next = () => {
	return <div className="hidden"></div>
}
const Prev = () => {
	return <div className="hidden"></div>
}
const Home = () => {
	const settings = {
		nextArrow: <Next />
		, prevArrow: <Prev />,
		infinite: true,
		speed: 500,
		dots:true
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 800, // For medium screens
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 500, // For small screens
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
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
			image: marbleCake,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: fatRascal,
			Name: 'Fat Rascal',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: gooseBreast,
			Name: 'Goose Breast',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: chocolateCake,
			Name: 'Chocolate Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: petit,
			Name: 'Petit Gâteau',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: salzbur,
			Name: 'Salzburger Nockerl',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: marbleCake,
			Name: 'Marble Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: fatRascal,
			Name: 'Fat Rascal',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: gooseBreast,
			Name: 'Goose Breast',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: chocolateCake,
			Name: 'Chocolate Cake',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: petit,
			Name: 'Petit Gâteau',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
		{
			image: salzbur,
			Name: 'Salzburger Nockerl',
			description: 'Weddin cake with flowers macrons and blueberry',
			date: '02/06/2022'
		},
	]
	return (
		<div className="w-full  px-4 md:px-8 lg:px-12 py-10   ">
			<Heading title={'Dashboard'} sub1={'Home'} sub2={'Dashboard'} />
			<div className="flex flex-col lg:flex-row items-start py-6 lg:h-[110vh] ">
				<div className="w-full lg:w-1/2 h-full max-lg:pb-4 lg:pr-3">
					<div className="  w-full md:h-1/3 ">
						<Slider className="home-options h-full p-0" {...settings}>
							{iconcard.map((item, index) => (
								<div className="h-full">
									<div key={index} className="h-full max-lg:py-7 flex flex-col items-center justify-center bg-white rounded-2xl shadow-md text-center">
										<p className="text-5xl md:text-4xl text-primary  text-center">{item.icon}</p>
										<p className="pt-3 text-gray-500 text-2xl md:text-sm font-semibold">{item.title}</p>
										<p className="pt-9 text-primary text-2xl md:text-xl">{item.number}</p>
									</div>
								</div>

							))}
						</Slider>
					</div>
					<div className="pt-5 md:h-2/3">

						<SalesChart />
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:pl-3 h-[90vh] lg:h-full ">
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
											<p className="text-sm text-primary">{item.date}</p>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex items-start justify-between flex-wrap ">
				<div className="w-full lg:w-[32%] lg:p-0 pb-9">

					<PolarAreaChart />


				</div>
				<div className="w-full md:w-[48%] lg:w-[32%] md:p-0 pb-9">
					<Logs />

				</div>
				<div className="w-full md:w-[48%] lg:w-[32%]">

					<Ticket />

				</div>
			</div>
		</div>
	)
};

export default Home;
