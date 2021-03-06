/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2018 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

import React from 'react'
import {canonicalURL} from '../../../utils'

// Components
import Link from 'mobify-amp-sdk/dist/components/link'

const footerLinks = [
    {text: 'Privacy and Cookie Policy', href: '/privacy-policy-cookie-restriction-mode/'},
    {text: 'Search Terms', href: '/search/term/popular/'},
    {text: 'Contact Us', href: '/contact/'},
    {text: 'Orders and Returns', href: '/sales/guest/form/'},
    {text: 'Advanced Search', href: '/catalogsearch/advanced'}
]

const FooterNavigation = () => {
    return (
        <div className="t-footer__navigation u-padding-lg u-text-align-center">
            {footerLinks.map(({text, href}, index) => (
                <Link className="t-footer__navigation-link" href={canonicalURL(href)} key={index}>
                    {text}
                </Link>
            ))}
        </div>
    )
}

export default FooterNavigation
