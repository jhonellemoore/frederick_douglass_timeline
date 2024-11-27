// ES6
import React, { useState, useEffect, useRef } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'maplibre-gl/dist/maplibre-gl.css';

const TimelineMarkers = ({fredInfo, mapRef, events}) => {
    const fredMarkerRef = useRef(null);
    // const markerRef = useRef([]);
    const markerRef = useRef([]);

    useEffect(() => {
        if (mapRef && mapRef.current){
            if (fredMarkerRef.current){
                fredMarkerRef.current.remove();
            }
            if (markerRef.current){
                markerRef.current.forEach(marker => marker.remove());
                markerRef.current = [];
            }

            // Douglass' info markers
            if (fredInfo && fredInfo.latitude && fredInfo.longitude){
                const lat = fredInfo.latitude;
                const lng = fredInfo.longitude;
                const fredMarker = new mapboxgl.Marker({color: 'green'})
                .setLngLat([lng, lat])
                .addTo(mapRef.current);
                const popup = new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h3>Location</h3><p>${fredInfo.headline} in ${fredInfo.location_name}</p>`);

                fredMarker.setPopup(popup);
                fredMarker.getElement().addEventListener('mouseenter', () => {
                    popup.addTo(mapRef.current);  
                });
                fredMarker.getElement().addEventListener('mouseleave', () => {
                    popup.remove();  
                });
                fredMarkerRef.current = fredMarker;
            }
            // events markers
            if (events && Array.isArray(events)){
                // for every event, check if latitude and longitude. plot marker
                events.forEach((event) => {
                    if (event.latitude && event.longitude){
                        const lat2 = event.latitude;
                        const lng2 = event.longitude;
                        const newMarker = new mapboxgl.Marker({color: 'red'})
                        .setLngLat([lng2, lat2])
                        .addTo(mapRef.current);
                        const popup2 = new mapboxgl.Popup({ offset: 25 })
                        .setHTML(`<h3>Location</h3><p>${event.event} in ${event.location_name}</p>`);
                        console.log("je")
                        newMarker.setPopup(popup2);
                        newMarker.getElement().addEventListener('mouseenter', () => {
                            popup2.addTo(mapRef.current);  
                        });
                        newMarker.getElement().addEventListener('mouseleave', () => {
                            popup2.remove();  
                        });
                        markerRef.current.push(newMarker);
                    }
                })
            }
        }
    }, [fredInfo, mapRef, events]);

    
    return (
        <div style={{ width: '100%', height: '100%' }}>
            {/* No need for styles.marker, inline styles are used here */}
        </div>
    );
};

export default TimelineMarkers;