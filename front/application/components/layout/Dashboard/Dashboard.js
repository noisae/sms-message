import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './Dashboard.less'

const bem = bemClassName.bind(null, 'dashboard')

const Dashboard = ({ title, children, tabs }) => {
  return (
    <main className={bem('main')}>
      <header className={bem('header')}>
        <h1 className={bem('title')}>{title}</h1>
        <div className={bem('tabs')}>
          {tabs}
        </div>
      </header>
      <content className={bem('content')}>{children}</content>
    </main>
  )
}

Dashboard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  tabs: PropTypes.element
}

export default Dashboard
