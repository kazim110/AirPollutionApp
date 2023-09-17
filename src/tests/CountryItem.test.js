import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CountryItem from '../components/CountryItem'; // Double-check the path to your component

// Describe your test
describe('CountryItem component', () => {
  // Test rendering the component with correct data
  it('should render correctly with correct data', () => {
    const component = renderer.create(
      <MemoryRouter>
        <CountryItem
          country={{
            latitude: 46.9479,
            longitude: 7.4474,
            image:
              'https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/ch/vector.svg',
            country: 'Switzerland',
            capital: 'Bern',
          }}
        />
      </MemoryRouter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
