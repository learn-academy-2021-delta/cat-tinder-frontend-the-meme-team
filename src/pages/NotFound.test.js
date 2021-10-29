import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound';

Enzyme.configure({adapter: new Adapter()})


describe ('NotFound renders content', () => {
    it('displays content', ()=> {

    const NotFoundWrapper = shallow(<NotFound />)
    expect(NotFoundWrapper.find('h3').length)
    .toEqual(1)
    })
  })