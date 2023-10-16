import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import truck from './icons/truck (2).png';

const Leafroute = () => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: truck,
    iconSize: [40, 40],
  });

  useEffect(() => {
    const marker1 = L.marker([33.78342557952968,  -84.40550841510951], { icon: DefaultIcon }).addTo(map);
    const destinationCoordinates = [33.925709,-84.433636]; // Define your fixed destination coordinates here

    L.Routing.control({
      waypoints: [L.latLng(33.78342557952968,  -84.40550841510951), L.latLng(destinationCoordinates)],
      lineOptions: {
        styles: [
          {
            color: "blue",
            weight: 6,
            opacity: 0.8,
          },
        ],
      },
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: true,
    })
      .on("routesfound", function (e) {
        e.routes[0].coordinates.forEach((c, i) => {
          setTimeout(() => {
            marker1.setLatLng([c.lat, c.lng]);
          }, 1000 * i);
        });
      })
      .addTo(map);

    // No need to add a click event listener, you can remove the handleClick function

    // Cleanup the event listener when the component unmounts
    return () => {
      // No need to remove the click event listener
    };
  }, [DefaultIcon, map]);

  return null;
};

export default Leafroute;
