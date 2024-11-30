// ES6
import React, { useState, useEffect, useRef } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from '../components/timelinemap.module.css';
import TimelineMarkers from './TimelineMarkers'

const TimelineMap = ({fredInfo, events}) => {
    const mapContainerRef2 = useRef();
    const mapRef2 = useRef();

    useEffect(() => {

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
        if (events && mapRef2.current) {
            const { latitude: lat, longitude: lng } = fredInfo ? fredInfo : { latitude: 38.8283, longitude: -104 };

            if (lat && lng) {
                mapRef2.current.flyTo({ center: [lng, lat], zoom: fredInfo ? 14.5: 3.35 });
            }
        }
    }, [events]);


    return (
        <div className={styles.container} ref={mapContainerRef2}>
            <TimelineMarkers fredInfo={fredInfo} mapRef={mapRef2} events={events}/>
        </div>
    )
};

export default TimelineMap;