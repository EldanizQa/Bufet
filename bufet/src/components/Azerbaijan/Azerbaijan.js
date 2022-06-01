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
          <Marker
            position={[39.27187552341733, 45.40949814987457]}
            icon={markerIcon}
          >
            <Popup>
              <Link to="/nakhchivan">
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
              <Link to="/baku">Baki</Link>
            </Popup>
          </Marker>

          <Marker
            position={[39.75329240226435, 46.74566736831197]}
            icon={markerIcon}
          >
            <Popup>
              <Link to="/shusha">Şuşa</Link>
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
        <Sliders>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={require("../../assets/images/1.jpg")} />
              </div>
              <div className="details">
                <h2> Maiden tower </h2>
                <span className="job-title">
                  The Maiden Tower tower is rightly called the most mysterious
                  monument in Baku. It is located on the territory of the Icheri
                  Sheher fortress. The uniqueness of the architecture of Gyz
                  Galasy lies in the fact that the tower is located on a ledge
                  of a large rock. A gray lime cylinder was used as a building
                  material. The height of the fortress reaches 28 m, and its
                  diameter is 16.5 m.
                  {/* {description} */}
                </span>
              </div>
            </div>
          </div>
        </Sliders>
      </div>
    </>
  );
};
export default Azerbaijan;
