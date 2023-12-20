import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

const libraries = ["places"]; // Add other necessary libraries

export default function Places() {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  if (!isLoaded) return <div className="">Loading...</div>;
  return <Map />;
}
