import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './ShopCardImg.css'

export default function ShopCardImg({url}){
    return (
        <div className="card-column">
            <img src={url} alt="Shop item image" className="card-img" />
        </div>
    )
}

ShopCardImg.propTypes = {
    url: PropTypes.string
}