/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import {handleActions} from 'redux-actions'
import Immutable from 'immutable'
import {updateUIState} from './actions'

const initialState = Immutable.Map({
    count: 4
})

export default handleActions({
    [updateUIState]: (state, {payload}) => {
        return initialState.merge(payload)
    }
}, initialState)
