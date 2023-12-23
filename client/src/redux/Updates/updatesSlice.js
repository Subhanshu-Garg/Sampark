import {createSlice} from '@reduxjs/toolkit';
import createAsyncThunkWithClient from '../../utils/createAsyncThunkWithClient';
import {SLICES, SLICES_STATUS} from '../../utils/constants/slices.constants';

export const getUpdates = createAsyncThunkWithClient(
  'updates/get',
  'get',
  '/updates',
);
export const createUpdate = createAsyncThunkWithClient(
  'update/create',
  'post',
  '/updates',
);

const updatesSlice = createSlice({
  name: SLICES.UPDATES,
  initialState: {
    updates: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUpdates.pending, state => {
        state.status = SLICES_STATUS.LOADING;
        state.error = null;
        state.updates = [];
      })
      .addCase(getUpdates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.updates = action.payload.updates;
        state.error = null ;
      })
      .addCase(getUpdates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action?.payload?.message || action?.payload || "Unknown Error" 
        state.updates = [];
      })
      .addCase(createUpdate.pending, state => {
        state.status = SLICES_STATUS.LOADING
        state.error = null
      })
      .addCase(createUpdate.fulfilled, (state, action) => {
        state.status = SLICES_STATUS.SUCCEEDED
        state.updates.push(action?.payload?.update)
        state.error = null
      })
      .addCase(createUpdate.rejected, (state, action) => {
        state.status = SLICES_STATUS.FAILED
        state.error = action?.payload?.message || action?.payload || "Unknown Error"
      })
  },
});

export default updatesSlice.reducer;
