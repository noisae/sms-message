import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import Tab from 'components/layout/Tab'

import './Tabs.less'

const bem = bemClassName.bind(null, 'tabs')

class Tabs extends React.Component{

  render() {
    const { tabs } = this.props
    return (<ul className={bem('list')}>{tabs}</ul>)
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Tabs
