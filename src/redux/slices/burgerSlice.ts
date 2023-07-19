import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBurgerState {
  isBurgerOpen: boolean
}

const initialBurgerState: IBurgerState = {
  isBurgerOpen: false
}

export const burgerSlice = createSlice({
  name: 'burgerSlice',
  initialState: initialBurgerState,
  reducers: {
    setIsBurgerOpen: (state: IBurgerState, action: PayloadAction<boolean>) => {
      state.isBurgerOpen = action.payload
    }
  }
})

export const {
  setIsBurgerOpen,
} = burgerSlice.actions

export default burgerSlice.reducer
