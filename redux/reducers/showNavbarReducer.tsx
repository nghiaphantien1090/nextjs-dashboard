import { createAction, createReducer } from '@reduxjs/toolkit';

export const toogleAction = createAction('TOOGLE');
export const changeLargerXlSizeAction = createAction<boolean>('CHANGE_LARGER_XL_SIZE');

interface State {
  isShowNavbar: boolean;
  largerXlSize: boolean;
}

const initialState: State = {
  isShowNavbar: true,
  largerXlSize: false,
};

export const showNavbarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toogleAction, (state) => {
      state.isShowNavbar = !state.isShowNavbar;
    })
    .addCase(changeLargerXlSizeAction, (state, action) => {
      state.largerXlSize = action.payload;
    });
});
