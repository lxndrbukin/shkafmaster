import React, { useState } from 'react';
import './Header.scss';
import { supportedLanguages } from '../assets/Languages/supportedLanguages';
import Delivery from '../Delivery/Delivery';
import { NavLink } from 'react-router-dom';
import headerLocalization from '../assets/Languages/headerLocalization.json';
import { lang } from '../assets/Languages/language';
import { Button } from '../assets/Button/Button';

const Header = () => {
	const [barHeight, setHeight] = useState(0);
	const openSteps = () => {
		barHeight === 0 ? setHeight('242px') : setHeight(0);
	}

	const showLinks = () => {
		return (
			<div className="header-links">
				{
					headerLocalization.linksList.map((link, idx) => {
						return (
							<NavLink key={ idx } to={ link.pathname }>
								<span>{ link.name[lang] }</span>
							</NavLink>
						)
					})
				}
			</div>
		)
	}

	const showLanguages = () => {
		const language = localStorage.getItem('language');
		return (
			<select 
				className="header_languages-dropdown"
				onChange={(e) => {
					window.location.reload();
					localStorage.setItem('language', e.target.value.toLowerCase());
				}}
			>
				{
					supportedLanguages.map((supportedLang, idx) => {
						const { langShort } = supportedLang;
						return (
							<option 
								key={ idx }
								selected={ language === langShort.toLowerCase() ? true : '' }
								// hidden={ langShort === 'EN' ? true : '' }
							>
								{ langShort }
							</option>
						)
					})
				}
			</select>
		)
	}

	return (
		<div className="header">
			<div className="header-bar">
				<NavLink to="/" className="header-logo">
					<span className="header-logo_main">SHKAFMASTER</span>
					<div className="header-logo_secondary">
						<span>{ headerLocalization.logoText.firstLine[lang] }</span>
						<span>{ headerLocalization.logoText.secondLine[lang] }</span>
					</div>
				</NavLink>
				<div className="header-menu">
					{showLinks()}
				</div>
				<div className="header-menu_btns">
					<Button name={ headerLocalization.orderButton.name[lang] } url={ headerLocalization.orderButton.pathname } />
					<Button name={ headerLocalization.authButton.name[lang] } url={ headerLocalization.authButton.pathname } />
					{showLanguages()}
				</div>
			</div>
			<div className="header-lower-bar">
				<Delivery openSteps={ openSteps } height={ barHeight } />
			</div>
		</div>
	)
}

export default Header;