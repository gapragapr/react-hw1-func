import React from 'react'
import ReactDOM from 'react-dom'

import './CreateShopCard.css'

import ShopCardImg from '../ShopCardImg/ShopCardImg'
import ShopItemFunc from '../ShopItemFunc/ShopItemFunc'


export default function CreateShopCard(){
    const url = 'https://omabelle.kz/image/cache/catalog/products/fur_coats/mink/22.12.2020/img_1379-320x430.jpg';
    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    }

    return (
        <div className="shop-card">
            <ShopCardImg url={url}/>
            <ShopItemFunc item={item}/>
        </div>
    )
}