//接口

// 前台 =========================>

  // 推荐文章列表 article_list/index
      param :{
        page              :     num,            // 第几页
        page_size         :     num,            // 每页条数
      }
      res :{
        list : [{
          article_type    :     0/1,            // 0为转载，1为原创
          tag_name        :     string,         // 标签名
          tag_id          :     num,            // 标签id
          article_title   :     string,         // 文章标题
          article_id      :     num,            // 文章id
          author          :     string,         // 作者
          publish_time    :     string          // 发表时间 格式：2016年06月28日11:03:51
          show_img		  :     string          // 展示图片地址
        }],
      	page		 	  : 	num,
      	pageSize		  : 	num,
      	count			  : 	num
      }

  // 搜索文章列表 article_list/search
      param :{
        tag_id            :     num,            // 标签id
        search_value      :     string,         // 搜索内容
        page              :     num,            // 第几页
        page_size         :     num,            // 每页条数
      }
      res :{
        list : [{
          article_type    :     0/1,            // 0为转载，1为原创
          tag_name        :     string,         // 标签名
          tag_id          :     num,            // 标签id
          article_title   :     string,         // 文章标题
          article_id      :     num,            // 文章id
          author          :     string,         // 作者
          publish_time    :     string,         // 发表时间 格式：2016年06月28日11:03:51
          show_img		  :     string          // 展示图片地址
        }],
      	page		 	  : 	num,
      	pageSize		  : 	num,
      	count			  : 	num
      }
  // 获取文章内容 article_info/article
      param :{
        article_id        :     num,            // 文章id
      }
      res :{
        article_type      :     0/1,            // 0为转载，1为原创
        tag_name          :     string,         // 标签名
        tag_id            :     num,            // 标签id
        article_title     :     string,         // 文章标题
        article_id        :     num,            // 文章id
        article_content   :     string,         // 文章内容
        author            :     string,         // 作者
        publish_time      :     data,           // 发表时间 格式：2016年06月28日11:03:51
        original_url      :     string,         // 原文地址
        show_img		  :     string          // 展示图片地址
      }



// 后台 ==========================>

  // 修改/发布文章 article
      param :{
        article_type      :     0/1,            // 0为转载，1为原创
        article_id        :     num,            // 文章id
        tag_id            :     num,            // 标签id
        article_title     :     string,         // 文章标题
        author            :     string,         // 作者
        article_content   :     string,         // 文章内容
        publish_time      :     string,         // 发表时间 格式：2016年06月28日11:03:51
        original_url      :     string,         // 原文地址
        show_img		  :     string          // 展示图片地址
      }



// 错误类型 errno
	-1  //数据不完整