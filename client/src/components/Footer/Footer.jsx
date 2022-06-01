import React from 'react';
import { NavLink } from 'react-router-dom';
import { socials } from './footerSocials';
import './Footer.scss';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="footer-wrapper">
			<div className="footer">
				<div className="footer-section">
					<div className="footer-links">
						<ul>
							<li><NavLink to="/offers">Предложения</NavLink></li>
							<li><NavLink to="/contacts">Контакты</NavLink></li>
							<li><NavLink to="/help">Помощь</NavLink></li>
						</ul>
					</div>
					<div className="footer-contacts">
						<div className="footer-contact-numbers">
							<span>+373 (69) 92-30-28</span>
							<span>+373 (60) 33-10-25</span>
						</div>
						<div className="footer-contact-socials">
							{socials.map((social, idx) => {
								return (
									<a 
										key={idx} 
										target="_blank" 
										rel='noreferrer'
										href={social.link}
									>
										<i 
											className={`fab fa-${social.name}`}
										>
										</i>
									</a>
								)
							})}
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					SHKAFMASTER &#169; {year}
				</div>
			</div>
		</div>
	)
}

export default Footer;