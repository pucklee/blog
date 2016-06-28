import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import 'antd/dist/antd.css';

export const CoreLayout = ({ children }) => (
  <div className='container'>
    <Header />
    <div className={classes.mainContainer}>
      <div className={classes.centerContent}>
        {children}
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
