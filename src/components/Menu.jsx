/* eslint-disable react/prop-types */
import classNames from "classnames";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import GetCoordinates from "./GetCoordinates";

const Menu = ({ openMenu, setOpenMenu, onLocationSubmit }) => {

	const menuItemsOne = [
		{
			id: 1,
			icon: "/icon/contrblue.png",
			name: "Saved",
		},
		{
			id: 2,
			icon: '/icon/recents.png',
			name: "Recents",
		},
		{
			id: 3,
			icon: '/icon/contrblue.png',
			name: "Your contributions",
		},
		{
			id: 4,
			icon: '/icon/location.png',
			name: "Location sharing",
		},
		{
			id: 5,
			icon: '/icon/timeline.png',
			name: "Your timeline",
		},
		{
			id: 6,
			icon: '/icon/data.png',
			name: "Your data in Maps",
		},
	];
	const menuItemsTwo = [
		{
			id: 1,
			icon: '/icon/share.png',
			name: "Share or embed map",
		},
		{
			id: 2,
			icon: '/icon/print.png',
			name: "Print",
		},
		{
			id: 3,
			icon: null,
			name: "Add a missing place",
		},
		{
			id: 4,
			icon: null,
			name: "Add your business",
		},
		{
			id: 5,
			icon: null,
			name: "Edit the map",
		},
	];
	const menuItemsThree = [
		{
			id: 1,
			icon: null,
			name: "Tips and tricks",
		},
		{
			id: 2,
			icon: null,
			name: "Get help",
		},
		{
			id: 3,
			icon: null,
			name: "Consumer information",
		},
	];
	const menuItemsFour = [
		{
			id: 1,
			icon: '/icon/lang.png',
			name: "Language",
		},
		{
			id: 2,
			icon: null,
			name: "Search settings",
		},
		{
			id: 3,
			icon: null,
			name: "Maps activity",
		},
	];

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<div
			className={classNames(
				"px-5 flex flex-row absolute top-0 z-50 bg-[#fff] md:w-[23.5%] text-[#202124] text-xs h-[100%] overflow-y-scroll overflow-x-hidden transition-transform duration-300 transform",
				{ "translate-x-0": openMenu, "-translate-x-full": !openMenu },
			)}
		>
			<div className="w-[100%] ">
				<div className="flex pt-3 w-[100%] justify-between items-center">
					<a href="" className="cursor-pointer">
						<img
							className=" w-auto h-4 md:h-6"
							src='/logo.png'
							alt="Google Maps"
						/>
					</a>
					<IoMdClose
						onClick={handleCloseMenu}
						className="text-[#616161] text-2xl cursor-pointer"
					/>
				</div>
				<div className="my-2">
					<GetCoordinates onLocationSubmit={onLocationSubmit} />
				</div>
				<hr className="w-[110%]" />
				<div className="my-3 px-1">
					{menuItemsOne.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center text-[#616161] hover:text-[#1a73e8] my-3 cursor-pointer grayscale hover:grayscale-0"
							>
								{/* <FaRegBookmark className="text-[#70757a] text-xl" /> */}
								{item.id === 1 && <FaRegBookmark className="text-[23px]" />}
								{item.id === 2 && <LuHistory className="text-[23px]" />}
								{item.id !== 1 && item.id !== 2 && (
									<img src={item.icon} className=" w-6" alt="icon" />
								)}

								<p className="text-xs">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[110%]" />
				<div className="my-3 px-1">
					{menuItemsTwo.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center text-[#494949] hover:text-[#1a73e8] my-3 cursor-pointer grayscale hover:grayscale-0"
							>
								{/* <FaRegBookmark className="text-[#70757a] text-xl" /> */}
								{item.icon !== null && (
									<img src={item.icon} className="w-6" alt="icon" />
								)}
								<p className="text-xs my-[1px]">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[110%]" />
				<div className="my-3 px-1">
					{menuItemsThree.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center text-[#494949] hover:text-[#1a73e8] my-3 cursor-pointer"
							>
								<p className="text-xs my-[1px]">{item.name}</p>
							</div>
						);
					})}
				</div>
				<hr className="w-[110%]" />
				<div className="my-3 px-1">
					{menuItemsFour.map((item) => {
						return (
							<div
								key={item.id}
								className="flex gap-6 items-center text-[#494949] hover:text-[#1a73e8] my-3 cursor-pointer grayscale hover:grayscale-0"
							>
								<p className="text-xs my-[1px] flex items-center gap-1">
									{item.name} {item.icon !== null && <img src='/icon/lang.png' alt="" />}
								</p>
							</div>
						);
					})}
				</div>

				<div>
				<div className="flex gap-2 items-center">
				<a
					href="https://github.com/liu-purnomo"
					target="_blank"
					rel="noreferrer"
					title="Github Liu Purnomo"
				>
					<img className="rounded-full w-8" src='/icon/unnamed.png' alt="Liu Purnomo" />
				</a>
				<div>Google Map Clone </div>
			</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
