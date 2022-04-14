import React from 'react'
import Cookies from 'js-cookie'

const initialState = {
    cart: {
        cartItems: Cookies.get('cartItems')?
        JSON.parse(Cookies.get('cartItems')):[]
    }
}

const Store = () => {
  return (
    <div>
      
    </div>
  )
}

export default Store
