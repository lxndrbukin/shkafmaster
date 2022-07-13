import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { supportedLanguages } from '../assets/Localization/supportedLanguages';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
// import Delivery from '../Delivery/Delivery';
import MiniProfile from './MiniProfile';
import headerLocalization from '../assets/Localization/headerLocalization.json';
import { Button } from '../assets/Button/Button';

const Header = ({ fetchUser, currentUser, changeLanguage, language }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser();
    setUser(currentUser);
  }, [user]);

  // const [barHeight, setHeight] = useState(0);
  // const openSteps = () => {
  //   barHeight === 0 ? setHeight('242px') : setHeight(0);
  // };

  const showLinks = () => {
    return (
      <div className='header-links'>
        {headerLocalization.linksList.map((link, idx) => {
          return (
            <NavLink key={idx} to={link.pathname}>
              <span>{link.name[language]}</span>
            </NavLink>
          );
        })}
      </div>
    );
  };

  const showAuthButtons = () => {
    if (currentUser && currentUser !== 'Logged Out') {
      return <MiniProfile />;
    }
    return (
      <Button
        name={headerLocalization.authButton.name[language]}
        url={headerLocalization.authButton.pathname}
      />
    );
  };

  const showLanguages = () => {
    const language = localStorage.getItem('language');
    return (
      <select
        className='header_languages-dropdown'
        onChange={(e) => {
          localStorage.setItem('language', e.target.value.toLowerCase());
          changeLanguage(localStorage.getItem('language'));
        }}
      >
        {supportedLanguages.map((supportedLang, idx) => {
          const { langShort } = supportedLang;
          return (
            <option
              key={idx}
              selected={language === langShort.toLowerCase() ? true : ''}
              // hidden={ langShort === 'EN' ? true : '' }
            >
              {langShort}
            </option>
          );
        })}
      </select>
    );
  };

  return (
    <div className='header'>
      <div className='header-bar'>
        <NavLink to='/' className='header-logo'>
          <div className='header-logo_main'>
            <div className='header-logo_main-text'>
              <span>SHKAF</span>
              <span>MASTER</span>
            </div>
          </div>
        </NavLink>
        <div className='header-menu'>{showLinks()}</div>
        <div className='header-menu_btns'>
          <Button
            name={headerLocalization.orderButton.name[language]}
            url={headerLocalization.orderButton.pathname}
          />
          {showAuthButtons()}
          {showLanguages()}
        </div>
      </div>
      {/* <div className='header-lower-bar'>
        <Delivery openSteps={openSteps} height={barHeight} />
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { fetchUser })(Header);
