import React, { useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { convertYearString, timelineBCFormat } from '../util/constants';

const Timeline = ({ index, onChange, years, timelineInfo}) => {
  return (
    // <div className="timeline" style={{ position: 'relative', bottom: '0', width: '100%' }}>
      <div 
        className="timeline" 
        style={{ 
            position: 'absolute',
            bottom: '0',
            width: '100%', 
            padding: '20px', 
            boxSizing: 'border-box',
            overflowX: 'hidden' 
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        {timelineInfo && (
          <>
            <h2 style={{ color: '#8B5E3C', fontFamily: 'Georgia, serif' }}>{timelineInfo.headline}</h2>
            <p>{timelineInfo.text}</p>
            {timelineInfo.image && <img src={timelineInfo.image} alt={timelineInfo.headline} style={{ maxWidth: '100%', height: '100px' }} />}
          </>
        )}
      </div>
      <div
        style={{
            width: '96%',
            height: '100px', // Increased height for better visibility
            fontSize: '18px', // Adjusted font size
            fontFamily: 'Georgia, serif',
            padding: '0px',  // Added padding for more spacing around the timeline
            backgroundColor: '#F5E1DA', // Light brownish background
            borderRadius: '10px',
            border: '2px solid #8B5E3C', 
            margin: '0 auto', 
            boxSizing: 'border-box',
            paddingRight: '30px',  // Shift padding to the right
            paddingLeft: '0px',
        }}
        className="timeline-inner"
      >
        <HorizontalTimeline
          styles={{
            background: '#3C2F2F',
            foreground: '#D4A373',
            outline: '#2F2F2F',
            width: '0%',
          }}

          index={index}
          indexClick={(newIndex) => { // function receives new index when an index is clicked
            onChange(newIndex); 
          }}
          getLabel={(date) =>
            convertYearString(
              timelineBCFormat,
              date < 100 ? date : new Date(date, 0).getFullYear(),
            )
          }
          values={years} // Use the extended years array
          linePadding={100}
          isOpenEnding={false}
          isOpenBeginning={false}
          minEventPadding={10}
          maxEventPadding={10}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ color: '#8B5E3C', fontFamily: 'Georgia, serif' }}>
          Currently Viewing: <span style={{ color: '#3C2F2F' }}>{years[index]}</span>
        </h2>
      </div>
    </div>
  );
};

export default Timeline;

