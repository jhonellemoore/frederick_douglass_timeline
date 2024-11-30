import React, { useState, useEffect } from 'react';
import styles from '../components/keyheader.module.css';

const items = [
    { label: 'Douglass\' biographical events', color: 'green' },
    { label: 'National legislations/acts', color: 'red' }, 
    { label: 'International treaties/events', color: 'blue' }, 
    { label: 'Revolts or rebellions', color: 'yellow' },  
];

const KeyHeader = ({}) => {
    return (
        <div className = {styles['header-container']}>
            {items.map((item, index) => (
                <div className={styles['key-item']} key={index}>
                    <div 
                        className={styles['key-square']} 
                        style={{ backgroundColor: item.color }} 
                    />
                    <span className={styles['key-label']}>{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default KeyHeader;