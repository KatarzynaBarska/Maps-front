import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';
import {SimpleAdEntity} from 'types';

import 'leaflet/dist/leaflet.css';
import './map.css';
import {SearchContext} from "../../contexts/search.contex";
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    // useEffect(() => { //useEffect to efekt uboczny, czyli wszystko co nie jest renderowaniem widoku
    //     console.log('Make request to search for', search);
    // }, [search]);

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const data = await res.json();

            setAds(data);

        })();
    }, [search]);

    return (
        <div className="map">
            < MapContainer center={[51.0645625, 19.4430637]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />

                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            {/*jeżeli coś renderujemy(wyświetlamy) w React, musimy dodać atrybut key*/}
                            <Popup>
                               <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
};

// pełny zapis złożonego komponentu  : export const Name = () => {
//     return (
//         code
//     )
// }