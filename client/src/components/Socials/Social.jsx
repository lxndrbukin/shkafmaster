import React from 'react';

const Social = ({ name, link, icon }) => {
    return (
        <a target="_blank" href={link} className={`social ${name.toLowerCase()}`}>
            <i className={`fab ${icon}`} />
            <div className="social-name">
                {name}
            </div>
        </a>
    )
}

export default Social;