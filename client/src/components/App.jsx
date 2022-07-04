import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import history from '../history';
import { connect } from 'react-redux';
import AuthPage from './Pages/AuthPage';
import ProfilePage from './Pages/ProfilePage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainPage from './Pages/MainPage';
import OrdersPage from './Pages/OrdersPage';
import OrderForm from './Forms/OrderForm';
import OfferForm from './Forms/OfferForm';
import OffersPage from './Pages/OffersPage';
import NewItem from './Forms/NewItem';

class App extends React.Component {
  state = {
    language: localStorage.getItem('language')
      ? localStorage.getItem('language')
      : 'ro',
  };

  showLoginPage() {
    if (this.props.currentUser && this.props.currentUser !== 'Logged Out') {
      return <Navigate to='/' />;
    } else {
      return <AuthPage language={this.state.language} />;
    }
  }

  showProfilePage() {
    if (this.props.currentUser && this.props.currentUser !== 'Logged Out') {
      return <ProfilePage />;
    } else {
      return <Navigate to='/' />;
    }
  }

  changeLanguage = (languageCode) => {
    this.setState({ language: languageCode });
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
              <Route path='/login' exact element={this.showLoginPage()} />
              <Route path='/profile' exact element={this.showProfilePage()} />
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
              <Route
                path='/offers'
                element={<OffersPage language={this.state.language} />}
              />
            </Routes>
          </div>
          <Footer language={this.state.language} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {})(App);
