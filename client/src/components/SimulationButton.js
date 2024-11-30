import React, { useState, useEffect, useRef } from 'react';
import styles from '../components/simulationbutton.module.css';

const SimulationButton = ({onChange, n}) => {
    const [inSimulation, setInSimulation] = useState(false); /* this means simulation started or not */
    const [isPaused, setIsPaused] = useState(true);
    const inSimulationRef = useRef(inSimulation);
    const isPausedRef = useRef(isPaused);
    
    const toggleSimulation = () => {
        // setInSimulation(!inSimulation);
        setInSimulation((prev) => {
            inSimulationRef.current = !prev;
            return !prev;
        });
    };

    const togglePlayPause = () => {
        // setIsPaused(!isPaused);
        setIsPaused((prev) => {
            isPausedRef.current = !prev;
            return !prev;
        });
    };

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const runAnimation = async () => {
        let currentIndex = 0;

        while (currentIndex < n) {
            onChange(currentIndex);
            currentIndex = (currentIndex + 1) % n; // Wrap around using mod n
            await delay(6000); 
            console.log(inSimulationRef.current)
            console.log(isPausedRef.current)
            if (inSimulationRef.current && isPausedRef.current && currentIndex != 0){
                break;
            }
        }
    };

    const handleClick = () => {
        if (!inSimulationRef.current && isPausedRef.current) { /* if it's false, then that means it's changing to true. start sim */
            // Start simulation
            toggleSimulation();
            togglePlayPause();
            runAnimation(); 
        } else if (inSimulationRef.current && !isPausedRef.current) { /* change to pause */
            togglePlayPause();
        } else if (inSimulationRef.current && isPausedRef.current) { /* change to play */
            togglePlayPause();
            runAnimation(); 
        } else {
            toggleSimulation();
            onChange(0); 
        }
    };

    return (
    <button
      className={`${styles['sim-button']} ${isPausedRef.current ? styles.play : styles.pause}`}
      onClick={handleClick}
    >
        <span className={styles['button-text']}>
            {isPausedRef.current ? 'Press to start simulation' : 'Press to pause simulation'}
        </span>
    </button>

);
};

export default SimulationButton;
