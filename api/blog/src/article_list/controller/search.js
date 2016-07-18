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
    // let param = JSON.parse(this.post().param) || {};
    let param = this.post() || {};
    param.page = param.page || 1
    param.page_size = param.page || 10
    param.search_value = param.search_value || null

    // 数据格式
    let res = {
      list: [],
      page: param.page,
      page_size: param.page_size,
      count: null
    }
    // tag_id            :     num,            // 标签id
    // search_value      :     string,         // 搜索内容
    // page              :     num,            // 第几页
    // page_size         :     num,            // 每页条数

    // 查表
    let queryTerm = function(){

    	if(param.search_value){
    		console.log({'article_title|tag_name': ['like','%'+param.search_value+'%']})
    		return {'article_title|tag_name': ['like','%'+param.search_value+'%']}
    	}else if(param.tag_id){
    		console.log({'tag_id': param.tag_id})
    		return {'a.tag_id': param.tag_id}
    	}
    	// 
    }
    queryTerm()
    let resault = await article_table.alias('a').join({
      table: "article_tag", 
      join: "left",
      as: "t",
      on: ["tag_id", "tag_id"]
    }).field(['a.article_type','a.tag_id','a.article_title','a.article_id','a.author','a.publish_time','a.show_img','t.tag_name']).where(queryTerm()).page(param.page,param.page_size).select()
    let count = await article_table.alias('a').join({
      table: "article_tag", 
      join: "left",
      as: "t",
      on: ["tag_id", "tag_id"]
    }).field(['a.article_type','a.tag_id','a.article_title','a.article_id','a.author','a.publish_time','a.show_img','t.tag_name']).where(queryTerm()).page(param.page,param.page_size).count('article_title')
    console.log(resault)
    res.list = resault
    res.count = count
	// return this.fail({
	//   errno: -1,
	//   errmsg: '请填写完整参数'
 //  	});



    




    return this.success(res)
  }
}