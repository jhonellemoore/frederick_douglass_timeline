// Timeline.js

import React, { useEffect, useRef, useState } from "react";
import styles from '../components/home.module.css';
import $ from 'jquery'; 

const Home = ({timelineInfo}) => {
    

    return (
        <div className={styles['timeline-container']}>
            <div className={styles['timeline-header']}>
                <h2 className={styles['timeline-header__title']}>Frederick Douglass</h2>
                <h3 className={styles['timeline-header__subtitle']}>Childhood Timeline</h3>
            </div>
            <div className={styles['timeline']}>
                <div className={styles['timeline-item']}>
                    <div className={styles['timeline__content']}>
                        <img className={styles['timeline__img']} src="https://i0.wp.com/frederickdouglassbirthplace.org/wp-content/uploads/2018/01/childhood.png?fit=640%2C518&ssl=1" alt="Frederick Douglass Childhood" />
                        <h2 className={styles['timeline__content-title']}>1818</h2>
                        <p className={styles['timeline__content-desc']}>
                            Frederick Augustus Washington Bailey, who would later become known as Frederick Douglass, was born into slavery in February 1818...
                        </p>
                    </div>
                </div>

                <div className={styles['timeline-item']}>
                    <div className={styles['timeline__content']}>
                        <img className={styles['timeline__img']} src="https://lloydsplantation.weebly.com/uploads/4/6/8/5/46853403/5888788_orig.jpg" alt="Lloyd Plantation" />
                        <h2 className={styles['timeline__content-title']}>1824</h2>
                        <p className={styles['timeline__content-desc']}>
                            At around six years old, Frederick was sent to live on the Lloyd plantation...
                        </p>
                    </div>
                </div>

                <div className={styles['timeline-item']}>
                    <div className={styles['timeline__content']}>
                        <img className={styles['timeline__img']} src="https://www.americanheritage.com/sites/default/files/inline-images/download_0.jpg" alt="Reading" />
                        <h2 className={styles['timeline__content-title']}>1826</h2>
                        <p className={styles['timeline__content-desc']}>
                            At around eight years old, Frederick Douglass was sent to Baltimore to live with Hugh Auld...
                        </p>
                    </div>
                </div>

                <div className={styles['timeline-item']}>
                    <div className={styles['timeline__content']}>
                        <img className={styles['timeline__img']} src="https://i0.wp.com/lastbesthopeofearth.com/wp-content/uploads/2016/04/natturner.jpg?resize=660%2C466&ssl=1" alt="Reading" />
                        <h2 className={styles['timeline__content-title']}>1831</h2>
                        <p className={styles['timeline__content-desc']}>
                            During his time in Baltimore, Frederick Douglass becomes increasingly aware of the social and political tensions...
                        </p>
                    </div>
                </div>

                <div className={styles['timeline-item']}>
                    <div className={styles['timeline__content']}>
                        <img className={styles['timeline__img']} src="https://image.pbs.org/video-assets/EPN1rtp-asset-mezzanine-16x9-NCgaiwR.jpg" alt="Reading" />
                        <h2 className={styles['timeline__content-title']}>1833</h2>
                        <p className={styles['timeline__content-desc']}>
                            In 1833, Frederick Douglass was abruptly torn from his relatively freer life in Baltimore...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
