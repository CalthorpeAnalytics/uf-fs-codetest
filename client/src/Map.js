import { useState, useRef } from 'react';
import { Map as ReactMap, Popup } from 'react-map-gl';
import CityInfo from './CityInfo';

const REACT_APP_MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiYnJhZGxleWJvc3NhcmR1ZiIsImEiOiJja3NoeWR2ODkxemFoMnBwYTM1emhhYmU4In0.etmCrrx1r0vece_U8jvwFw';

function Map() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -102.4376,
    zoom: 4,
  });

  const mapRef = useRef();

  return (
    <ReactMap
      ref={mapRef}
      initialViewState={{ ...viewport }}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {/* Panel should go here */}

      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )}
    </ReactMap>
  );
}

export default Map;
