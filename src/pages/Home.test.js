import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home';

Enzyme.configure({adapter: new Adapter()})


describe ('Home renders content', () => {
    it('displays content', ()=> {

    const HomeWrapper = shallow(<Home />)
    expect(HomeWrapper.find('h3').length)
    .toEqual(1)
    })
  })