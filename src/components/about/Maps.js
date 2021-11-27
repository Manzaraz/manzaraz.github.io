import GoogleMapReact from "google-map-react";

const Maps = () => {
  const defaultProps = {
    center: { lat: -26.82935167753905, lng: -65.2037225693191 },
    zoom: 14,
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  return (
    <div style={{ width: "300px", height: "187.5px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBljOuUVKrmxvNz72IDGtuO_PmKC5IqyGU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      />
    </div>
  );
};

export default Maps;
