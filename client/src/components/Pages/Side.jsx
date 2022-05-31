import React from 'react';
import { socials } from './socials';

const Side = () => {
	const socialNetworks = () => {
		return socials.map((social, idx) => {
			return (
				<div 
					key={idx} 
					className={`${social.toLocaleLowerCase()} social`}
				>
				<i className={`fa-brands fa-${social.toLocaleLowerCase()}`}></i>
					{social}
				</div>
			)
		})
	}

	return (
		<div className="page-side">
			<div className="page-social-networks">
				{socialNetworks()}
			</div>
		</div>
	)
}

export default Side;