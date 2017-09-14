import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import Tab from 'components/layout/Tab'

import './Tabs.less'

const bem = bemClassName.bind(null, 'tabs')

const Tabs = ({ tabs }) => {
  return (<ul className={bem('list')}>{tabs}</ul>)
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.instanceOf(Tab)).isRequired
}

export default Tabs
