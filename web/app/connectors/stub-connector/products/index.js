/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable no-unused-vars */

import {
    receiveProductDetailsProductData,
    receiveProductDetailsUIData
} from 'mobify-integration-manager/dist/integration-manager/api/products/results'
import {receiveCurrentProductId} from 'mobify-integration-manager/dist/integration-manager/results'
import {receiveFormInfo} from '../actions'

export const initProductDetailsPage = (url, routeName) => (dispatch) => {
    console.log('[Stub Connector] Called initProductDetailsPage stub with arguments:', url, routeName)

    const id = '1'

    const image = {
        src: '//via.placeholder.com/350x350',
        alt: 'My Product'
    }

    const exampleData = {
        [id]: {
            price: '123.00',
            available: true,
            href: url,
            thumbnail: image,
            title: 'My Product',
            images: [image, image],
            id: '1',
            description: 'This is my hard coded data.',
            pageMeta: {
                title: 'My Product',
                description: 'This is my hard coded data.',
                keywords: 'My Product'
            }
        }
    }

    const exampleUIData = {
        [id]: {
            breadcrumbs: [{
                href: '/',
                text: 'Home'
            }, {
                href: url,
                text: 'Product 1'
            }],
            itemQuantity: 1
        }
    }

    const exampleFormData = {
        [id]: {
            submitUrl: 'submit',
            method: 'POST',
            uenc: '',
            hiddenInputs: {}
        }
    }

    // For more information on the shape of the expected data, see ../../products/types
    dispatch(receiveCurrentProductId(id))
    dispatch(receiveProductDetailsProductData(exampleData))
    dispatch(receiveProductDetailsUIData(exampleUIData))
    dispatch(receiveFormInfo(exampleFormData))
    return Promise.resolve()
}

export const getProductVariantData = (variationSelections, variants, categoryIds) => (dispatch) => {
    console.log('[Stub Connector] Called getProductVariantData stub with arguments:', variationSelections, variants, categoryIds)
    return Promise.resolve()
}

export const addItemToWishlist = (productId, productURL) => (dispatch) => {
    console.log('[Stub Connector] Called addItemToWishlist stub with arguments:', productId, productURL)
    return Promise.resolve()
}
