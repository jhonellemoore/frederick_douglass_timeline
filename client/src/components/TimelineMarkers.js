// ES6
import React, { useState, useEffect, useRef } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from '../components/timelinemarkers.module.css';

const TimelineMarkers = ({onClick, fredInfo, mapRef, events}) => {
    const fredMarkerRef = useRef(0);
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
                .setHTML(`<p>${fredInfo.headline} in ${fredInfo.location_name}</p>`);

                fredMarker.setPopup(popup);
                fredMarker.getElement().id = `fred${fredInfo.id}`;
                fredMarker.getElement().addEventListener('mouseenter', () => {
                    popup.addTo(mapRef.current);  
                });
                fredMarker.getElement().addEventListener('mouseleave', () => {
                    popup.remove();   
                });
                fredMarkerRef.current = fredMarker;
                fredMarker.getElement().addEventListener('click', () => {
                    onClick(markerRef.current, fredMarker, fredMarkerRef, fredInfo.id);
                });

            }
            // events markers
            if (events && Array.isArray(events)){
                // for every event, check if latitude and longitude. plot marker
                events.forEach((event) => {
                    if (event.latitude && event.longitude){
                        const lat2 = event.latitude;
                        const lng2 = event.longitude;
                        const newMarker = new mapboxgl.Marker({color: event.event_type})
                        .setLngLat([lng2, lat2])
                        .addTo(mapRef.current);
                        const popup2 = new mapboxgl.Popup({ offset: 25 })
                        .setHTML(`<p>${event.event}.<br><strong>Click to see more.</strong> </p>`);
                        console.log("je")
                        newMarker.setPopup(popup2);
                        newMarker.getElement().addEventListener('mouseenter', () => {
                            popup2.addTo(mapRef.current);  
                        });
                        newMarker.getElement().addEventListener('mouseleave', () => {
                            popup2.remove();  
                        });

                        // adding clickability to marker (add id first)
                        newMarker.getElement().id = event.id;
                        markerRef.current.push(newMarker);
                        newMarker.getElement().addEventListener('click', () => {
                            onClick(markerRef.current, newMarker, fredMarkerRef, event.id);
                        });
                    }
                })
            }
        }
    }, [fredInfo, mapRef, events]);

    
    return (
        <div style={{ width: '100%', height: '100%' }}>
        </div>
    );
};

export default TimelineMarkers;