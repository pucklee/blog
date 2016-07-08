'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    // 定义表
  	let article_table = this.model('article')
  	let user_table = this.model('user')
  	let article_content_table = this.model('article_content')
  	let article_tag_table = this.model('article_tag')

    // 获取param
    let data = this.post() || {};

    // 查表
    let articleInfo = {
      article_type: null,
      tag_name: null,
      tag_id: null,
      article_title: null,
      article_id: null,
      article_content: null,
      author: null,
      publish_time: null,
    }

    let articleResault = await article_table.where({article_id : data.article_id}).select();
    if(articleResault.length <= 0){
      return this.success(articleInfo)
    }
    let contentResault = await article_content_table.where({article_id : data.article_id}).select();
    let tagResault = await article_tag_table.where({tag_id : articleResault[0].tag_id}).select();

    articleInfo.article_type = articleResault[0].article_type
    articleInfo.article_title = articleResault[0].article_title
    articleInfo.author = articleResault[0].author
    articleInfo.publish_time = articleResault[0].publish_time
    articleInfo.tag_id = articleResault[0].tag_id
    articleInfo.tag_name = tagResault[0].tag_name
    articleInfo.article_content = contentResault[0].article_content


  	console.log('==========>',articleResault[0].tag_id)
 
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
    return this.success(articleInfo)
  }
}