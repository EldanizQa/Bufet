import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";
import "./Azerbaijan.css";
import L from "leaflet";
import { Link } from "react-router-dom";
import Sliders from "../Slider/Slider";

const markerIcon = L.icon({
  iconUrl: require("../../assets/Icons/icon2.png"),
  iconSize: [35, 40],
});
const center = [40.367421050763554, 48.15512358371176];
const Azerbaijan = () => {
  const sliderObj = [
    {
      title: " Maiden tower",
      src: require("../../assets/images/1.jpg"),
      description:
        "The Maiden Tower tower is rightly called the most mysterious monument in Baku. It is located on the territory of the Icheri Sheher fortress. The uniqueness of the architecture of Gyz Galasy lies in the fact that the tower is located on a ledge of a large rock. A gray lime cylinder was used as a building material. The height of the fortress reaches 28 m, and its diameter is 16.5 m.",
    },
    {
      title: " Palace of the Shirvanshahs",
      src: require("../../assets/images/2.jpg"),
      description:
        "From the 13th to the 16th centuries, the palace of the Shirvanshahs was built. The sights of Azerbaijan include this architectural complex, which includes a Hamer divan courtyard, a mosque and a tomb. It even found a place for a bathhouse and the mausoleum of Bakuvi.",
    },
    {
      title: " Mausoleum of Momine-Khatun",
      src: require("../../assets/images/3.jpg"),
      description:
        "The ancestor of the aldehyde dynasty is Momine-Khatun. It was for her that the Momine-Khatun Mausoleum was built in the 12th century. The author and founder was atabek Jahan Pahlavan. He dedicated the majestic building to his mother, Momine-Khatun. The complexity of the decoration attracts specialists and lovers of ancient architecture from all over the world. The geometric ornament in stone is used as the main decorative technique. On it you can see many quotes from the Koran, presented in the form of beautiful inscriptions.",
    },
    {
      title: " Flame towers",
      src: require("../../assets/images/4.jpg"),
      description:
        "These are three high-rise buildings, including a hotel, apartments and offices. The total building area is 227 thousand m². The construction of the buildings was started in October 2007 by the Azerbaijani-Turkish company DIA Holding. Initially, it was planned to complete the construction of buildings by December 2010, but, according to representatives of the construction company, due to due to adverse weather conditions, the dates were postponed. Construction was only completed in 2012.",
    },
    {
      title: " Friday Mosque",
      src: require("../../assets/images/5.jpg"),
      description:
        "Juma Mosque (Friday Mosque) of Azerbaijan is one of the main mosques in Quba region of Azerbaijan. The construction of the mosque dates back to to the 19th century. The unique side of the mosque is its structure which is not typical to other places of Azerbaijan except Quba. Its construction is typical only for the mosques of Quba province. The mosque has a cylinder shaped structure and has the form of regular octagon. In fact, the interior of the mosque is bigger than expected from outside. There is a large dome with a diameter of 16 meters covering the hall. Inside there is a big hall crowned with a huge 16 m diameter dome. After Juma Mosque constructed in Quba, the same type of structures started to appear in other regions of Azerbaijan.",
    },
    {
      title: " Khinalig",
      src: require("../../assets/images/6.png"),
      description:
        "One of Azerbaijan’s top ethno-tourism spots, the picturesque village of Khinalig is located at over 2,000 metres and is said to be connected to the story of Noah, who some believe dropped anchor here during the Great Flood. Due to the steep terrain, the village’s 380 houses – many between 200-300 years old – are built very close together, with each roof doubling up as the courtyard for the house above. As descendants of one of the ancient Caucasian Albanian tribes, the locals speak a completely unique language. Travelling here will allow you to discover an intriguing local culture while experiencing the full majesty of the Caucasus Mountains.",
    },
    {
      title: " Heydar Aliyev Center",
      src: require("../../assets/images/7.jpg"),
      description:
        "The Heydar Aliyev Center is a 57,500 m2 building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles. The center is named after Heydar Aliyev, the first secretary of Soviet Azerbaijan from 1969 to 1982, and president of Azerbaijan Republic from October 1993 to October 2003.",
    },
    {
      title: " Alinja castle",
      src: require("../../assets/images/8.jpg"),
      description:
        "Medieval fortress on a rocky mountain peak in the Julfa region. It is actually a recent reconstruction of a former fortress used by various ruling dynasties of Nakhchivan during the Middle Ages, including the Seljuks, Atabeks and Safavids. The castle was famous for its near impregnability, although it was eventually sacked by the legendary Turkic Mongol ruler Tamerlane in 1401, although only after a 14-year struggle. Legend has it that Tamerlane used the castle to house his treasury, and local legends claim that his treasures may still be hidden somewhere in the vicinity. Visit the museum below to discover this rich history, then climb the 1500 steps to the top for breathtaking views of the epic landscape of Nakhchivan.",
    },
    {
      title: " Azykh cave",
      src: require("../../assets/images/9.jpg"),
      description:
        "Azykh Cave is a six-cave complex in Azerbaijan, known as a habitation site of prehistoric humans. It is situated near the village of Azykh in Shusha District. The cave is an important prehistoric site, which has been occupied by different human groups for a long time. The ancient layers of the Middle Paleolithic have yielded Neanderthal fossil remains that may date from around 300,000 years ago.",
    },
    {
      title: " Yukhari Govhar aga mosque",
      src: require("../../assets/images/10.jpg"),
      description:
        "Yukhari Govhar Agha Mosque or Shusha Friday Mosque is the oldest mosque built in the central square of Shusha. The mosque is registered by the Ministry of Culture and Tourism of the Republic of Azerbaijan as a historical and cultural monument of national importance. The construction of the Upper Govhar Agha Mosque was carried out in four stages. The first mosque in the area was built of reeds in about 1750 by the order of Panahali khan, the founder of the Karabakh khanate and Shusha fortress, parallel to the Karabakh khan's palace. After Ibrahimkhalil khan came to power in 1768–1769- A new stone mosque was built on the site of the reed mosque. In the first half of the 19th century, with the financial support of Govhar agha, a third mosque with a double minaret was built on the site of Ibrahimkhalil khan's dilapidated mosque. 1883- The fourth and last Friday mosque of Shusha was built on the site of the third mosque on the basis of Govhar aga's financial resources.",
    },
  ];
  const markers = [
    {
      id: "1",
      positions: [39.27187552341733, 45.40949814987457],
      title: "Naxcivan-столица Нахичеванской Автономной Республики",
      link: "/nakhchivan",
    },
    {
      id: "2",
      positions: [41.37480125307747, 48.539552838440464],
      title: "Quba",
      link: "/quba",
    },
    {
      id: "3",
      positions: [40.411089277947596, 49.876886131147195],
      title: "Baku",
      link: "/baku",
    },
    {
      id: "4",
      positions: [39.75329240226435, 46.74566736831197],
      title: "Şuşa",
      link: "/shusha",
    },
  ];
  return (
    <>
      <div className="map-div">
        <MapContainer
          zoomControl={true}
          center={center}
          zoom={8}
          scrollWheelZoom={false}
          style={{
            width: "100%",
            height: "100vh",
            margin: "0 auto",
          }}
          className="map-container"
        >
          <TileLayer
            url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=dZOt5h8VzjgQ9hrjLbT7"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {/* <ZoomControl
      zoomControl={false}
      >
      </ZoomControl> */}

          {markers.map((marker) => (
            <Marker position={marker.positions} icon={markerIcon}>
              <Popup>
                <Link to={marker.link}>{marker.title}</Link>
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
export default Azerbaijan;
