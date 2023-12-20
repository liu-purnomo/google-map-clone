import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { PiXSquareFill } from "react-icons/pi";
import Items from "./Items";
import Menu from "./Menu";
import { PlacesAutocomplete } from "./PlacesAutocomplete";

const Map = () => {
  const defaultPosition = { lat: -6.175419010382158, lng: 106.82721258993489 };
  const [position, setPosition] = useState(null);
  const [submittedLocation, setSubmittedLocation] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState(null);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);
  const [contextMenuInfo, setContextMenuInfo] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (geoPosition) => {
          const { latitude, longitude } = geoPosition.coords;
          setPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          // Set default position if geolocation is denied
          setPosition(defaultPosition);
        }
      );
    } else {
      // Geolocation not supported, set default position
      setPosition(defaultPosition);
    }
  }, []);

  const handleLocationSubmit = (geolocation) => {
    setSubmittedLocation(geolocation);
  };

  const handleMarkerDragEnd = (event) => {
    setPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleMapRightClick = (event) => {

	const {pixel, latLng} = event

    setContextMenuPosition({
      lat: pixel.y,
      lng: pixel.x,
    });

	setContextMenuInfo({
		lat : latLng.lat(),
		lng : latLng.lng()
	})
  };

  const closeContextMenu = () => {
    setContextMenuPosition(null);
  };

  const handleMarkerClick = (markerData) => {
    setInfoWindowData(markerData);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowData(null);
  };


  return (
    <>
      {!openMenu && (
        <div className="fixed top-2 left-[200px] z-50 ">
          <div className="flex border rounded-full px-4 py-[1px] bg-white items-center gap-4">
            <button
              type="button"
              className="btn rounded-full animate-pulse dark:hover:bg-primary"
              onClick={() => setOpenMenu((openMenu) => !openMenu)}
            >
              <FaBars />
            </button>

            <PlacesAutocomplete
              setPosition={setPosition}
              className="w-[400px]"
              setSubmittedLocation={setSubmittedLocation}
            />

            <FaSearch />
          </div>
        </div>
      )}
      <div>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} onLocationSubmit={handleLocationSubmit} />
      </div>
      <div>
        <Items />
      </div>
      <GoogleMap
        zoom={12}
        center={submittedLocation || position || defaultPosition}
        mapContainerClassName="w-[100%] h-[100vh]"
        onRightClick={(e) => handleMapRightClick(e)}
      >
        {(position || submittedLocation) && (
          <Marker
            position={position || submittedLocation}
            draggable={true}
            onDragEnd={handleMarkerDragEnd}
			onClick={() => handleMarkerClick({ lat: position.lat, lng: position.lng })}
          />
        )}

		{/* InfoWindow */}
        {infoWindowData && (
          <InfoWindow
            position={{ lat: infoWindowData.lat, lng: infoWindowData.lng }}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              <h3>InfoWindow Content</h3>
              <p>This is some information about the location.</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>


	{/* Context Menu */}
	{contextMenuPosition && (
		<div
			style={{
			position: "fixed",
			top: contextMenuPosition.lat,
			left: contextMenuPosition.lng,
			background: "white",
			border: "1px solid #ccc",
			padding: "8px",
			zIndex: 1000,
			}}
		>
			<div className="flex justify-between">
				<div>GMap Clone</div>
				<button onClick={closeContextMenu}>
					<PiXSquareFill />
				</button>
			</div>

			<div>
				<div>
					Lat : {contextMenuInfo?.lat}
				</div>
				<div>
					Lang : {contextMenuInfo?.lng}
				</div>
			</div>
			{/* Add your context menu items here */}
			
		</div>
	)}
    </>
  );
}

export default Map