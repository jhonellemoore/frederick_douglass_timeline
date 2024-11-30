import React, { useState, useEffect } from 'react';
import styles from '../components/sidebar.module.css';

const Sidebar = ({events, fredInfo}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const shortText = fredInfo?.description?.length > 600
    ? fredInfo.description.substring(0, 600) + '...'
    : fredInfo?.description;
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles['sidebar-container']}>
            <div className={styles['text-overlay']}>
                {fredInfo && (
                    <>
                        <h2
                            style={{
                                color: '#7EC8D7',
                                fontFamily: 'Georgia, serif',
                                fontWeight: 'bold',
                                fontSize: '28px',
                                width: '100%',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {'Douglass\' Events'}
                        </h2>

                        {fredInfo.description ? (
                            <>
                                <h3
                                    style={{
                                        color: 'green',
                                        fontFamily: 'Georgia, serif',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {fredInfo.headline}
                                </h3>
                                <p>{isExpanded ? fredInfo.description : shortText}</p>
                                <button
                                    onClick={toggleText}
                                    style={{
                                        color: 'green',
                                        fontWeight: 'bold',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: 15,
                                        fontFamily: 'Georgia, serif',
                                    }}
                                >
                                    {isExpanded ? 'Read less' : 'Read more'}
                                </button>
                            </>
                        ) : (
                            <p
                                style={{
                                    fontFamily: 'Cantata One, serif',
                                    fontSize: 12,
                                    textAlign: 'center',
                                }}
                            >
                                No events to display.
                            </p>
                        )}
                    </>
                )}
            </div>

            <div className="events">
                <h2 style={{ color: '#7EC8D7', fontFamily: 'Cantata One, serif', fontSize: '25px', marginBottom: '20px', fontWeight: 'bold', whiteSpace: 'nowrap', }}>Nationwide Events</h2>
                {events && events.length > 0 ? (
                    <ul>
                    {events.map((event, index) => (
                        <div key={index} style = {{ 
                            fontFamily: 'Cantata One, serif', 
                            fontSize: 12,
                            padding: '15px',
                            cursor: 'pointer',
                            backgroundColor: '#fff',
                            border: '1px solid #ddd',
                            margin: '10px 0',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            width: '80%',
                            textAlign: 'center',
                                //     }}
                                //     // onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                                //     // onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        
                        
                        }}
                        >{event.event}</div>
                    ))}
                    </ul>
                    ) : (
                    <p style={{fontFamily: 'Cantata One, serif', 
                        fontSize: 12,
                        padding: '15px',
                        cursor: 'pointer',
                        backgroundColor: '#fff',
                        border: '1px solid #ddd',
                        margin: '10px 0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        width: '80%',
                        textAlign: 'center',}}>No events to display.</p>
                )}
                </div>
        </div>
    );
};

export default Sidebar;