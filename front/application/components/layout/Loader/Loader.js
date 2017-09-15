import React from 'react'
import bemClassName from 'bem-classname'

import './Loader.less'

const bem = bemClassName.bind(null, 'loader')

const Loader = (props) => {
  return (
    <div className={bem('container')}>
      <div className={bem()}>
        <span className={bem('dot', ['first'])} />
        <span className={bem('dot', ['second'])} />
        <span className={bem('dot', ['third'])} />
      </div>
    </div>
  )
}

Loader.propTypes = {}

export default Loader
