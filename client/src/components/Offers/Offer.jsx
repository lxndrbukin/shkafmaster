import React from 'react';
import { NavLink } from 'react-router-dom';

const Offer = ({ name, text, reduce, imgs, path }) => {
    return (
            <div className="offer">
                <NavLink to={path}>
                    <div 
                        style={{backgroundImage: `url(${imgs[0]})`}} 
                        className="offer-header"
                    >
                        <div className="offer-name">
                            {name.ru}
                        </div>
                        <div className="offer-reduce">
                            <span>
                                {reduce}
                            </span>
                        </div>
                    </div>
                    {/* <div className="offer-text">
                        {text.ru}
                    </div> */}
                </NavLink>
            </div>
    )
}

export default Offer;