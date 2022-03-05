import {createSlice} from '@reduxjs/toolkit';

// Slice
const expenses = createSlice({
  name: 'expenses',
  initialState: {
    value: null,
  },
  reducers: {
    valueSuccess: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default expenses.reducer;

// Action
const {valueSuccess} = expenses.actions;
export const setValue = value => async dispatch => {
  try {
    dispatch(valueSuccess(value));
  } catch (e) {
    return console.error(e.message);
  }
};
