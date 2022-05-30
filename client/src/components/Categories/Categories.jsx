import React from 'react';
import './Categories.scss';
import Category from './Category';

class Categories extends React.Component {
    render() {
        return (
            <div className="categories-wrapper block-wrapper">
                <div className="categories block-header">
                    Категории
                </div>
                <div className="categories">
                    <Category />
                </div>
            </div>
        )
    }
}

export default Categories;