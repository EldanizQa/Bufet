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
import "./Baku.css";
import L, { marker } from "leaflet";

const markerIcon = L.icon({
  iconUrl: require("../../../assets/Icons/icon2.png"),
  iconSize: [35, 40],
});
const markers = [
  {
    id: "1",
    positions: [40.36073773213743, 49.82638835210135],
    title: "Flame Towers",
    src: "https://ulduztourism.az/wp-content/uploads/2017/09/flame-towers-3.jpg",
    descriprion:
      'Flame Towers (Azerbaijani: Alov qüllələri) is a trio of skyscrapers in Baku, Azerbaijan, the height of the tallest tower is 182 m (597 ft). The three flame-shaped towers symbolize the element of fire – a reference to Azerbaijan\'s motto "The Land of Fire", historically resonant in a region where natural gas flares shoot from the earth and Zoroastrian worshippers saw in fire a symbol of the divine (notably at the Ateshgah of Baku and Yanar Dag). The three-flame motif also appears on the coat of arms of Baku. The buildings consist of 130 residential apartments over 33 floors, a Fairmont hotel tower that consists of 250 rooms and 61 serviced apartments, and office blocks that provides a net 33,114 square meters of office space. The cost of Flame Towers was an estimated US$350 million. Construction began in 2007, with completion in 2012. HOK was the architect for the project, DIA Holdings served as the design-build contractor, and Hill International provided project management.',
  },
  {
    id: "2",
    positions: [40.36599005211532, 49.83163208416204],
    title: "Iceri Sheher",
    src: "https://azerbaijan360.az/site/assets/files/1063/f10.jpg",
    descriprion:
      "Iceri Sheher (Azerbaijani: İçərişəhər) is the historical core of Baku, the capital of Azerbaijan. The Old City is the most ancient part of Baku, which is surrounded by walls which were easily defended. In 2007, the Old City had a population of about 3000 people. In December 2000, the Old City of Baku, including the Palace of the Shirvanshahs and Maiden Tower, became the first location in Azerbaijan to be classified as a UNESCO World Heritage Site.",
  },
  {
    id: "3",
    positions: [40.377723579373516, 49.84711646882235],
    title: "Azerbaijan State and Oil Universite",
    src: "https://azertag.az/files/galleryphoto/2020/3/1000x669/16010260061844830939_1000x669.jpg",
    descriprion:
      "The rise of what became ASOIU is tied to the rise of the petroleum industry in the Baku region. By 1887 the preparatory technical school that would become Baku Polytechnicum was established in Baku. By 1910 it had integrated a curriculum related to the growing oil industry. However, the ratio of Azeris to non-Azeris was so skewed that, of the 494 students studying at the school in 1916, only 20 were Azeri. On November 14, 1920, after the invasion of the Red Army and the establishment of the fledgling Azerbaijan SSR, the new government decreed that Baku Polytechnicum would close and be replaced by Baku Polytechnical Institute, a more traditional polytechnic institute and the beginnings of the current incarnation. The new school focused on training engineers in a broad range of industries, from agriculture to oil. By 1923 the school graduated its first three students; by 1927 it had risen to 289 graduates.",
  },
  {
    id: "4",
    positions: [40.36621283843268, 49.83726763787297],
    title: "Maiden's Tower",
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a1/03/56/image-largejpg.jpg?w=1200&h=-1&s=1",
    descriprion:
      'The Maiden\'s Tower (Azerb. Qız Qalası - Giz Galasy) is an ancient fortification near the coastal part of the "Old City" of Icheri Sheher. It is one of the most important components of the seaside "facade" of Baku. It rises in the coastal part of the feudal city - the Fortress, or Icheri Sheher. The tower stands on a rock, partially lined with pure hewn stone and protected by a fortress wall with a system of large semicircular ledges rising from the foot almost to the very top.',
  },
];
const center = [40.40508337134207, 49.86391827210291];
let zoom = 9;
const Baku = () => {
  const [currentMarker, setCurrentMarker] = useState(null);
  const getMarker = (marker) => {
    setCurrentMarker(marker);
    console.log(marker);
  };
  return (
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
                color: "black",
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
                    color: "white",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 1,
                    dashArray: "3",
                    color: "white",
                    fillColor: "rgb(106, 114, 132)",
                  });
                },
                click: (e) => {},
              }}
            />
          );
        })}
      </MapContainer>
      {currentMarker && (
        <div>
          <div>{currentMarker.title}</div>
          <div>
            <img src={currentMarker.src} />
          </div>
          <div>{currentMarker.descriprion}</div>
        </div>
      )}
    </div>
  );
};
export default Baku;
