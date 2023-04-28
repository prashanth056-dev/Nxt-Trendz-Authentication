import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Products = props => {
  const token = Cookies.get('jwt_token')
  const {history} = props

  if (token === undefined) {
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-img"
        />
      </div>
    </>
  )
}

export default withRouter(Products)
