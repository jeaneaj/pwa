/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import {createAction} from 'progressive-web-sdk/dist/utils/action-creation'
import IntegrationManager from 'mobify-integration-manager/dist/'
import urlMapper from '../../config/url-mapper'

export const updateUIState = createAction('Update product list page UI state')

export const initialize = (url) => (dispatch) => {
    const searchParams = {
        ...urlMapper.parseSearchUrl(url),
        start: 0,
        count: 10
    }

    // Update the UI information base on our findings in the url.
    dispatch(updateUIState(searchParams))

    // Finally call the product search, let the reducer and selectors do the
    // rest of the work.
    return dispatch(IntegrationManager.productSearch.searchProducts(searchParams, {url}))
}
