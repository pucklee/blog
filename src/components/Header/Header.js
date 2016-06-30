import React, { Component } from 'react'
import classes from './Header.scss'
import { IndexLink, Link } from 'react-router'
import { Input, Icon, } from 'antd'

class Header extends Component {
  constructor (props){
    super(props);

    // 屏幕宽度
    // window.onresize=function(){
    //   console.log(1)
    // }
  }
  render (){
    return <div className={classes.header +' '+'header'}>
      <div className={classes.logo}>
        <img src="logo.png"/>
      </div>
      <ul className={classes.nav}>
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
      <div className={classes.search}>
        <Input size="large" placeholder="搜索哦" />
        <div>
            <Icon type="search" />
        </div>
      </div>
        {
          // <IndexLink activeClassName={classes.activeRoute}>
          //   <div className={classes.logo}>
            // <img src="logo.png"/>
          //   </div>
          // </IndexLink>
          // <ul className={classes.nav}>
          //   <Link activeClassName={classes.activeRoute}>
          //     <li>
          //       主页
          //     </li>
          //   </Link>
          //   <Link activeClassName={classes.activeRoute}>
          //     <li>
          //       周刊
          //     </li>
          //   </Link>
          //   <Link activeClassName={classes.activeRoute}>
          //     <li>
          //       关于
          //     </li>
          //   </Link>
          // </ul>
        }
    </div>
  }
}

export default Header

// <IndexLink to='/' activeClassName={classes.activeRoute}>
//   Home
// </IndexLink>
// {' · '}
// <Link to='/counter' activeClassName={classes.activeRoute}>
//   Counter
// </Link>
