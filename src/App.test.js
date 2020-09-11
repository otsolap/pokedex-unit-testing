import React from 'react';
import App from './App';
// shallow renderöi app.js ja pyörittää sen terminaalissa.
import { shallow } from 'enzyme'

// toBe tai toEqual
//eli expect = olettaa, toequal = tulos. vähän niinkuin 2+2 =4.
// nyt tarkistamme App.js:n routeja, eli ihan perus React Routeja.
// routeja on 2, eli laita 1,3,4 niin saat errorin.
// toBe olisi hyvä tapa saada tietoon miten muunneltu data tulee olemaan.
// toHaveBeencalled on funktio API-call testeihin.

/*
test('The <App> has 2 route links in structure.', () => {
 const wrap = shallow(<App></App>);
 const container = wrap.find('.container')
 const routes = wrap.find('Route')
 expect(routes.length).toEqual(2)
 console.log(wrap.debug())
});
*/