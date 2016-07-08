import React, { Component } from 'react'
import classes from './Sidebar.scss'
import {IndexLink,Link} from 'react-router'

class Sidebar extends Component {
  constructor (props){
    super(props);
  }
  render (){
    return <aside className={classes.sidebar}>
      sidebar
    </aside>
  }
}

export default Sidebar
