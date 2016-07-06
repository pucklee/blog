'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
  	let article = this.model('article')
  	let user = this.model('user')
  	let article_content = this.model('article_content')
  	let article_tag = this.model('article_tag')

    // 获取param
    let data = this.post() || {};



    let test = await article.where({article_id : ["!=", null]})
  	console.log('==========>'+test)

    // let test = await article.field("name,title").select();
    




    // return this.success({
    //     article_type      :     0/1,            // 0为转载，1为原创
    //     tag_name          :     string,         // 标签名
    //     tag_id            :     num,            // 标签id
    //     article_title     :     string,         // 文章标题
    //     article_id        :     num,            // 文章id
    //     article_content   :     string,         // 文章内容
    //     author            :     string,         // 作者
    //     publish_time      :     data            // 发表时间 格式：2016年06月28日11:03:51
    // })
    return this.success({
      url : 1
    })
  }
}