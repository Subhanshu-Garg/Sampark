import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from './apiClient.js';

const createAsyncThunkWithClient = (typePrefix, clientMethod, path) => {
  return createAsyncThunk(
    typePrefix,
    async ({requestData = {}, params = {}, headers = {}, query = {}} = {}, { rejectWithValue }) => {
      let finalPath = path;
      for(const param in params) {
        finalPath = finalPath.replace(`:${param}`, params[param]);
      }
      finalPath = finalPath + '?' + new URLSearchParams(query).toString()
      try {
        const response = await apiClient({
          url: finalPath,
          method: clientMethod,
          data: requestData,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          }
        })
        return response.data;
      } catch (err) {
        let errorDetail;
        if (err.response) {
          // Server responded with a status other than 200 range
          errorDetail = {
            name: err.response.data.name,
            message: err.response.data.message,
          };
        } else {
          // Something happened in setting up the request that triggered an Error
          errorDetail = err?.message || err;
        }
        return rejectWithValue(errorDetail);
      }
    },
  )
};

export default createAsyncThunkWithClient