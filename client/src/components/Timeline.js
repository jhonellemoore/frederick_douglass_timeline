import React, { useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import styles from '../components/timeline.module.css';
import Sidebar from './Sidebar';
import TimelineMap from './TimelineMap';

const Timeline = ({ index, onChange, years, fredInfo, events}) => {
  return (
    <div>
      <TimelineMap fredInfo = {fredInfo} events = {events}/>
      <Sidebar fredInfo={fredInfo} events = {events} />
      <div className={styles['timeline-container']}>
        <div className={styles['timeline']}>
          <HorizontalTimeline
            styles={{
              background: '#fff',
              color: '#3C2F2F',
              outline: '#2F2F2F',
              width: '0%',
              display: 'flex',
              padding: '70px 0',
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
            // minEventPadding={30}
            // maxEventPadding={10}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2 style={{ color: '#8B5E3C', fontFamily: 'Georgia, serif' }}>
            Currently Viewing: <span style={{ color: '#3C2F2F' }}>{years[index]}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

