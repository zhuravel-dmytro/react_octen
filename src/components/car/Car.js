import React from 'react';

import './Car.css'
const Car = ({ car}) => {
    const {id, model, price, year} = car;


    return (
        <div className={'wrap_block'}>
            <div> id: {id}</div>
            <div> model: {model}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
        </div>
    );
};

export default Car;