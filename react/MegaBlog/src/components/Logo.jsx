import React from 'react';
import logo from './Logo.jpg.jpg'; // Importing the image from the same folder

function Logo({ width = '100px', className = '', alt = 'Logo' }) {
    return (
        <div>
            <img src={logo} alt={alt} className={`${className}`} style={{ width }} />
        </div>
    );
}

export default Logo;
