import React from 'react';
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from './data';
import './App.css';
import L from "leaflet"
// import mapIcon from './assets/Icons'

const center = [40.367421050763554, 48.15512358371176];



 function Map() {
  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=dZOt5h8VzjgQ9hrjLbT7"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
       <Marker position={center} >
        <Popup>
          <a href='https://en.wikipedia.org/wiki/Azerbaijan'>Welcome</a> <br /> 
        </Popup>
      </Marker>
      {
        statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

          return (<Polygon
            pathOptions={{
              fillColor: '#008000',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: 'white'
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillColor: "black",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: "white",
                })
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: "3",
                  color: 'white',
                  fillColor: '#008000'
                });
              },
              click: (e) => {

              }
            }}
          />)
        })
      }
    </MapContainer>
  );
}
export default Map;