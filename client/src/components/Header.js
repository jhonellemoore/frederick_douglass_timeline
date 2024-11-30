import React, { useState, useEffect } from 'react';
import styles from '../components/header.module.css';

const Header = ({}) => {
    return (
        <div className = {styles['header-container']}>
            <h2 style={{
                color: 'white',
                fontFamily: 'Georgia, serif',
                fontWeight: 'bold',
                fontSize: '28px',
                width: '100%',
                whiteSpace: 'nowrap',
            }}>Frederick Douglass' Childhood Timeline
            </h2>
        </div>
    );
};
export default Header;