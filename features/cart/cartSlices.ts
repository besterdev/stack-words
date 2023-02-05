import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState: any[] = []

export const cartSlices = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let updatedCart: any[]
      const foundItem = _.find(state, (item) => item.id === action.payload.id)

      if (!foundItem) {
        state.push(action.payload)
      } else {
        return (updatedCart = _.map(state, (item) => ({ ...item, quantity: item.id === foundItem.id ? item.quantity + 1 : item.quantity })))
      }
    },
    deleteCart: (state, action) => _.filter(state, (item) => item.id !== action.payload)
  }
})

export const { addToCart, deleteCart } = cartSlices.actions

export default cartSlices.reducer
