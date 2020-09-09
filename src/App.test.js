import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

// toBe tai toEqual
//eli expect = olettaa, toequal = tulos. vähän niinkuin 2+2 =4.

test('renders learn react link', () => {
 const wrap = shallow(<App></App>);
 expect(false).toEqual(true)
});


test('renders learn react link', () => {
  const wrap = shallow(<App></App>);
  console.log(wrap.debug())
 });