import {createSlice} from '@reduxjs/toolkit';
import createAsyncThunkWithClient from '../../utils/createAsyncThunkWithClient';
import {SLICES, SLICES_STATUS} from '../../utils/constants/slices.constants';

export const createSuchiMember = createAsyncThunkWithClient(
  'suchiMember/create',
  'post',
  '/suchimembers',
);
export const getSuchiMember = createAsyncThunkWithClient(
  'suchiMember/get',
  'get',
  '/suchimembers/:id',
);
export const updateSuchiMember = createAsyncThunkWithClient(
  'suchiMember/update',
  'patch',
  '/suchiMembers/:id/update',
);

const suchiMemberSlice = createSlice({
  name: SLICES.SUCHI_MEMBER,
  initialState: {
    suchiMember: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSuchiMember.pending, state => {
        state.suchiMember = {}
        state.error = null
        state.status = SLICES_STATUS.LOADING
      })
      .addCase(getSuchiMember.fulfilled, (state, action) => {
        state.status = SLICES_STATUS.SUCCEEDED
        state.suchiMember = action.payload?.suchiMember
        state.error = null
      })
      .addCase(getSuchiMember.rejected, (state, action) => {
        state.status = SLICES_STATUS.FAILED;
        state.suchiMember = {}
        state.error = action?.payload?.message || action?.payload || action.error || "Unknown Error" 
      });
  },
});

export default suchiMemberSlice.reducer;
