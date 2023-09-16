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
});
