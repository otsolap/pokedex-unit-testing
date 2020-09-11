import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from './DetailPage';

test('<theDetailPage> should receive the API call', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve())
    let wrap = shallow(<DetailPage match ={{ params: { id: 25} }}/>)
   
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/25')
});