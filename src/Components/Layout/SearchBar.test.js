import React from 'react'
import { shallow} from 'enzyme'
import SearchBar from './SearchBar'

test('SearchBar state updates upon input change', () => {
    const wrap = shallow(<SearchBar/>);
    expect(wrap.state()).toEqual({})

    wrap.find('input#search').simulate('change', {
        target: { 
            value: 'ditto',
            id: 'search'
        }
    })

    expect(wrap.state()).toEqual({ search: 'ditto'})
});