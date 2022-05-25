import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

function App() {
  return (
    <MapContainer center={[40.36758192810607, 49.93856174974282]} zoom={8} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Marker position={[40.36758192810607, 49.93856174974282]}>
      <Popup>
        Qasimov Huseyn Abdulla oglu <br /> Hal Hazirda dashag yaliyir.
      </Popup>
    </Marker> */}
    <Marker position={[40.36491294861612, 47.73238271138779]}>
      <Popup>
        <a href='https://en.wikipedia.org/wiki/Azerbaijan'>Welcome</a> <br /> 
      </Popup>
    </Marker>
  </MapContainer>
  );
}

export default App;