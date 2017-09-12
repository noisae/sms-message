import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import bemClassName from 'bem-classname'
import './Tab.less'

const bem = bemClassName.bind(null, 'tab')

const Tabs = ({ title, action }) => {

  return (
    <li className={bem('item')}>
      <Link className={bem('link')} to={action} title={title}>{title}</Link>
    </li>
  )
}

Tabs.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
}

export default Tabs
