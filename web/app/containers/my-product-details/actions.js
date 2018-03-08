/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import {createAction} from 'progressive-web-sdk/dist/utils/action-creation'
import IntegrationManager from 'mobify-integration-manager/dist/'

// This is an example action which is used to trigger change in UI state
export const toggleUIState = createAction('Toggle MyProductDetails UI state')

export const initialize = (url, routeName) => (dispatch) => {
    // Fetch information you need for the template here
    // For example, this can dispatch the relevant commands in Integration Manager
    console.log('[MyProductDetails] initializing.  You can safely remove this log message.')
    // Ensure that your action return a Promise
    return dispatch(IntegrationManager.products.initProductDetailsPage(url, routeName))
}
