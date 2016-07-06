// 表设计

  // 文章表 article
  	article_id     	:     INT,            // 文章id
  	article_title  	:     VARCHAR,		  // 文章标题	
  	article_type	  :     TINYINT,		  // 0为转载，1为原创
  	publish_time	  : 	  DATETIME,		  // 发表时间
  	updata_time		  : 	  DATETIME,		  // 修改时间
  	author			    : 	  VARCHAR,		  // 作者(原创人)
  	user_id			    : 	  INT,		  	  // 转载人(编辑人)
  	tag_id          :     INT,            // 标签id


  // 文章内容表 article_content
  	article_id     	:     INT,            // 文章id
  	article_content :     TEXT,		  	  // 文章内容	


  // 标签表 article_tag
  	tag_id          :     INT,            // 标签id
  	tag_name        :     VARCHAR,        // 标签name
  	tag_count		    :     INT,			  // 标签数量
  	add_time		    :     DATETIME,			  // 标签创建时间


  // 用户表 user
  	user_id        	:     INT,            // 用户id
  	user_name       :     VARCHAR,        // 用户name
  	password      	:     VARCHAR,        // 用户密码
  	email      		  :     VARCHAR,        // 用户密码
  	user_type       :     TINYINT,    	  // 用户权限，0为游客，1为管理员









