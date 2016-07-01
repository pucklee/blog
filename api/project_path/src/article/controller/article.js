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
  	console.log(1)

    //auto render template file index_index.html
    return this.success({
    	url:1
    })
  }
}