import { createSlice } from '@reduxjs/toolkit';
import * as operations from './operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// Map object notation inside extrareducers

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: authInitialState,
//   extraReducers: {
//     [operations.register.fulfilled]: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [operations.logIn.fulfilled]: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [operations.logOut.fulfilled]: state => {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [operations.refresh.pending]: state => {
//       state.isRefreshing = true;
//     },
//     [operations.refresh.fulfilled]: (state, action) => {
//       state.user = action.payload; // action.payload
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [operations.refresh.rejected](state) {
//       state.isRefreshing = false;
//       state.isLoggedIn = false;
//     },
//   },
// });

// Builder callback notation inside extrareducers

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers(builder) {
    builder
      .addCase(operations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(operations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(operations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(operations.refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(operations.refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(operations.refresh.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
