import React from "react";
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
import "./Nakhchivan.css";
import L from "leaflet";
import { Link } from "react-router-dom";
import Sliders from "../../Slider/Slider";

const markerIcon = L.icon({
  iconUrl: require("../../../assets/Icons/icon2.png"),
  iconSize: [35, 40],
});
const center = [41.191148227358866, 48.49190523563717];
let zoom = 10;
const Nakhchivan = () => {
  const sliderObj = [
    {
      title: " Mausoleum of Momine-Khatun",
      src: require("../../../assets/images/3.jpg"),
      description:
        "The ancestor of the aldehyde dynasty is Momine-Khatun. It was for her that the Momine-Khatun Mausoleum was built in the 12th century. The author and founder was atabek Jahan Pahlavan. He dedicated the majestic building to his mother, Momine-Khatun. The complexity of the decoration attracts specialists and lovers of ancient architecture from all over the world. The geometric ornament in stone is used as the main decorative technique. On it you can see many quotes from the Koran, presented in the form of beautiful inscriptions.",
    },
    {
      title: " Alinja castle",
      src: require("../../../assets/images/8.jpg"),
      description:
        "Medieval fortress on a rocky mountain peak in the Julfa region. It is actually a recent reconstruction of a former fortress used by various ruling dynasties of Nakhchivan during the Middle Ages, including the Seljuks, Atabeks and Safavids. The castle was famous for its near impregnability, although it was eventually sacked by the legendary Turkic Mongol ruler Tamerlane in 1401, although only after a 14-year struggle. Legend has it that Tamerlane used the castle to house his treasury, and local legends claim that his treasures may still be hidden somewhere in the vicinity. Visit the museum below to discover this rich history, then climb the 1500 steps to the top for breathtaking views of the epic landscape of Nakhchivan.",
    },
    {
      title: " Palace of Nakhichevan Khans",
      src: require("../../../assets/images/11.jpg"),
      description:
        "At the end of the 18th century, the palace was built by Kelbali Khan Kangarli, the father of the last Nakhichevan Khan, Ehsan Khan. This palace, built, judging by historical data, in 1780, is one of the pearls of medieval Azerbaijani architecture. Some of the buildings of the palace ensemble have survived to this day. Khans and descendants of the Khan family lived here until 1920. The building of the palace is two-storied. At one time the palace consisted of two halves. The southern part was intended for administrative affairs and the reception of distinguished guests, the northern part was for the residence of the khan's family.",
    },
    {
      title: " Noah’s Mausoleum",
      src: require("../../../assets/images/12.jpg"),
      description:
        "The Tomb of prophet Noah (Azerbaijani: Nuh peyğəmbər türbəsi) or Noah's Mausoleum is a mausoleum in the city of Nakhchivan, Azerbaijan. Architecture of the construction is dated from the 8th century. The current mausoleum was built in 2006. The tomb consists of remains of the lower storey of a former temple. There is a ladder leading to a burial vault. The current mausoleum was built in 2006. The tomb consists of remains of the lower storey of a former temple. There is a ladder leading to a burial vault. There is a stone column in the middle of the vault. According to legend, relics of Noah are under this column. A portrait describing the mausoleum of Noah 100 years ago painted by Bahruz Kangarli is saved in the National Art Museum of Azerbaijan.",
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
          <Marker
            position={[39.27187552341733, 45.40949814987457]}
            icon={markerIcon}
          >
            <Popup>
              <Link href="https://ru.wikipedia.org/wiki/Нахичевань">
                Naxcivan-столица Нахичеванской Автономной Республики
              </Link>
            </Popup>
          </Marker>

          <Marker
            position={[41.37480125307747, 48.539552838440464]}
            icon={markerIcon}
          >
            <Popup>
              <Link to="/quba">Quba</Link>
            </Popup>
          </Marker>

          <Marker
            position={[40.411089277947596, 49.876886131147195]}
            icon={markerIcon}
          >
            <Popup>
              <Link href="https://ru.wikipedia.org/wiki/Нахичевань">Baki</Link>
            </Popup>
          </Marker>

          <Marker
            position={[39.75329240226435, 46.74566736831197]}
            icon={markerIcon}
          >
            <Popup>
              <Link to="https://ru.wikipedia.org/wiki/Нахичевань">Şuşa</Link>
            </Popup>
          </Marker>
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
      </div>
      <div className="sliderAz">
        <Sliders slider={sliderObj} />
      </div>
    </>
  );
};
export default Nakhchivan;
