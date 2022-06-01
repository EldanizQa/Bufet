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
import "./Shusha.css";
import L from "leaflet";
import { Link } from "react-router-dom";
import Sliders from "../../Slider/Slider";

const markerIcon = L.icon({
  iconUrl: require("../../../assets/Icons/icon2.png"),
  iconSize: [35, 40],
});
const center = [39.745968525386495, 46.74747009136059];
let zoom = 10;
const Shusha = () => {
  const sliderObj = [
    {
      title: " Shusha fortress",
      src: require("../../../assets/images/15.jpg"),
      description:
        "The fortress was built in the middle of the 18th century by Panah Ali Khan to protect the Karabakh Khanate and was originally called Panahabad. Later, the fortress became known as Kala or Shusha-Kalasy, and, finally, Shusha. According to one version, the fortress began to be called so after the name of the nearby Armenian village of Shushikent, some of the inhabitants of which were resettled in a new fortress[31], along with the inhabitants of Shah-bulag and several other villages. According to Mirza Jamal, before the founding of the city by Panah-Ali Khan, “there were no dwellings in this place. This place was an arable land and a pasture that belonged to the inhabitants of Shushikend, located six miles east of the fortress.",
    },
    {
      title: " Mausoleum of Vagif",
      src: require("../../../assets/images/16.jpg"),
      description:
        "The construction of the Vagif Mausoleum began in 1970 and was completed only in 1982, so this architectural monument is relatively new. With this mausoleum, the Azerbaijanis wanted to honor the memory of the vizier of the Karabakh Khanate, the former commoner of Mola Panah Vagif, who could become a poet, astrologer and diplomat. The mausoleum was erected on his grave, dated to the 18th century. The grave and mausoleum are located in the poet's hometown, Shusha. It was at this place in the southern part of the city that the poet was killed.",
    },
    {
      title: " Azykh cave",
      src: require("../../../assets/images/9.jpg"),
      description:
        "Azykh Cave is a six-cave complex in Azerbaijan, known as a habitation site of prehistoric humans. It is situated near the village of Azykh in Shusha District. The cave is an important prehistoric site, which has been occupied by different human groups for a long time. The ancient layers of the Middle Paleolithic have yielded Neanderthal fossil remains that may date from around 300,000 years ago.",
    },
    {
      title: " Yukhari Govhar aga mosque",
      src: require("../../../assets/images/10.jpg"),
      description:
        "Yukhari Govhar Agha Mosque or Shusha Friday Mosque is the oldest mosque built in the central square of Shusha. The mosque is registered by the Ministry of Culture and Tourism of the Republic of Azerbaijan as a historical and cultural monument of national importance. The construction of the Upper Govhar Agha Mosque was carried out in four stages. The first mosque in the area was built of reeds in about 1750 by the order of Panahali khan, the founder of the Karabakh khanate and Shusha fortress, parallel to the Karabakh khan's palace. After Ibrahimkhalil khan came to power in 1768–1769- A new stone mosque was built on the site of the reed mosque. In the first half of the 19th century, with the financial support of Govhar agha, a third mosque with a double minaret was built on the site of Ibrahimkhalil khan's dilapidated mosque. 1883- The fourth and last Friday mosque of Shusha was built on the site of the third mosque on the basis of Govhar aga's financial resources.",
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
export default Shusha;
