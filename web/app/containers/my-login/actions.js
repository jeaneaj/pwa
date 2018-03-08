/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import {createAction} from 'progressive-web-sdk/dist/utils/action-creation'
import {isRunningInAstro, jsRpcMethod} from '../../utils/astro-integration'
import {SubmissionError} from 'redux-form'
import IntegrationManager from 'mobify-integration-manager/dist/'
import {getLoginFormValues} from './selectors'
import {createPropsSelector} from 'reselect-immutable-helpers'
import {browserHistory} from 'progressive-web-sdk/dist/routing'
import isReactRoute from 'progressive-web-sdk/dist/routing/is-react-route'

export const setSigninLoaded = createAction('Set Sign In Page Loaded')
export const receiveSigninUIData = createAction('Receive Sign In Page Data')

// This is an example action which is used to trigger change in UI state
export const toggleUIState = createAction('Toggle MyLogin UI state')

export const initialize = (url, routeName) => (dispatch) => {
    dispatch(setSigninLoaded())
    dispatch(IntegrationManager.custom.getPageMetaData(routeName))
        .then((pageMeta) => dispatch(receiveSigninUIData(pageMeta)))
    return Promise.resolve()
}

const handleLoginSuccess = (href) => {
    if (isRunningInAstro) {
        jsRpcMethod('user:loggedIn', [])()
    }
    // This is only here because there is no account page in the PWA right now
    // Once we've added one we should user browserHistory to navigate to the account page after successfully logging in
    if (!href) {
        return
    }
    if (isReactRoute(href)) {
        browserHistory.push({pathname: href})
    } else {
        window.location.href = href
    }
}

export const submitLoginForm = () => (dispatch, getState) => {
    const selector = createPropsSelector({
        formValues: getLoginFormValues
    })
    const data = selector(getState())
    const {
        username,
        password
    } = data.formValues

    console.log('Dispatching login command now')
    return dispatch(IntegrationManager.account.login(username, password))
        .then(({href}) => {
            // Handle the successful form submission
            console.log('Should be going to this URL:', href)
            return handleLoginSuccess(href)
        })
        .catch((errors) => new SubmissionError(errors))
}
