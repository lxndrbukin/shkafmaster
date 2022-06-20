import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import history from '../history';
// import { lang } from './assets/Localization/language';
// import { connect } from 'react-redux';
import AuthPage from './Pages/AuthPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainPage from './Pages/MainPage';
import OrdersPage from './Orders/OrdersPage';
import OrderForm from './Forms/OrderForm';
import OfferForm from './Forms/OfferForm';
import Offers from './Offers/Offers';
import NewItem from './Forms/NewItem';

class App extends React.Component {
  state = {
    language: localStorage.getItem('language')
      ? localStorage.getItem('language')
      : 'ro',
  };

  changeLanguage = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className='component-wrapper'>
        <Router history={history}>
          <Header
            language={this.state.language}
            changeLanguage={this.changeLanguage}
          />
          <div className='container'>
            <Routes>
              <Route
                path='/'
                element={<MainPage language={this.state.language} />}
              />
              <Route
                path='/login'
                exact
                element={<AuthPage language={this.state.language} />}
              />
              <Route
                path='/order'
                element={<OrderForm language={this.state.language} />}
              />
              <Route path='/orders' element={<OrdersPage />} />
              <Route
                path='/new-item'
                element={<NewItem language={this.state.language} />}
              />
              <Route
                path='/new-offer'
                element={<OfferForm language={this.state.language} />}
              />
              {/* <Route
                path='/offers'
                element={<Offers language={this.state.language} />}
              /> */}
            </Routes>
          </div>
          <Footer language={this.state.language} />
        </Router>
      </div>
    );
  }
}

export default App;
