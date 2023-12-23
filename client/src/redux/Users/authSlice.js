import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import createAsyncThunkWithClient from '../../utils/createAsyncThunkWithClient';
import {SLICES, SLICES_STATUS} from '../../utils/constants/slices.constants';

export const login = createAsyncThunkWithClient(
  'auth/login',
  'post',
  '/users/login',
);

const initialState = {user: null, token: '', status: 'idle', error: null}

const authSlice = createSlice({
  name: SLICES.AUTH,
  initialState: {...initialState},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.user = null
        state.token = ''
        state.status = SLICES_STATUS.LOADING
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        // state = {...initialState}
        state.error = null
        state.status = SLICES_STATUS.SUCCEEDED
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null
        state.token = ''
        state.status = SLICES_STATUS.FAILED
        state.error = action?.payload?.message || action?.payload || action?.error || "Unknown Error"
      });
  },
});

export default authSlice.reducer;
