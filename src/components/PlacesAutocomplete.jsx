/* eslint-disable react/prop-types */
import {
	Combobox,
	ComboboxInput,
	ComboboxList,
	ComboboxOption,
	ComboboxPopover,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";

export const PlacesAutocomplete = ({ setPosition, setSubmittedLocation }) => {
	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete();

	const handleSelect = async (address) => {
		setValue(address, false);
		clearSuggestions();

		const results = await getGeocode({ address });
		const { lat, lng } = await getLatLng(results[0]);
		setPosition({ lat, lng });
		setSubmittedLocation(null);
	};

	return (
		<Combobox className="w-[260px]" onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				onChange={(e) => setValue(e.target.value)}
				disabled={!ready}
				className=" w-[100%] py-2"
				placeholder="Search on Google Maps"
				style={{ outline: "none" }}
			/>
			<ComboboxPopover className="z-50">
				<ComboboxList>
					{status === "OK" &&
						data.map(({ place_id, description }) => (
							<ComboboxOption key={place_id} value={description} />
						))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
	);
};
