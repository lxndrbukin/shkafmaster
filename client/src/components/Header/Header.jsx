import React, { useState } from 'react';
import './Header.scss';
import { supportedLanguages } from '../assets/supportedLanguages';
import Delivery from '../Delivery/Delivery';
import { NavLink } from 'react-router-dom';
import * as headerLocalization from './headerLocalization.json';
import { logoText, linksList, authButton, orderButton } from './headerLinks';
import { Button } from '../assets/Button/Button';

const Header = () => {
	const language = localStorage.getItem('language');
	const [barHeight, setHeight] = useState(0);
	const [lang, setLang] = useState(language ? language : 'ro');
	const openSteps = () => {
		barHeight === 0 ? setHeight('242px') : setHeight(0);
	}

	const showLinks = () => {
		return (
			<div className="header-links">
				{
					linksList.map((link, idx) => {
						return (
							<NavLink key={idx} to={link.path}>
								<span>{link.name[lang]}</span>
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
					setLang(localStorage.getItem('language'));
				}}
			>
				{supportedLanguages.map(supportedLang => {
					const { langShort } = supportedLang;
						if (langShort === 'EN') {
							return <option selected={language === langShort.toLowerCase() ? true : ''} hidden>{langShort}</option>
						} else {
							return <option selected={language === langShort.toLowerCase() ? true : ''}>{langShort}</option>
						}
				})}
			</select>
		)
	}

	return (
		<div className="header">
			<div className="header-bar">
				<NavLink to="/" className="header-logo">
					<span className="header-logo_main">SHKAFMASTER</span>
					<div className="header-logo_secondary">
						<span>{logoText.firstLine[lang]}</span>
						<span>{logoText.secondLine[lang]}</span>
					</div>
				</NavLink>
				<div className="header-menu">
					{showLinks()}
				</div>
				<div className="header-menu_btns">
					<Button name={orderButton.name[lang]} url="/order" />
					<Button name={authButton.name[lang]} url={authButton.path} />
					{showLanguages()}
				</div>
			</div>
			<div className="header-lower-bar">
				<Delivery openSteps={openSteps} height={barHeight} />
			</div>
		</div>
	)
}

export default Header;