import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CountriesList from '../components/CountriesList'; // Double-check the path to your component

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  pollutions: {
    searchFilter: false,
  },
});

// Describe your test
describe('CountriesList component', () => {
  // Test rendering the component
  it('should render correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <CountriesList />
        </MemoryRouter>
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display a loading message when isLoading is true', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <CountriesList isLoading={true} />
        </MemoryRouter>
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display a list of countries when isLoading is false', () => {
    const countries = [
      { name: 'Country 1', population: 1000000 },
      { name: 'Country 2', population: 2000000 },
    ];

    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <CountriesList isLoading={false} countries={countries} />
        </MemoryRouter>
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Test if the component correctly filters countries based on search filter
  it('should filter countries based on search filter', () => {
    const countries = [
      { name: 'Country 1', population: 1000000 },
      { name: 'Country 2', population: 2000000 },
    ];

    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <CountriesList isLoading={false} countries={countries} searchFilter="Country 1" />
        </MemoryRouter>
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
