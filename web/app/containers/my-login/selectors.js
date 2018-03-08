/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'
import {getUi, getForm} from '../../store/selectors'

export const getMyLogin = createSelector(
    getUi,
    ({myLogin}) => myLogin
)

export const getTitle = createGetSelector(getMyLogin, 'title')

export const getLoginForm = createSelector(
    getForm,
    ({loginForm}) => loginForm
)

export const getLoginFormValues = createSelector(
    getLoginForm,
    ({values}) => values
)
