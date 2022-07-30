import React, { useState } from "react";

import Button from "@mui/material/Button";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
    ZoomControl,
} from "react-leaflet";
import dayjs from "dayjs";
import PropTypes from "prop-types";

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

export default function Map() {
    let [today] = useState(dayjs(new Date()));
    const position = [57.70887, 11.97456];
    return (
        <div>
            {" "}
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="bottomright" />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        <DateDisplay today={today.format("YYYY-MM-DD")} />
                        <Button variant="contained">Hello World</Button>
                    </Popup>
                </Marker>
                <LocationMarker />
            </MapContainer>
        </div>
    );
}
