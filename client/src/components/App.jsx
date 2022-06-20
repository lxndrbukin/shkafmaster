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
import NewItem from './Forms/NewItem';

class App extends React.Component {
  state = {
    language: '',
  };

  render() {
    return (
      <div className='component-wrapper'>
        <Router history={history}>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/login' exact element={<AuthPage />} />
              <Route path='/order' element={<OrderForm />} />
              <Route path='/orders' element={<OrdersPage />} />
              <Route path='/new-item' element={<NewItem />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
