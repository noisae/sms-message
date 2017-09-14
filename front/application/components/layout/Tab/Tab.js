import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import bemClassName from 'bem-classname'
import './Tab.less'

const bem = bemClassName.bind(null, 'tab')

class Tabs extends React.Component {

  render() {
    const { title, action } = this.props

    return (
      <li className={bem('item')}>
        <Link className={bem('link')} to={action} title={title}>{title}</Link>
      </li>
    )
  }
}

Tabs.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  key: PropTypes.string
}

export default Tabs
