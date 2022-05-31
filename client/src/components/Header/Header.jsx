import React, { useState } from 'react';
import './Header.scss';
import Delivery from '../Delivery/Delivery';
import { NavLink } from 'react-router-dom';
import { logoText } from './logoText';
import { linksList } from './linksList';
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
					linksList.map((link, idx) => {
						return (
							<NavLink key={idx} to={link.path}>
								<span>{link.name.ru}</span>
							</NavLink>
						)
					})
				}
			</div>
	)
	}

	return (
		<div className="header">
			<div className="header-bar">
				<NavLink to="/" className="header-logo">
					<span className="header-logo_main">SHKAFMASTER</span>
					<div className="header-logo_secondary">
						<span>{logoText.firstLine.ru}</span>
						<span>{logoText.secondLine.ru}</span>
					</div>
				</NavLink>
				<div className="header-menu">
					{showLinks()}
					<div className="header-menu_btns">
						<Button name="Заявка" url="/order" />
						<Button name="Войти" url="/login" />
					</div>
				</div>
			</div>
			<div className="header-lower-bar">
				<Delivery openSteps={openSteps} height={barHeight} />
			</div>
		</div>
	)
}

export default Header;