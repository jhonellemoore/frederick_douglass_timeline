import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './TimelineMap3.module.css';  // Import custom styles for popup

const TimelineMap3 = ({ events, mapRef }) => {
    const markerRef = useRef([]);  // Store the marker references as an array

    useEffect(() => {
        if (mapRef && mapRef.current && events) {
            // Loop over all events and create a marker for each valid event with latitude and longitude
            events.forEach((event) => {
                const { latitude, longitude, headline, location_name } = event;

                // Check if the event has valid latitude and longitude
                if (latitude && longitude) {
                    // Create a new marker
                    const newMarker = new mapboxgl.Marker()
                        .setLngLat([longitude, latitude])
                        .addTo(mapRef.current);

                    // Create a popup for the marker
                    const popup = new mapboxgl.Popup({ offset: 25 })
                        .setHTML(`
                            <div class="${styles.popupContent}">
                                <h3>Location</h3>
                                <p>${headline} </p>
                            </div>
                        `);

                    // Attach the popup to the marker
                    newMarker.setPopup(popup);

                    // Add hover effect: show popup on mouseenter and hide on mouseleave
                    newMarker.getElement().addEventListener('mouseenter', () => {
                        popup.addTo(mapRef.current);  // Show the popup on hover
                    });
                    newMarker.getElement().addEventListener('mouseleave', () => {
                        popup.remove();  // Hide the popup when hover ends
                    });

                    // Store the marker reference in markerRef
                    markerRef.current.push(newMarker);
                }
            });
        }

        // Cleanup: Remove all markers when the component unmounts or when `events` change
        return () => {
            if (markerRef.current.length > 0) {
                markerRef.current.forEach(marker => marker.remove());
                markerRef.current = [];  // Clear the marker references
            }
        };
    }, [events, mapRef]);  // Re-run the effect when `events` or `mapRef` changes

    return (
        <div style={{ width: '100%', height: '100%' }}>
            {/* Map rendering happens elsewhere, this is just the marker control */}
        </div>
    );
};

export default TimelineMap3;
