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
import "./Azerbaijan.css";
import L from "leaflet";
import { Link } from "react-router-dom";

const markerIcon = L.icon({
  iconUrl: require("../../assets/Icons/icon2.png"),
  iconSize: [35, 40],
});
const center = [40.367421050763554, 48.15512358371176];
let zoom = 8;
const Azerbaijan = () => {
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
            <Link to="../Regions/Quba">Quba</Link>
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
  );
};
export default Azerbaijan;
