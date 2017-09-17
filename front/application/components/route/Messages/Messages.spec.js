import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Route } from 'react-router'
import Dashboard from 'application/components/layout/Dashboard'
import ListMessages from 'application/components/route/Messages/ListMessages'
import SendMessages from 'application/components/route/Messages/SendMessage'

import Messages, { messageTabList } from './Messages'

describe('Messages Component', () => {
  describe('Renders', () => {
    let component

    beforeEach(() => {
      component = shallow(<Messages />)
    })

    it('Dashboard', () => {
      expect(component).to.have.descendants(Dashboard)
      expect(component.find(Dashboard)).to.have.prop('title', 'Messages')
      expect(component.find(Dashboard)).to.have.prop('tabs', messageTabList)
    })

    it('Route', () => {
      expect(component.find(Dashboard).find(Route)).to.have.length(2)
      expect(component.find(Dashboard).find(Route).at(0)).to.have.prop('path', '/messages')
      expect(component.find(Dashboard).find(Route).at(0)).to.have.prop('component', ListMessages)
      expect(component.find(Dashboard).find(Route).at(1)).to.have.prop('path', '/messages/send')
      expect(component.find(Dashboard).find(Route).at(1)).to.have.prop('component', SendMessages)
    })
  })
})
