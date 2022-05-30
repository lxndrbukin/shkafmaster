import React from 'react';
import './Socials.scss';
import { socialList } from './socialList';
import Social from './Social';

class Socials extends React.Component {
    renderSocialList() {
        return socialList.map((social, idx) => {
            return <Social 
                        key={idx} 
                        name={social.name} 
                        link={social.link}
                        icon={social.icon} 
                    />
        })
    }

    render() {
        return (
            <div className="socials-list">
                {this.renderSocialList()}
            </div>
        )
    }
}

export default Socials;