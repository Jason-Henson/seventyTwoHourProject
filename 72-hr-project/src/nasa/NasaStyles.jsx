import React from 'react';

const NasaStyles = () => {
    const wrapper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        padding: '50px',
        color: '#C7C2B0',
        border: '1px solid black'
    };
    return (
        <div style={wrapper}>
            <h1 style={{color: 'black', fontWeight: 400}}>Test.</h1>
        </div>
    );
};

export default NasaStyles;