import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";
import "./Quba.css";
import L from "leaflet";
import { Link } from "react-router-dom";
import Sliders from "../../Slider/Slider";

const markerIcon = L.icon({
  iconUrl: require("../../../assets/Icons/icon2.png"),
  iconSize: [35, 40],
});
const center = [41.191148227358866, 48.49190523563717];
let zoom = 10;
const Quba = () => {
  const markers = [
    {
      id: "1",
      positions: [41.36328076823229, 48.512409169643085],
      title: "Friday Mosque",
      src: require("../../../assets/images/5.jpg"),
      descriprion:
        "Juma Mosque (Friday Mosque) of Azerbaijan is one of the main mosques in Quba region of Azerbaijan. The construction of the mosque dates back to to the 19th century. The unique side of the mosque is its structure which is not typical to other places of Azerbaijan except Quba. Its construction is typical only for the mosques of Quba province. The mosque has a cylinder shaped structure and has the form of regular octagon. In fact, the interior of the mosque is bigger than expected from outside. There is a large dome with a diameter of 16 meters covering the hall. Inside there is a big hall crowned with a huge 16 m diameter dome. After Juma Mosque constructed in Quba, the same type of structures started to appear in other regions of Azerbaijan.",
    },
    {
      id: "2",
      positions: [41.17993048846446, 48.12775537446337],
      title: "Khinalig",
      src: require("../../../assets/images/6.png"),
      descriprion:
        "One of Azerbaijan’s top ethno-tourism spots, the picturesque village of Khinalig is located at over 2,000 metres and is said to be connected to the story of Noah, who some believe dropped anchor here during the Great Flood. Due to the steep terrain, the village’s 380 houses – many between 200-300 years old – are built very close together, with each roof doubling up as the courtyard for the house above. As descendants of one of the ancient Caucasian Albanian tribes, the locals speak a completely unique language. Travelling here will allow you to discover an intriguing local culture while experiencing the full majesty of the Caucasus Mountains.",
    },
    {
      id: "3",
      positions: [41.3623800792703, 48.50743896884901],
      title: "Bathhouse where Alexandre Dumas washed",
      src: require("../../../assets/images/13.jpg"),
      descriprion:
        "For the population of Azerbaijan, baths have always been a special place where people rested not only physically, but also spiritually. In particular, on the territory of the city of Guba there is one old bathhouse built in the 18th century. It is built of red brick, and the building is crowned with a large dome, which was designed to maintain the necessary humidity and temperature in the bath.The building is quadrangular. Another name for the bath is Suhur (sometimes Chukhur) hammam. The bath building has 6 rooms, two doors and six windows. The bath was connected to the plumbing. That is, the water from the water supply was supplied from a well located under the bath, or from the city water supply. The bathhouse is interesting because the famous author Alexandre Dumas once bathed here. After that, 150 years later, his great-grandson specially visited the same place. The bath was used for its intended purpose until 1985. However, at present, the bathhouse does not function, but remains only a historical monument.",
    },
    {
      id: "4",
      positions: [41.15665067928989, 48.62624172651337],
      title: "Afurja",
      src: require("../../../assets/images/14.png"),
      descriprion:
        "Afurja is the highest waterfall in Azerbaijan with a height of 75 meters. It has a natural origin and is located in the city of Guba, in particular, near the Tengalty gorge. You can go to it along a narrow rocky road near the rocks. The waterfall is a natural monument and is protected by the state. Local tour guides say that the Afurdzha waterfall was once visited by such famous people as the poet Mikhail Lermontov and the Decembrist Bestuzhev-Marlinsky.",
    },
  ];
  const [currentMarker, setCurrentMarker] = useState(null);
  const getMarker = (marker) => {
    setCurrentMarker(marker);
  };
  const sliderObj = [
    {
      title: " Friday Mosque",
      src: require("../../../assets/images/5.jpg"),
      description:
        "Juma Mosque (Friday Mosque) of Azerbaijan is one of the main mosques in Quba region of Azerbaijan. The construction of the mosque dates back to to the 19th century. The unique side of the mosque is its structure which is not typical to other places of Azerbaijan except Quba. Its construction is typical only for the mosques of Quba province. The mosque has a cylinder shaped structure and has the form of regular octagon. In fact, the interior of the mosque is bigger than expected from outside. There is a large dome with a diameter of 16 meters covering the hall. Inside there is a big hall crowned with a huge 16 m diameter dome. After Juma Mosque constructed in Quba, the same type of structures started to appear in other regions of Azerbaijan.",
    },
    {
      title: " Khinalig",
      src: require("../../../assets/images/6.png"),
      description:
        "One of Azerbaijan’s top ethno-tourism spots, the picturesque village of Khinalig is located at over 2,000 metres and is said to be connected to the story of Noah, who some believe dropped anchor here during the Great Flood. Due to the steep terrain, the village’s 380 houses – many between 200-300 years old – are built very close together, with each roof doubling up as the courtyard for the house above. As descendants of one of the ancient Caucasian Albanian tribes, the locals speak a completely unique language. Travelling here will allow you to discover an intriguing local culture while experiencing the full majesty of the Caucasus Mountains.",
    },
    {
      title: "Bathhouse where Alexandre Dumas washed",
      src: require("../../../assets/images/13.jpg"),
      description:
        "For the population of Azerbaijan, baths have always been a special place where people rested not only physically, but also spiritually. In particular, on the territory of the city of Guba there is one old bathhouse built in the 18th century. It is built of red brick, and the building is crowned with a large dome, which was designed to maintain the necessary humidity and temperature in the bath.The building is quadrangular. Another name for the bath is Suhur (sometimes Chukhur) hammam. The bath building has 6 rooms, two doors and six windows. The bath was connected to the plumbing. That is, the water from the water supply was supplied from a well located under the bath, or from the city water supply. The bathhouse is interesting because the famous author Alexandre Dumas once bathed here. After that, 150 years later, his great-grandson specially visited the same place. The bath was used for its intended purpose until 1985. However, at present, the bathhouse does not function, but remains only a historical monument.",
    },
    {
      title: "Afurja",
      src: require("../../../assets/images/14.png"),
      description:
        "Afurja is the highest waterfall in Azerbaijan with a height of 75 meters. It has a natural origin and is located in the city of Guba, in particular, near the Tengalty gorge. You can go to it along a narrow rocky road near the rocks. The waterfall is a natural monument and is protected by the state. Local tour guides say that the Afurdzha waterfall was once visited by such famous people as the poet Mikhail Lermontov and the Decembrist Bestuzhev-Marlinsky.",
    },
  ];
  return (
    <>
      <div className="map-div">
        <MapContainer
          zoomControl={true}
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{
            width: "100%",
            height: "100vh",
            margin: "0 auto",
          }}
          className="map-container"
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=dZOt5h8VzjgQ9hrjLbT7"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {/* <ZoomControl
      zoomControl={false}
      >
      </ZoomControl> */}
          {markers.map((marker) => (
            <Marker position={marker.positions} icon={markerIcon}>
              <Popup>
                <a onClick={() => getMarker(marker)}>{marker.title}</a>
              </Popup>
            </Marker>
          ))}

          {statesData.features.map((state) => {
            const coordinates = state.geometry.coordinates[0].map((item) => [
              item[1],
              item[0],
            ]);

            return (
              <Polygon
                pathOptions={{
                  fillColor: "rgb(106, 114, 132)",
                  fillOpacity: 0.7,
                  weight: 1,
                  opacity: 1,
                  dashArray: 3,
                  color: "white",
                }}
                positions={coordinates}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillColor: "orange",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      color: "black",
                    });
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 1,
                      dashArray: "3",
                      color: "black",
                      fillColor: "rgb(106, 114, 132)",
                    });
                  },
                  click: (e) => {},
                }}
              />
            );
          })}
        </MapContainer>
      </div>
      {currentMarker && (
        <div>
          <div>{currentMarker.title}</div>
          <div>
            <img src={currentMarker.src} />
          </div>
          <div>{currentMarker.descriprion}</div>
        </div>
      )}
      <div className="sliderAz">
        <Sliders slider={sliderObj} />
      </div>
    </>
  );
};
export default Quba;
