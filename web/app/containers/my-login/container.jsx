/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'

import template from '../../template'
import {getTitle} from './selectors'
import {submitLoginForm, initialize} from './actions'

import isEmail from 'validator/lib/isEmail'
import {reduxForm, Field as ReduxFormField} from 'redux-form'
import Button from 'progressive-web-sdk/dist/components/button'
import Field from 'progressive-web-sdk/dist/components/field'
import FieldSet from 'progressive-web-sdk/dist/components/field-set'
import FieldRow from 'progressive-web-sdk/dist/components/field-row'
import PasswordInput from 'progressive-web-sdk/dist/components/password-input'
import {UI_NAME} from 'progressive-web-sdk/dist/analytics/data-objects/'

const validateLoginForm = (formValues) => {
    const errors = {}

    const {
        username,
        password
    } = formValues

    if (!username && !password) {
        errors._error = 'Please fill in the form'
    }
    if (!username) {
        errors.username = 'Email address is required'
    } else if (!isEmail(username)) {
        errors.username = 'Email address is invalid'
    }
    if (!password) {
        errors.password = 'Password is required'
    }
    return errors
}

const MyLogin = ({error, handleSubmit, submitForm, submitting}) => (
    <div className="t-my-login u-padding-md">
        <form data-analytics-name={UI_NAME.login} noValidate onSubmit={handleSubmit(submitForm)}>
            {error &&
                <div className="u-margin-bottom-md u-color-error">
                    {error}
                </div>
            }

            <FieldSet>
                <FieldRow>
                    <ReduxFormField
                        component={Field}
                        label="Email"
                        name="username"
                    >
                        <input type="email" data-analytics-name={UI_NAME.email} />
                    </ReduxFormField>
                </FieldRow>
                <FieldRow>
                    <ReduxFormField
                        component={Field}
                        label="Password"
                        name="password"
                    >
                        <PasswordInput isText buttonTextHide="Hide" buttonTextShow="Show" analyticsName={UI_NAME.password} />
                    </ReduxFormField>
                </FieldRow>
                <FieldRow>
                    <Button
                        className="pw--primary u-width-full"
                        type="submit"
                        disabled={submitting}
                        data-analytics-name={UI_NAME.login}
                    >
                        <span className="u-text-uppercase">Login</span>
                    </Button>
                </FieldRow>
            </FieldSet>
        </form>
    </div>
)

MyLogin.propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func,
    submitForm: PropTypes.func,
    submitting: PropTypes.bool,
    title: PropTypes.string,
}

const ReduxFormMyLogin = reduxForm({
    form: 'loginForm',
    validate: validateLoginForm
})(MyLogin)

MyLogin.initAction = initialize

const mapStateToProps = createPropsSelector({
    title: getTitle
})

const mapDispatchToProps = {
    submitForm: submitLoginForm
}

export default template(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ReduxFormMyLogin)
)
