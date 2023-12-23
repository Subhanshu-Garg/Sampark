import {createSlice} from '@reduxjs/toolkit';
import createAsyncThunkWithClient from '../../utils/createAsyncThunkWithClient';
import {SLICES} from '../../utils/constants/slices.constants';

export const getSuchiMembers = createAsyncThunkWithClient(
  'suchiMembers/get',
  'get',
  '/suchiMembers',
);
export const createSuchiMembers = createAsyncThunkWithClient(
  'suchiMembers/create',
  'post',
  '/suchiMembers/many',
);

const suchiMembersSlice = createSlice({
  name: SLICES.SUCHI_MEMBERS,
  initialState: {
    suchiMembers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSuchiMembers.pending, state => {
        state.status = 'loading';
      })
      .addCase(getSuchiMembers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.suchiMembers = action.payload.suchiMembers;
      })
      .addCase(getSuchiMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action?.payload?.message || action?.payload || "Unknown Error" 
      })
  },
});

export default suchiMembersSlice.reducer;
