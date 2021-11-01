import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MemeIndex from './MemeIndex';

Enzyme.configure({adapter: new Adapter()})


describe ('MemeIndex renders content', () => {
    it('displays content', ()=> {

    const MemeIndexWrapper = shallow(<MemeIndex />)
    expect(MemeIndexWrapper.find('h3').length)
    .toEqual(1)
    })
    it('displays a heading', () => {
      const memeIndex = shallow(<MemeIndex />)
      const indexHeading = memeIndex.find("h3")
      expect(indexHeading.text()).toEqual("I am the Meme Index")
    })
  })
