/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'
import {getUi, getProductSearches} from '../../store/selectors'

export const getStartersKit = createSelector(
    getUi,
    ({startersKit}) => startersKit
)

export const getTitle = createGetSelector(getStartersKit, 'title')

import Immutable from 'immutable'
import stringify from 'json-stable-stringify'

// Selectors for UI

export const getUIState = createSelector(
    getUi,
    ({startersKit}) => startersKit || Immutable.Map()
)

export const getUIStateKey = createSelector(
    getUIState,
    (uiState) => stringify(uiState.toJS())
)

// Selectors for Data

export const getCurrentCategoryId = createSelector(
    getUIState,
    (uiState) => uiState.getIn(['filters', 'cgid'], '')
)

export const getProductSearch = createSelector(
    getUIStateKey,
    getProductSearches,
    (uiStateKey, productSearches) => productSearches.get(uiStateKey)
)
