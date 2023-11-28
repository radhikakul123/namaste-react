import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],
    },
    reducers:{
        // for add the Items in to the cart
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        // remove the items from cart

    removeItem:(state,action)=>{
        state.items.pop();
    },

    clearCart:(state, action) => {
        // state.items.length = 0;
        return { items: [] };
    },
},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;