import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { convertYearString, timelineBCFormat } from '../util/constants';

const Timeline = ({ index, onChange, years }) => (
  <div className="timeline">
    <div
      style={{
        width: '100%',
        height: '100px',
        fontSize: '15px',
      }}
      className="timeline"
    >
      <HorizontalTimeline
        styles={{
          background: '#252525',
          foreground: '#64dfdf',
          outline: '#6930c3',
        }}
        index={index}
        indexClick={(newIndex) => {
          onChange(newIndex);
        }}
        getLabel={(date) =>
          convertYearString(
            timelineBCFormat,
            date < 100 ? date : new Date(date, 0).getFullYear(),
          )
        }
        values={years}
        linePadding={50}
        isOpenEnding={false}
        isOpenBeginning={false}
        minEventPadding={5}
        maxEventPadding={10}
      />
    </div>
  </div>
);

export default Timeline;
