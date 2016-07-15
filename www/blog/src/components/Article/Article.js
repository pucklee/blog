import React, { Component } from 'react'
import classes from './Article.scss'
import {IndexLink,Link} from 'react-router'
import { Row, Col } from 'antd';
import Sidebar from '../Sidebar';

// 变量/常量定义

class Article extends Component {
  constructor (props){
    super(props);
  }
  componentDidMount(){
    const {getData,location,data} = this.props

    // 获取并设置文章内容
    getData(location.query.article_id,setArticle)
    function setArticle(data){
      let a = document.querySelectorAll('.articleContent')[0]
      a.innerHTML = data.article_content
    }

    // 评论框
    var appid = 'cyste0NTP';
    var conf = 'prod_a1989e8d0aa59e94647de1350d6816ad';
    var width = window.innerWidth || document.documentElement.clientWidth;
    if (width < 960) {
      var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("id","changyan_mobile_js");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);c.appendChild(b)};loadJs("http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=cyste0NTP&conf=prod_a1989e8d0aa59e94647de1350d6816ad",function(){});
    } else {
      var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("http://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})});
    }
  }
  render (){
    return <div className={classes.article}>
      <Row>
        <Col md={24} lg={17}>
          <article className={classes.articleContent +' '+ 'articleContent'}>
          </article>
          <div className={classes.comment}>
            <div id="SOHUCS"></div>
          </div>
        </Col>
        <Col md={0} lg={7} className={classes.sidebar}>
          <Sidebar/>
        </Col>
      </Row>
    </div>
  }
}

export default Article
