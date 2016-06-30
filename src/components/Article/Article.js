import React, { Component } from 'react'
import classes from './Article.scss'
import {IndexLink,Link} from 'react-router'
import { Row, Col } from 'antd';
import Sidebar from '../Sidebar';

// 变量/常量定义
let article = {
  article_type      :     1,
  tag_name          :     '前端技术',
  tag_id            :     1,
  article_title     :     '如何 10 倍提高你的 Webpack 构建效率',
  article_id        :     123,
  article_content   :     '<header class="article-header" style="color: rgb(0, 0, 0); font-family: \'lucida grande\', \'lucida sans unicode\', lucida, \'Helvetica Neue\', helvetica, \'Hiragino Sans GB\', \'Microsoft YaHei\', \'WenQuanYi Micro Hei\', sans-serif; font-size: 14px;"><h1 class="article-title" itemprop="name" style="margin: 0px 0px 10px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; font-size: 30px; vertical-align: baseline; letter-spacing: -1px; color: rgb(85, 85, 85); line-height: 1.3em; transition: color 0.2s;">无线端的弹幕实现方案</h1></header><p class="article-byline" style="margin: 0px 0px 10px; padding: 0px; border: 0px; outline: 0px; font-family: \'lucida grande\', \'lucida sans unicode\', lucida, \'Helvetica Neue\', helvetica, \'Hiragino Sans GB\', \'Microsoft YaHei\', \'WenQuanYi Micro Hei\', sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(0, 0, 0);"><span style="margin: 0px 10px 0px 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; display: inline-block;">作者: 拂铭</span>&nbsp;<span style="margin: 0px 10px 0px 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; display: inline-block;">发表于:&nbsp;<a href="http://taobaofed.org/blog/2016/05/13/barrage-in-mobile/" class="article-date" style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; text-decoration: none; color: rgb(102, 102, 102); line-height: 1em; text-shadow: rgb(255, 255, 255) 0px 1px;"><time datetime="2016-05-13T07:59:50.000Z" itemprop="datePublished">2016-05-13</time></a></span></p><div class="article-entry" itemprop="articleBody" style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-family: \'lucida grande\', \'lucida sans unicode\', lucida, \'Helvetica Neue\', helvetica, \'Hiragino Sans GB\', \'Microsoft YaHei\', \'WenQuanYi Micro Hei\', sans-serif; font-size: 18px; vertical-align: baseline; color: rgb(85, 85, 85); line-height: 1.6em;"><p style="margin: 1.6em 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><img src="http://img.alicdn.com/tfs/TB1zithJVXXXXabXVXXXXXXXXXX-900-500.jpg" alt="无线端的弹幕实现方案" style="margin: auto; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; max-width: 100%; height: auto; display: block;"></p><p style="margin: 1.6em 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;">前段时间做了游戏的相关业务，其中弹幕相关的内容自成一块。弹幕已经不只是最初的视频弹幕了，战火已经烧到了评论区，烧到了手机淘宝的首页搜索结果。作为一种近几年迅速燃起的内容呈现形式，有必要适时引入，对于休闲化、娱乐化的业务更是如此。那么，要做出一个较为完整的弹幕效果来，需要哪几个部分呢？尤其是，在集团内部，怎么快速地搭建起一个可用的弹幕框架来？本文分3块来阐述。</p><ol style="margin: 1.6em 0px; padding: 0px 0px 0px 20px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; list-style: square inside; line-height: 1.6em;"><li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><a href="http://taobaofed.org/blog/2016/05/13/barrage-in-mobile/#client_rendering_module" style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; color: rgb(98, 187, 195); text-decoration: none; word-break: break-all;">弹幕渲染层</a></li><li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><a href="http://taobaofed.org/blog/2016/05/13/barrage-in-mobile/#data_pipeline_module" style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; color: rgb(98, 187, 195); text-decoration: none; word-break: break-all;">弹幕数据通道</a></li><li style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline;"><a href="http://taobaofed.org/blog/2016/05/13/barrage-in-mobile/#server_business_module" style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; color: rgb(98, 187, 195); text-decoration: none; word-break: break-all;">弹幕服务逻辑</a></li></ol><h2 id="u5F39_u5E55_u6E32_u67D3_u5C42" style="margin: 1.3em 0px; padding: 0px; border: 0px; outline: 0px; font-style: inherit; font-family: inherit; vertical-align: baseline; line-height: 1.3em;"><a href="http://taobaofed.org/blog/2016/05/13/barrage-in-mobile/#u5F39_u5E55_u6E32_u67D3_u5C42" class="headerlink" title="弹幕渲染层" style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; vertical-align: baseline; color: rgb(98, 187, 195); text-decoration: none;"></a><br></h2></div>		',
  author            :     '小蜜蜂',
  publish_time      :     '2016年06月28日11:03:51'
}


class Article extends Component {
  constructor (props){
    super(props);
    let { setWth } = this.props

    // 获取屏幕宽度
    setWth(document.body.clientWidth)
    window.onresize = function(){
      setWth(document.body.clientWidth)
    }

  }
  componentDidMount(){
    // 文章填入
    let a = document.querySelectorAll('.articleContent')[0]
    a.innerHTML = article.article_content

    var appid = 'cyste0NTP';
    var conf = 'prod_a1989e8d0aa59e94647de1350d6816ad';
    var width = window.innerWidth || document.documentElement.clientWidth;
    if (width < 960) {
      // window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
      var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("id","changyan_mobile_js");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);c.appendChild(b)};loadJs("http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=cyste0NTP&conf=prod_a1989e8d0aa59e94647de1350d6816ad",function(){});
    } else {
      var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("http://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})});
    }
  }
  render (){
    let { wth } = this.props;
    console.log(1)
    return <div className={classes.article}>
      <Row>
        <Col span={ wth < 752 ? 24 : 17}>
          <article className={classes.articleContent +' '+ 'articleContent'}>
          </article>
          <div className={classes.comment}>
            <div id="SOHUCS"></div>
          </div>
        </Col>
        <Col span={ wth < 752 ? 0 : 7}>
          <Sidebar/>
        </Col>
      </Row>
    </div>
  }
}

export default Article
