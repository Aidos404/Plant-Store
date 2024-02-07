import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
	name: 'cart',
	initialState: { list: [], total: 0 },
	reducers: {
		addToCart(state, action) {
			state.cart.push(action.payload)
		},
	},
})
const { actions, reducer } = cartSlice
export const { addToCart } = actions
export default reducer
