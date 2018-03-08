/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable no-unused-vars */

import {productDetailsParser, productDetailsUIParser} from './parsers'
import {fetchPageData} from '../app/'

import {
    receiveProductDetailsProductData,
    receiveProductDetailsUIData
} from 'mobify-integration-manager/dist/integration-manager/api/products/results'
import {receiveCurrentProductId} from 'mobify-integration-manager/dist/integration-manager/results'
import {receiveFormInfo} from '../actions'

export const initProductDetailsPage = (url, routeName) => (dispatch) => {
    console.log('[Stub Connector] Called initProductDetailsPage stub with arguments:', url, routeName)

    return dispatch(fetchPageData(url))
    .then((res) => {
        const [$, $response] = res

        const productDetailsData = {
            ...productDetailsParser($, $response),
            href: url,
            variationCategories: [],
            variants: []
        }

        const {id} = productDetailsData

        dispatch(receiveCurrentProductId(id))
        dispatch(receiveProductDetailsProductData({[id]: productDetailsData}))
        dispatch(receiveProductDetailsUIData({[id]: productDetailsUIParser($, $response)}))
    })
    .catch((error) => { console.info(error.message) })
}

export const getProductVariantData = (variationSelections, variants, categoryIds) => (dispatch) => {
    console.log('[Stub Connector] Called getProductVariantData stub with arguments:', variationSelections, variants, categoryIds)
    return Promise.resolve()
}

export const addItemToWishlist = (productId, productURL) => (dispatch) => {
    console.log('[Stub Connector] Called addItemToWishlist stub with arguments:', productId, productURL)
    return Promise.resolve()
}
