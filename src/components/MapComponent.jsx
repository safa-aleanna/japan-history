import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const HeianEraLocations = [
    { name: 'Kyoto', position: [35.0116, 135.7681], description: 'Capital of the Heian Era.' },
    { name: 'Nara', position: [34.6851, 135.8048], description: 'Ancient capital of Japan.' },
    { name: 'Osaka', position: [34.6937, 135.5023], description: 'A significant city during Heian Era.' },
];

const MapComponent = () => {
    return (
        <MapContainer center={[35.0116, 135.7681]} zoom={7} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {HeianEraLocations.map(location => (
                <Marker key={location.name} position={location.position}>
                    <Popup>
                        <strong>{location.name}</strong><br />
                        {location.description}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;