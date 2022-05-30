import React from 'react';
import './Page.scss';
import Offers from '../Offers/Offers';
import Categories from '../Categories/Categories';

class MainPage extends React.Component {

    render() {
        return (
        <div className="page-wrapper">
            <div className="page">
                <Categories />
                <Offers />
            </div>
        </div>
        )
    }
}

export default MainPage;