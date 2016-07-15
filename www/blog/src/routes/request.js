var request = require('superagent');
import _debug from 'debug'


const debug = _debug('app:server')

const defaultConfig = {
	//在config->index.js中mapping 这个对象中所配置
	// module 		: '',		//提交的模块名称
	interface 	: '',		//提交的具体的接口名称

	type 	: 'get',	//默认的提交方式

	param 	: {} ,		//参数
	paramFilter : true, //get时有效 - 参数时候过滤
    paramJson : true,   //get时有效 - 当paramFilter=false时，这个参数判断是否将对象转换为字符串

	// The .withCredentials() method enables the ability to send cookies from the origin, however only when "Access-Control-Allow-Origin" is not a wildcard ("*"), and "Access-Control-Allow-Credentials" is "true".
	traditional : false ,	//是否携带COOKIE，跨域时需要设置此参数

	//回调函数，当出错时，返回{err:'错误信息'}，成功时，返回结果
	callback 	: function(e){} ,
	resultFilter : true ,	//是否过滤返回的结果

	//返回值类型
	// dataType 	: 'json',

	// headers		: [],	//携带的表头信息
}

let _env        = 'lt',    // 接口环境:lt和wt
    _baseUrl    = BASEURL['baseurl'] ,
    _hostname   = window.location.hostname ;


if(_hostname.indexOf('wt') >= 0){
    _env = 'wt';
}

_baseUrl = _baseUrl.replace('{environment}', _env);

export default {
	ajax(config){
		config = Object.assign({}, defaultConfig ,config);
		if(!config.interface){
			console.error('请求需要添加模块名称和具体的接口名称！');
			config.callback({err:'接口地址参数错误！'});
			return;
		}

		let baseurl       	= _baseUrl,
    		url 		  	= baseurl + BASEURL[config.interface] ,

    		req 			= request ,
    		param 			= config.param;

    	// 提交方法
    	if(config.type == 'get'){

    		req = req.get(url);
            // 参数
            if(config.paramFilter){
                if(!param.param && !param.page){
                    // console.warn('请求接口：'+url+'时，参数过滤已启用，但是param和page却都为空！');
                }
                let purl = '';
                if(param.param){ purl += 'param='+JSON.stringify(param.param); }
                if(param.page){ purl += '&page='+JSON.stringify(param.page); }
                req = req.query(purl)
            }else{
                if(param.paramJson){
                    req = req.query(JSON.stringify(param));
                }else{
                    req = req.query(param);
                }
            }

    	}else if(config.type == 'post'){
    		req = req.post(url);
            if(param){
								req = req.send('param='+JSON.stringify(param))
                // req = req.send(param.param)
            }
    	}

    	if(config.traditional){
    		req = req.withCredentials(true);
    	}

    	req.end(function(err ,res){
    		if(err || !res ){
    			console.error('请求接口：'+url+'时，遇到了问题:');
    			console.error(err);
    			config.callback({err:err.toString()});
    			return;
    		}
    		if(res.error){
    			console.error('请求接口：'+url+'时，遇到了问题:');
    			console.error(res.text);
    			config.callback({err:res.text});
    			return;
    		}

    		if(!config.resultFilter){
    			config.callback(res);
    			return;
    		}

    		res = res.text || '{}';
	        res = JSON.parse(res);
	        if(res.code < 0){
	        	console.error('请求接口：'+url+'时，遇到了问题:');
    			console.error(res);
	            config.callback({err:res.message ,errno:res.code});
	            return;
	        }
	        config.callback(res.data || {});
    	});
	}

}
