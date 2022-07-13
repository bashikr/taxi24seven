import React, { useState } from "react";
import PropTypes from "prop-types";

import "./App.css";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from "react-leaflet";
import dayjs from "dayjs";

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

const DateDisplay = ({ today }) => <p>{today}</p>;

DateDisplay.propTypes = {
    today: PropTypes.instanceOf(Date),
};

function App() {
    let [today] = useState(dayjs(new Date()));
    const position = [57.70887, 11.97456];
    return (
        <div className="App">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        <DateDisplay today={today.format("YYYY-MM-DD")} />
                    </Popup>
                </Marker>
                <LocationMarker />
            </MapContainer>
        </div>
    );
}

export default App;
