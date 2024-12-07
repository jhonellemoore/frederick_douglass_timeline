import React, { useState, useEffect } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import styles from '../components/timeline.module.css';
import Sidebar from './Sidebar';
import TimelineMap from './TimelineMap';
import SimulationButton from './SimulationButton';
import Header from './Header';
import KeyHeader from './KeyHeader';

const Timeline = ({ index, onChange, years, fredInfo, events, n}) => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (markerRef, clickedMarker, fredMarkerRef, eventId) => {
      // console.log(markerRef);
      console.log(markerRef);
      if (Array.isArray(markerRef)) {
          markerRef.forEach(marker => {
              const markerElement = marker.getElement();
              markerElement.style.filter = '';  // Reset filters for all markers
          });
      }

      console.log(fredMarkerRef.current);
        const mark = fredMarkerRef.current.getElement();
        mark.style.filter = ''; // Reset the filter

      if (clickedMarker) {
          clickedMarker.getElement().style.filter = 'drop-shadow(0 0 5px rgba(0, 0, 0, 1)) drop-shadow(0 0 25px rgba(255, 255, 255, 1))';
      }   
      setSelectedMarker(clickedMarker); 
  };

    useEffect(() => {
      console.log('Selected Marker Updated:', selectedMarker);
      if (selectedMarker){
        console.log('Selected Marker Updated:', selectedMarker.getElement());
        console.log('Selected Marker Updated:', selectedMarker.getLngLat());
      }
  }, [selectedMarker]);

  return (
    <div>
      <Header />
      <KeyHeader />
      <TimelineMap handleMarkerClick={handleMarkerClick} fredInfo = {fredInfo} events = {events} selectedMarker = {selectedMarker}/>
      <Sidebar selectedMarker={selectedMarker} fredInfo={fredInfo} events = {events}/>
      <SimulationButton onChange={onChange} n={n}/>
      <div className={styles['timeline-container']}>
        <div className={styles['timeline']}>
          <HorizontalTimeline
            styles={{
              background: 'white',
              color: 'white',
              outline: 'black',
              width: '0%',
              display: 'flex',
              padding: '10px 0',
              foreground: '#7EC8D7'
            }}

            index={index}
            indexClick={(newIndex) => { 
              onChange(newIndex); 
            }}
            getLabel={(date) => 
              date.toString()
            }
            values={years} 
            linePadding={10}
            isOpenEnding={false}
            isOpenBeginning={false}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2 style={{ color: '#7EC8D7', fontFamily: 'Georgia, serif' }}>
            Currently Viewing: <span style={{ color: 'black' }}>{years[index]}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

