import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { p } from "framer-motion/client";

// Product type
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

// Slice state
interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    clearProducts: (state) => {
      state.items = [];
    },
  },
});

export const { setProducts, addProduct, removeProduct, clearProducts } =
  productsSlice.actions;

export default productsSlice.reducer;