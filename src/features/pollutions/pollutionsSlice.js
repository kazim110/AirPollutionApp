import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pollutions: [],
  isLoading: false,
  error: null,
};

const getPollutions = createAsyncThunk('pollutions/getPollutions', async () => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/air_pollution?lat=34.543896&lon=69.160652&appid=0a0fc9fcd3835f375efef8b8c550c042');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const pollutionsSlice = createSlice({
  name: 'pollutions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPollutions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPollutions.fulfilled, (state, action) => {
        state.pollutions = action.payload;
        state.isLoading = false;
      })
      .addCase(getPollutions.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export { getPollutions };
export default pollutionsSlice.reducer;
