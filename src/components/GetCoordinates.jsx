/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const GetCoordinates = ({ onLocationSubmit }) => {
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

	const onLatitudeChange = (e) => {
		const newLatitude = e.target.value;
		setLatitude(+newLatitude);
	};

	const onLongitudeChange = (e) => {
		const newLongitude = e.target.value;
		setLongitude(+newLongitude);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		let geolocation = { lat: latitude, lng: longitude };
		onLocationSubmit(geolocation);
	};

	return (
		<form
			className="flex w-full justify-between items-center gap-1"
			action=""
			onSubmit={onSubmit}
		>
			<input
				type="number"
				id="latitude"
				value={latitude}
				onChange={onLatitudeChange}
				min="-90"
				max="90"
				step="any"
				required
				placeholder="Latitude"
				className="p-1"
			/>
			<input
				type="number"
				id="longitude"
				value={longitude}
				onChange={onLongitudeChange}
				min="-180"
				max="180"
				step="any"
				required
				placeholder="Longitude"
				className="p-1"
			/>
			<button type="submit" className="p-1">
				<FaSearch />
			</button>
		</form>
	);
};

export default GetCoordinates;
