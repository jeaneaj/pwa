/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'

import template from '../../template'
import {getProductTitle, getProductAvailability, getProductPrice, getProductDescription} from 'progressive-web-sdk/dist/store/products/selectors'
import {initialize, handleAddToCart} from './actions'
import Button from 'progressive-web-sdk/dist/components/button'

const MyProductDetails = ({isAvailable, description, price, title, onAddToCart}) => (
    <div className="t-my-product-details">
        <h1 className="t-my-product-details__title">{title}</h1>
        <div>Available: {isAvailable ? 'Yes' : 'No'}</div>
        <div>Price: {price}</div>
        <p>{description}</p>
        <Button className="pw--primary" onClick={onAddToCart} data-analytics-name="myAddToCart">Add to Cart</Button>
    </div>
)

MyProductDetails.propTypes = {
    description: PropTypes.string,
    isAvailable: PropTypes.bool,
    price: PropTypes.string,
    title: PropTypes.string,
    onAddToCart: PropTypes.func
}

MyProductDetails.initAction = initialize

const mapStateToProps = createPropsSelector({
    title: getProductTitle,
    isAvailable: getProductAvailability,
    description: getProductDescription,
    price: getProductPrice,
})

const mapDispatchToProps = {
    onAddToCart: handleAddToCart
}

export default template(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MyProductDetails)
)
