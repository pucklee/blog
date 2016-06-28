import React, { Component } from 'react'
import classes from './Home.scss'
import {IndexLink,Link} from 'react-router'

class Home extends Component {
  constructor (props){
    super(props);
  }
  render (){
    return <div className={classes.home}>
      home441
    </div>
  }
}

export default Home
