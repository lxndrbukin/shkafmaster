import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainPage from './Pages/MainPage';
import OrderPage from './Pages/OrderPage';
import NewItem from './Forms/NewItem';
import Socials from './Socials/Socials';

class App extends React.Component {
	render() {
		return (
			<div className="component-wrapper">
				<Router>
					<Header />
					<div className="container">
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/login" element={<AuthPage />} />
							<Route path="/order" element={<OrderPage />} />
							<Route path="/new-item" element={<NewItem />} />
						</Routes>
						{/* <Socials /> */}
					</div>
					<Footer />
				</Router>
			</div>
		)
	}
}

export default App;