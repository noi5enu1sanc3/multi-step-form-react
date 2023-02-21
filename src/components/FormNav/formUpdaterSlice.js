// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  data: {
    personal: {
      userName: '',
      email: '',
      phone: '',
    },
    billing: { plan: 'arcade', cost: 9, monthly: true },
    addOns: [],
    totalCost: 0,
  },
};

const formUpdater = createSlice({
  name: 'formUpdater',
  initialState,
  reducers: {
    goNext: (state) => { state.step += 1; },
    goBack: (state) => { state.step -= 1; },
    jumpToStep: (state, action) => { state.step = action.payload; },
    // setPersonal: (state, action) => { state.personal = action.payload; },
    // setBilling: (state, action) => { state.billing = action.payload; },
    // setAddons: (state, action) => { state.addOns = action.payload; },
    setData: (state, { payload }) => {
      state.data = {
        ...state.data,
        ...payload,
      };
    },
    calculateTotal: (state) => {
      const addOnsCost = state.data.addOns.reduce((acc, cur) => acc + cur.cost, 0);
      const totalMonthly = state.data.billing.cost + addOnsCost;
      state.data.totalCost = state.data.billing.monthly ? totalMonthly : totalMonthly * 12;
    },
  },
});

export const {
  goNext,
  goBack,
  jumpToStep,
  // setPersonal,
  // setBilling,
  // setAddons,
  setData,
  calculateTotal,
} = formUpdater.actions;

export default formUpdater.reducer;
