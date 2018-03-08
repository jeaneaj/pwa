/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import {handleActions} from 'redux-actions'
import Immutable from 'immutable'
import {mergePayload} from 'progressive-web-sdk/dist/utils/reducer-utils'
import * as myProductDetailsActions from './actions'

const initialState = Immutable.Map()

export default handleActions({
    [myProductDetailsActions.toggleUIState]: mergePayload
}, initialState)
