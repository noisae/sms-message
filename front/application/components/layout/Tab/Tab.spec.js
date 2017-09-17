import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Tab from './Tab'

const props = {
  title: 'Tab Title',
  action: 'action'
}

describe('Tab Component', () => {

  describe('Renders', () => {
    let component

    beforeEach(() => {
      component = shallow(<Tab {...props} />)
    })

    it('item', () => {
      expect(component.find('.tab__item')).to.have.length(1)
    })

    it('Link with action', () => {
      expect(component.find(Link)).to.have.prop('to', props.action)
    })

    it('Link with title', () => {
      expect(component.find(Link)).to.have.prop('title', props.title)
    })

    it('children', () => {
      expect(component.find(Link)).to.have.prop('children', props.title)
    })
  })
})
