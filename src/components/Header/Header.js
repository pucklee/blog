import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className={classes.header}>
    <div>
      logo
    </div>
    <ul>
      <li>
        主页
      </li>
      <li>
        周刊
      </li>
      <li>
        关于
      </li>
    </ul>
    <div>
    
    </div>
  </div>
)

export default Header

// <IndexLink to='/' activeClassName={classes.activeRoute}>
//   Home
// </IndexLink>
// {' · '}
// <Link to='/counter' activeClassName={classes.activeRoute}>
//   Counter
// </Link>
