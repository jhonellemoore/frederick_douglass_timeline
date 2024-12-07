// ES6
import React, { useState, useEffect, useRef } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from '../components/timelinemap.module.css';
import TimelineMarkers from './TimelineMarkers'

const TimelineMap = ({handleMarkerClick, fredInfo, events, selectedMarker}) => {
    const mapContainerRef2 = useRef();
    const mapRef2 = useRef();

    const handleClick = () => {
        console.log("handling clicl");
        mapRef2.current.setZoom(3.35);
        mapRef2.current.setCenter([-104, 38.8283]);
    };

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibW9vcmVqaG9uZWxsZTg1IiwiYSI6ImNtMndtcjc1ejA4OGsyam9lb2xpNmIxNnQifQ.OWTOkcY97AfLduslDdbPGw';
        mapRef2.current = new mapboxgl.Map({
            ref: {mapRef2},
            container: mapContainerRef2.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [-104, 38.8283], // Initial center
            zoom: 3.35, // Initial zoom
        });

        return () => {};
    }, []);

    useEffect(() => {
        console.log('Selected Marker Updated in Child:', selectedMarker);
        if (selectedMarker && mapRef2.current) {
            console.log('Selected marker in child lat long is ', selectedMarker.getLngLat());
            const { lng, lat } = selectedMarker.getLngLat();
            console.log('lat and long in child is', lat, lng);
            if (lat && lng) {
                mapRef2.current.flyTo({ center: [lng, lat], zoom: 9.5 });
            }
        }
    }, [selectedMarker]);

    return (
        <div>
            <div className={styles.container} ref={mapContainerRef2}>
                <TimelineMarkers onClick={handleMarkerClick} fredInfo={fredInfo} mapRef={mapRef2} events={events}/>
            </div >
            <button onClick={handleClick} className={styles['button']}>
                <span className={styles['button-text']}>
                    Reset Zoom
                </span>
            </button>
      </div>
    )
};

export default TimelineMap;