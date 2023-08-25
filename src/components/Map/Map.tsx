import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import './map.css';
export const Map = () => {
    return (
        <div className="map">
           < MapContainer center={[51.0645625,19.4430637]} zoom={15} >
               <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
               />
               <Marker position={[51.0645625,19.4430637]}>
                 <Popup>
                     <h2>Radomsko</h2>
                     <p>Centrum Wszechświata</p>
                 </Popup>
               </Marker>
           </MapContainer>
        </div>
    )
};

// pełny zapis złożonego komponentu  : export const Name = () => {
//     return (
//         code
//     )
// }