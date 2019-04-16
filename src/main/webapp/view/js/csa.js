window.onload=function(){
	defaultFuction();
}
/*需要在入口函数执行的函数*/
function defaultFuction(){
	showGridDiv();
	positionDiv();
	dateShow();
}

/**
 * 是否放入窗口函数：true
 * 栅格系统生成器
 */
function showGridDiv(){
	//获取body的宽度
	var bodyWidth=document.getElementsByTagName("body")[0].offsetWidth;
	for(var i=1;i<=12;i++){
		var gridDivs=document.getElementsByClassName("csa-grid"+i); //格栅单元宽度
		for(var j=0;j<gridDivs.length;j++){
			//必须等dom加载才能执行成功
			//默认栅格12
			var n=12/i;  //csa_div个数
			gridDivs[j].style.padding="0px 10px 0px 10px";
			gridDivs[j].style.width=Math.floor((bodyWidth-10*2*n)/n)+"px";
		}//end for
	}//end for
	
	//暂时无效
	/*var gridRows=document.getElementsByClassName("csa-grid-row");
	var di=document.createElement("div");
		di.style.clear="both";
	for(var i=0;i<gridRows.length;i++){
		//添加一波子元素清除浮动
		gridRows[i].appendChild(di);
		
	} //end for
	*/
} //showGridDiv_end

/**
 * 是否放入窗口函数：true
 * 定位函数：依据父元素宽度-目标元素宽度：实现定位
 */
function positionDiv(){
	//水平居中定位
	var mid=document.getElementsByClassName("csa-pos-mid");
	for(var i=0;i<mid.length;i++){
		var parentWidth=mid[i].parentNode.offsetWidth;
		var targetWidth=mid[i].offsetWidth;
		mid[i].style.marginLeft=(parentWidth-targetWidth)/2+"px";
	}//end for
}

/**
 * 是否放入窗口函数：true
 * 最基本的日期显示
 */
function dateShow(){
	var dateDiv=document.getElementsByClassName("csa-date-default");
	var d=new Date();
	for(var i=0;i<dateDiv.length;i++){
		dateDiv[i].innerHTML=d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日'+
		d.getHours()+'时'+d.getMinutes()+'分';
	}
}



/**
 * 是否放入窗口函数：true
 * 轮播插件
 * pics:图片列表
 */
var carousel={
	
}
function carouselPicture(className,pics,texts){
	//初始化
	carousel[className]=className;
	carousel[className+'Pics']=pics;
	carousel[className+'Texts']=texts;
	carousel[className+'Index']=0;//记录画廊访问的第一图片在pics中的索引
	insertPics(className,pics,texts);
}

//插入要轮播的图片到相关元素
function insertPics(className,pics,texts){
	//获得轮播div对象
	var cp=document.getElementsByClassName(className)[0];
	cp.innerHTML=""; //先删除所有子元素(除此加载没有子元素)
	//显示大图
	var bigImg=document.createElement('div');
	//创建图片走廊
	var imgDiv=document.createElement('div');
	imgDiv.setAttribute('class','csa-carousel-imgDiv');
	bigImg.setAttribute('class','csa-carousel-bigImg');
	cp.appendChild(bigImg);
	cp.appendChild(imgDiv);
	
	//imgDiv组件
	var left=document.createElement("div");
	var right=document.createElement("div");
	left.setAttribute('class','csa-carousel-imgDiv-left');
	left.onclick=function(){
		clickLeftOrRight(className,'left');
	};
	right.setAttribute('class','csa-carousel-imgDiv-right');
	right.onclick=function(){
		clickLeftOrRight(className,'right');
	};
	imgDiv.appendChild(left);
	
	//大图添加
	if(pics.length>0){
		var img=document.createElement("img");
		img.setAttribute("src",pics[0]);
		bigImg.appendChild(img);
	}
	//图片走廊添加图片
	var len=0; //定义画廊可以访问pics最后索引
	var sub=carousel[className+'Pics'].length-carousel[className+'Index'];
	if(sub>=4){
		len=4;
	}else{
		len=sub;
	}
	len=carousel[className+'Index']+len;
	for(var i=carousel[className+'Index'];i<len;i++){
		var img=document.createElement("div");
		img.setAttribute("class",'csa-carousel-imgDiv-img');
		img.style.backgroundImage='url(\"'+pics[i]+'\")';
		img.style.backgroundSize='cover';
		img.setAttribute('index',i);
		//给图片走廊的图片绑定事件,点击后大图显示图片走廊被点击的图片或div背景
		img.onclick=function(){
			//大图div删除原来属性
			bigImg.removeChild(bigImg.getElementsByTagName('img')[0]);
			//切换图片
			var img2=document.createElement("img");
			//使用this关键字,获取div的背景image url
			var imgUrl=this.style.backgroundImage;
			//字符串切割出完整图片路径
			imgUrl=imgUrl.slice(5,imgUrl.lastIndexOf('\"'));
			img2.setAttribute("src",imgUrl);
			bigImg.appendChild(img2);
			//调整透明度
		} //end bind
		//绑定鼠标移入事件,显示上方文字
		img.onmouseenter=function(){
			if(texts==undefined){
				return false;
			}
			var title=texts[this.getAttribute('index')];
			this.innerHTML="<h1>"+title+"</h1>";
		}//end bind
		//绑定鼠标移出事件,取消上方文字
		img.onmouseleave=function(){
			this.innerHTML="";
		}//end bind
		imgDiv.appendChild(img);
	} //end for
	
	//添加右边元素
	imgDiv.appendChild(right);
} //end insertPics

//点击左右边栏
function clickLeftOrRight(className,oper){
	if(oper=='left'){
		if(carousel[className+'Index']==0){
			alert('已到首页!');
			return false;
		}
		carousel[className+'Index']=carousel[className+'Index']-1;
	}else{ //点击右边栏
		if((carousel[className+'Pics'].length-carousel[className+'Index'])<=4){
			alert('已到尾页!');
			return false;
		}
		carousel[className+'Index']=carousel[className+'Index']+1;
	}
	insertPics(carousel[className],carousel[className+'Pics'],carousel[className+'Texts']);
}




/**
 * 是否放入窗口函数：false
 * 查询地址栏参数的值
 */
function queryString(key){
	var se=window.location.search; //查询部分
	if(se && se.length>1){
		se=se.substring(1);
	}
	var ses=se.split('&');
	for(var i=0;i<ses.length;i++){
		//存在要查询的key
		if(ses[i].indexOf(key)!=-1){
			return ses[i].substring(ses[i].lastIndexOf('=')+1)
		}
	}//end for
	return null;
}
