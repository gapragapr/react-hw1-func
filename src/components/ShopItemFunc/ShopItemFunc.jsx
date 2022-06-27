import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './ShopItemFunc.css'

import AddToCartButton from '../AddToCartButton/AddToCartButton';


export default function ShopItemFunc({item}){
    return (
        <div className="card-column card-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">
                <p>{item.descriptionFull}</p>
            </div>
            <div className="card-price">
                <p>{item.currency}{item.price}.00</p>
                <AddToCartButton />
            </div>
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.object
}