import React, { useState } from 'react';
import styles from '../components/sidebar.module.css';

const Sidebar = ({timelineInfo}) => {
    return (
        <div className={styles['sidebar-container']}>
            <div className={styles['text-overlay']}>
                {timelineInfo && (
                    <>
                    <h2 style={{ color: '#8B5E3C', fontFamily: 'Georgia, serif' }}>
                        {timelineInfo.headline}
                    </h2>
                    <p>{timelineInfo.text}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;