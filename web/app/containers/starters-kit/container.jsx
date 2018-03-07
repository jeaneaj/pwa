/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
import SkeletonBlock from 'progressive-web-sdk/dist/components/skeleton-block'
import ProductTile from '../../components/product-tile'
import List from 'progressive-web-sdk/dist/components/list'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'

import template from '../../template'
import {getProductSearch} from './selectors'
import {initialize} from './actions'

const ResultList = ({products}) => (
    <List className="c--borderless">
        {products.map((product, idx) => (<ProductTile key={idx} {...product} title={product.productName} />))}
    </List>
)

const StartersKit = ({productSearch}) => (
    <div className="t-starters-kit">
        <div>
            { productSearch && productSearch.products && productSearch.products.length > 0 ?
                <ResultList products={productSearch.products} />
            :
                <SkeletonBlock height="50px" />
            }
        </div>
    </div>
)

ResultList.propTypes = {
    products: PropTypes.array
}

StartersKit.propTypes = {
    productSearch: PropTypes.object
}

StartersKit.initAction = initialize

const mapStateToProps = createPropsSelector({
    productSearch: getProductSearch
})

const mapDispatchToProps = {}

export default template(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(StartersKit)
)
