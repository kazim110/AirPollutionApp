import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import EuropeCountries from '../../components/EuropeCountries';

const initialState = {
  pollutions: [],
  country: '',
  capital: '',
  isLoading: true,
  error: false,
};

const getPollutions = createAsyncThunk(
  'pollutions/getPollutions',
  async ({ lat, lon }) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=0a0fc9fcd3835f375efef8b8c550c042`);
      const data = await response.data;
      const { components } = data.list[0];
      const componentNames = {
        co: 'Carbon monoxide',
        no: 'Nitrogen monoxide',
        no2: 'Nitrogen dioxide',
        o3: 'Ozone',
        so2: 'Sulfur dioxide',
        pm2_5: 'Fine particulate matter',
        pm10: 'Coarse particulate matter',
        nh3: 'Ammonia',
      };
      const componentArray = Object.entries(components).map(([key, value]) => ({
        name: componentNames[key],
        value,
      }));
      const { country, capital } = EuropeCountries.find(
        (data) => data.latitude.toString() === lat && data.longitude.toString() === lon,
      );
      return [country, capital, componentArray];
    } catch (error) {
      return error.message;
    }
  },
);

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
        state.isLoading = false;
        const [country, capital, pollutionArray] = action.payload;
        state.country = country;
        state.capital = capital;
        state.pollutions = pollutionArray;
      })
      .addCase(getPollutions.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.pollutions = [];
        state.country = '';
        state.capital = '';
      });
  },
});

export { getPollutions };
export default pollutionsSlice.reducer;
