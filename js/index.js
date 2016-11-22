
/*-------------------------------------------购物车----------------------------------------*/

$(document).ready(function(){
	var showT = null;
	var hideT = null;
	$('#nav .buy').mouseenter(function(){
		show();
	});
	$('#nav .buy').mouseleave(function(){
		hide();
	});
	$('#nav .buycar').mouseenter(function(){
		show();
	});
	$('#nav .buycar').mouseleave(function(){
		hide();
	});

	function show(){
		clearInterval(hideT);
		showT = setTimeout(function(){
			$('#nav .buycar').slideDown();
			$('#nav .buy').css({
				background:'#fff',
				color:'#ff6700'
			});
		},200);
	}
	function hide(){
		clearInterval(showT);
		hideT = setTimeout(function(){
			$('#nav .buycar').slideUp();
			$('#nav .buy').css({
				background:'#424242',
				color:'#aca8ac'
			});
		},200);
	}
});
/*-------------------------------------------购物车----------------------------------------*/


/*-------------------------------------------菜单栏搜索框----------------------------------------*/

$(document).ready(function(){
	//$('#manu .search .key_word').hide();
	console.log($('#manu .search .text'));
	$('#manu .search .text').focus(function(){
		$('#manu .search .key_word').hide();
		//$('#manu .search .text').css({border:'2px solid #fff'});
	});
	$('#manu .search .text').blur(function(){
		$('#manu .search .key_word').show();
		//$(this).css({border:'none'});
	});

});



/*-------------------------------------------菜单栏搜索框----------------------------------------*/


/*-------------------------------------------菜单选项卡----------------------------------------*/
$(document).ready(function(){

//鼠标移入显示，移出隐藏
	var oA = $('#manu .munu_options a');
	var oBox = $('#manu .munu_options');
	var slideDown = $('#neck .manu_fa');
	var clock = null;
	var showClock = null;
	for(var i = 0; i <oA.length-2; i++){
		$(oA).eq(i).attr('index',i);
		oA[i].onmouseover = function(){
			show();
			//console.log($(this).attr('index'));
			 var num = $(this).attr('index');
			change(aImg[num],aName[num],aPrice[num]);
		}
		oA[i].onmouseout = function(){
			hide();
		}
	}

	slideDown[0].onmouseover = function(){
		show();
	}
	slideDown[0].onmouseout = function(){
		hide();
	}
	
});

	function show(){
		clearInterval(clock);
		showClock = setTimeout(function(){
			$(slideDown).slideDown(500);
		},200)
		
		//slideDown[0].style.display = 'block';
	}
	function hide(){
		clearInterval(showClock);
		clock = setTimeout(function(){
			$(slideDown).slideUp(500);
			//slideDown[0].style.display = 'none';
		},200);
	}


//动态添加

//数据
	var xmImg = ['xm1.jpg','xm2.jpg','xm3.jpg','xm4.jpg'];
	var hmImg = ['hm1.jpg','hm2.jpg','hm3.jpg','hm4.jpg','hm5.jpg'];
	var pbImg = ['pb1.jpg','pb2.jpg','pb3.jpg','pb4.jpg','pb5.jpg'];
	var dsImg = ['ds1.png','ds2.png','ds3.png','ds4.png','ds5.png','ds6.png'];
	var hzImg = ['hz1.png','hz2.png','hz3.png','hz4.png','hz5.jpg','hz6.jpg'];
	var lyImg = ['ly1.jpg','ly2.jpg','ly3.jpg','ly4.jpg','ly5.jpg','ly6.jpg'];
	var znImg = ['zn1.jpg','zn2.jpg','zn3.jpg','zn4.jpg','zn5.jpg','zn6.jpg'];
	console.log(dsImg.length);
	var aImg = [xmImg,hmImg,pbImg,dsImg,hzImg,lyImg,znImg];
	

	var xmName =['小米5s','小米5s Plus','小米手机5','小米Max'];
	var hmName =['红米Pro','红米Note 4','红米Note 3','红米手机3S','红米手机3X'];
	var pbName =['小米平板2 16GB','小米平板2 64GB','小米平板2 64GB Windows版','小米笔记本Air12.5*','小米笔记本Air 13.3*'];
	var dsName =['小米电视3s 43英寸','小米电视3s 48英寸','小米电视3s 55英寸','小米电视3s 60英寸','小米电视3s 65英寸','查看全部小米电视'];
	var hzName =['小米盒子mini版','小米盒子3','小米盒子3 增强版','小米电视主机','小米家庭音响 金属板','小米家庭音响 标准版'];
	var lyName =['全新小米路由器','小米路由器3 1200M','小米路由器 mini','小米路由器 3C 300M','小米路由器 青春版','小米WIFI放大器'];
	var znName =['九号平衡车','小米净水器','米家压力IH电饭煲','小米空气净化器2','智能摄像机','查看全部智能硬件'];

	var aName = [xmName,hmName,pbName,dsName,hzName,lyName,znName];

	var xmPrice = ['1999元起','2299元起','1599元起','1299元起'];
	var hmPrice = ['1099元起','899元起','799元起','699元起','799元'];
	var pbPrice = ['999元','1299元','1299元','3499元','4999元',''];
	var dsPrice = ['1799元','1999起','3499元起','4499元','4499元起'];
	var hzPrice = ['179元起','249元','399元','999元','899元','699元'];
	var lyPrice = ['699元','149元','129元','99元','79元','39元'];
	var znPrice = ['1999元','1299元起','999元','699元','149元起'];

	var aPrice = [xmPrice,hmPrice,pbPrice,dsPrice,hzPrice,lyPrice,znPrice];

	/*for(var x = 0; x < oA.length - 2; x++){
		$(oA).attr('index',x);
		oA[x].onmouseover = function(){
			var num = $(this).attr('index');
			change(aImg[num],aName[num],aPrice[num]);
		}
		
	}*/

	//change(aImg[1],aName[1],aPrice[1]);
	function change(xImg,xName,xPrice){

		var oUl = $('#neck .inside');
		$(oUl).empty();
		for( var i = 0; i < xImg.length; i++){
			var aLi = document.createElement('li');
			var aUp = document.createElement('div');
			$(aUp).addClass('up');
			var a1 = document.createElement('a');
			$(a1).attr('href','#');
			var a2 = document.createElement('a');
			$(a2).attr('href','#');
			var aPic = document.createElement('img');
			var aName = document.createElement('p');
			$(aName).addClass('name');
			var aPrice = document.createElement('p');
			$(aPrice).addClass('price');

			$(a1).append(aPic);
			$(aUp).append(a1);
			$(aName).append(a2);
			$(aLi).append(aUp);
			$(aLi).append(aName);
			$(aLi).append(aPrice);

			$(oUl).append(aLi);
		}

		for(var j = 0; j < xImg.length; j++){
			var oImg = $('.inside img');
			var oName = $('.inside .name a');
			var oPrice = $('.inside .price');
			$(oImg).eq(j).attr('src','./img/nav_img/' + xImg[j]);
			$(oName).eq(j).text(xName[j]);
			$(oPrice).eq(j).text(xPrice[j]);
		}
	}
	





/*-------------------------------------------菜单选项卡----------------------------------------*/
/*-------------------------------------------轮播图----------------------------------------*/
$(document).ready(function(){
	var imgs = $('.move_pic .pic li');
	var num = 0;
	var timer = setInterval(move,3000);
	$('.move_pic .pic li').hide();
	//alert(imgs);
	$('.move_pic .pic li').eq(0).show();

	$('.move_pic .btnl').click(function(){
		fadeOut();
		num--;
		if(num < 0){
			num = imgs.length - 1;
		}
		fadeIn();
	});

	$('.move_pic .btnr').click(function(){
		move();
	});

	for(var i = 0; i < imgs.length; i++){
		$('.move_pic .btns li').eq(i).attr('index',i);
	}

	$('.move_pic .btns li').click(function(){
		if(num == $(this).attr('index')){
			return;
		}else{
			fadeOut();
			num = $(this).attr('index');
			fadeIn();
		}	
	})

	$('.move_pic').mouseover(function(){
		clearInterval(timer);
	})

	$('.move_pic').mouseout(function(){
		timer = setInterval(move,3000);
	})
	function fadeOut(){
		$('.move_pic .pic li').eq(num).fadeOut(500);
		$('.move_pic .btns li').eq(num).removeClass('active');
	}
	function fadeIn(){
		$('.move_pic .pic li').eq(num).fadeIn(500);
		$('.move_pic .btns li').eq(num).addClass('active');
	}
	function move(){
		fadeOut();
		num++;
		if(num > imgs.length - 1){
			num = 0;
		}
		fadeIn();
	}
});


/*-------------------------------------------轮播图选项卡----------------------------------------*/

$(document).ready(function(){
	//var oUl = $('.select .father');
	var oOptions = $('.select .options>li');
	
	var phoImg = ['1111.jpg','1112.jpg','1113.jpg','1114.jpg','1115.jpg','1116.jpg','1117.jpg','1118.jpg','1119.jpg','11110.jpg','11111.jpg','11112.jpg'];
	var pcImg = ['2221.jpg','2222.jpg','2223.jpg',];
	var tvImg = ['31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg','310.jpg','311.jpg','312.jpg','313.jpg','314.jpg','315.jpg','316.jpg','317.jpg'];
	var wifiImg = ['41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg','410.jpg','411.jpg','412.jpg','413.jpg','414.jpg','415.jpg','416.jpg','417.jpg'];
	var powerImg = ['51.jpg','52.jpg','53.jpg','54.jpg','55.jpg','56.jpg','57.jpg','58.jpg'];
	var voiceImg = ['61.jpg','62.jpg','63.jpg','64.jpg','65.jpg','66.jpg','67.jpg','68.jpg','69.jpg','610.jpg','611.jpg','612.jpg','613.jpg','614.jpg'];
	var coverImg = ['71.jpg','72.jpg'];
	var lineImg = ['81.jpg','82.jpg','83.jpg','84.jpg'];
	var clothImg = ['91.jpg','92.jpg','93.jpg'];
	var liveImg = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];
	
	var aImg = [phoImg,pcImg,tvImg,wifiImg,powerImg,voiceImg,coverImg,lineImg,clothImg,liveImg];
	//console.log(aImg);

	var phoText = ['小米5s','小米5s Plus','小米手机5','小米Max','红米 Note 4','红米Note 3','红米手机3S','红米Pro','红米手机3X','合约机','对比手机','小米移动 电话卡'];
	var pcText = ['小米笔记本Air','小米平板','USB—C转接器','小米笔记本内胆包'];
	var tvText = ['小米电视3s 43英寸','小米电视3s 48英寸','小米电视3s 55英寸','小米电视3s 60英寸','小米电视3s 65英寸','小米电视3s 65英寸 曲面','小米电视3 55英寸','小米电视3 60英寸','小米电视3 70英寸','小米电视主机','小米盒子3 增强版','小米盒子3','小米盒子mini','小米低音炮','蓝牙手柄','家庭音响','电视盒子配件'];
	var wifiText = ['米家扫地机器人及配件','小米VR眼镜玩具版','小米路由器','九号平衡车','电助力折叠自行车','米家恒温电水壶','米家压力IH电饭煲','摄像机','净化器及滤芯','净水器及滤芯','血压计','智能灯','米兔智能故事机','智能家庭组合','手环及配件','体重秤','全智能硬件'];
	var powerText = ['小米移动电源','小米插线板','品牌移动电源','移动电源附件','电池','充电器','彩虹5号电池','彩虹7号电池'];
	var voiceText = ['小米头戴式耳机','小米圈铁耳机','小米胶囊耳机','小米蓝牙耳机','品牌耳机','小米蓝牙音箱','小米随身蓝牙音箱','小钢炮音箱 2','小钢炮音箱 青春版','小米方盒子音箱','小米音乐脑钟','小米米兔音箱','网络收音机','品牌音箱'];
	var coverText = ['贴膜','保护套/保护壳'];
	var lineText = ['线材','自拍杆','手机支架','储存卡'];
	var clothText = ['箱包','90分旅行箱','服饰'];
	var liveText = ['米兔玩偶','鼠标垫','生活周边','《小米》目录杂志','8H乳胶枕'];

	var aText = [phoText,pcText,tvText,wifiText,powerText,voiceText,coverText,lineText,clothText,liveText];

	var aLength;

	//change(aImg[1],aText[1]);

	for( var i = 0; i < oOptions.length; i++){
		$(oOptions).eq(i).attr('index',i);
		var father = document.createElement('ul');
		aLength = aImg[i].length;
		for(var j = 0; j < aLength; j++){
			var oLi = document.createElement('li');
			$(oLi).addClass('son');
			var oAl = document.createElement('a');
			$(oAl).addClass('son_l');
			var oAr = document.createElement('a');
			$(oAr).addClass('son_r');
			var oImg = document.createElement('img');
			var oSpan = document.createElement('span');
			$(oSpan).addClass('p_name');

			$(oAl).append(oImg);
			$(oAl).append(oSpan);
			$(oLi).append(oAl);
			$(oLi).append(oAr);

			$(father).append(oLi);
		} 
		$(oOptions).eq(i).append(father);
		var action = $(oOptions).eq(i).find('ul');
		var oSon = $(action).find('.son');
		//console.log(oSon);
		for( var j = 0 ; j < aLength; j++){
		var side = parseInt(j / 6);
		var oTop = j % 6;
		//alert(side);
		$(oSon).eq(j).css('left',265*side);
		$(oSon).eq(j).css('top',76*oTop);
		$(father).css('width',(side+1)*265);
		}
		for(var j = 0; j <aLength; j++){
			var aPic = $(action).find('img');
			var aName = $(action).find('.p_name');
			var aCheck = $(action).find('.son_r');
			$(aPic).eq(j).attr('src','./img/picture/'+aImg[i][j]);
			$(aCheck).eq(j).text('选购');
			$(aName).eq(j).text(aText[i][j]);
		}
	}

	$(oOptions).mouseover(function(){
		$(this).find('ul').addClass('active');
	});
	$(oOptions).mouseout(function(){
		$(this).find('ul').removeClass('active');
	})

});



/*-------------------------------------------轮播图选项卡----------------------------------------*/

/*-------------------------------------------轮播图----------------------------------------*/

//-------------------------------------------明星单品----------------------------------------

$(document).ready(function(){
	var oImgs = ['sam1.png','sam2.png','sam3.png','sam4.png','sam5.png','sam6.png','sam7.png','sam8.png','sam9.png','sam10.png'];
	var oH4s = ['红米手机3X 全球通版','小米Max','红米Pro 十核双摄','小米笔记本','小米平板2 16GB现货','小米电视3s 48英寸','小米盒子3','小米手环2','VR眼睛玩具版量产版','米兔定位电话'];
	var oTexts = ['金属机身，指纹识别，超长待机','6.44" 大屏、4850mAh 大电量','双摄像头手机，像单反一样去拍照','独立显卡、超轻薄、金属机身','轻薄全金属，海量内容','原装液晶屏，金属机身','全新升级 64位 4K网络机顶盒','每天早10点开售','逼真沉浸感 舒适观看新体验','时刻定位，守护你所爱'];
	var oPrices = ['799元','1799元','1499元','3499元','999元','1999元','249元','149元','49元','169元'];
	var aLength = oImgs.length;
//添加元素
	var oUl = $('#star1 .list');
	//console.log(oUl);
	for( var i = 0; i < aLength; i ++){
		//创建节点
		var oLis = document.createElement('li');
		var oa1 =document.createElement('a');
		$(oa1).attr('href','#');
		var oa2 =document.createElement('a');
		$(oa2).attr('href','#');
		var oImge =document.createElement('img');
		var oH4e =document.createElement('h4');
		var oP1e =document.createElement('p');
		$(oP1e).addClass('text');
		var oP2e =document.createElement('p');
		$(oP2e).addClass('price');
		//改变节点关系
		$(oa1).append(oImge);
		$(oa2).append(oH4e);
		$(oLis).append(oa1);
		$(oLis).append(oa2);
		$(oLis).append(oP1e);
		$(oLis).append(oP2e);

		$(oUl).append(oLis);

	}
	var oli = $('#star1 .list li');
	console.log(oImgs[0]);
	console.log(oTexts[0]);
//改变内容
	var aImg = $('#star1 .list img');
	var aH4 = $('#star1 .list h4');
	var aText = $('#star1 .list .text');
	var aPrice = $('#star1 .list .price');
	for(var i = 0; i < aLength; i++){
	 	$('#star1 .list img').eq(i).attr('src','./img/images/'+oImgs[i]);
	 	$('#star1 .list h4').eq(i).text(oH4s[i]);
	 	$('#star1 .list .text').eq(i).text(oTexts[i]);
	 	$('#star1 .list .price').eq(i).text(oPrices[i]);
	}

	var go = 0;
	var timer = setInterval(move,10000);
	$('#star1 .title .btnl').click(function(){
			go = 0;
		$('#star1 .list').animate({left:0},500);
	})

	$('#star1 .title .btnr').click(function(){
			go = 1;
		$('#star1 .list').animate({left:-1226},500);
	})

	$('#star1').mouseover(function(){
		clearInterval(timer);
	})
	$('#star1').mouseout(function(){
		timer = setInterval(move,10000);
	})


	function move(){
		go++;
		if(go == 2){
			go = 0;
		}

		if(go == 0){
			$('#star1 .list').animate({left:0},500);
		}else if(go == 1){
			$('#star1 .list').animate({left:-1226},500);
		}
	}

});

//-------------------------------------------明星单品----------------------------------------

//-------------------------------------------智能硬件----------------------------------------


$(document).ready(function(){
	var aImg = ['pto1.jpg','pto2.jpg','pto3.jpg','pto4.jpg','pto5.jpg','pto6.jpg','pto7.jpg','pto8.jpg'];
	var aH4 = ['小米路由器3','米家iHealth血压计','米家飞利浦智睿台灯二代','九号平衡车','米兔智能故事机','小米净水器 厨下式','米家小白智能摄像机','电助力折叠自行车'];
	var aText = ['四天线设计，更安全更稳定','爸妈上手就会用的智能血压计','感知环境光，主动优化场景照明','年轻人的酷玩具，骑行遥控两种玩法','微信远程互动，智能语音交互','限时享花呗三期免息，直出纯净水','360度全景拍摄，双向语音通话','力矩传感电助力，折叠便携设计'];
	var aPrice = ['149元','399元','199元','1999元','199元','1999元','399元','2999元'];

	var oFirstImg = $('#pdt_first .pdt_lists img');
	var oFirstH4 = $('#pdt_first .pdt_lists h4');
	var oFirstText = $('#pdt_first .pdt_lists .text');
	var oFirstPrice = $('#pdt_first .pdt_lists .price');

	for( var i = 0; i < aImg.length; i++){
		$(oFirstImg).eq(i).attr('src','./img/images/'+aImg[i]);
		$(oFirstH4).eq(i).text(aH4[i]);
		$(oFirstText).eq(i).text(aText[i]);
		$(oFirstPrice).eq(i).text(aPrice[i]);
	}
});


//-------------------------------------------智能硬件----------------------------------------


//-------------------------------------------搭配----------------------------------------

$(document).ready(function(){
	var hotImg = ['1101.jpg','1102.jpg','1103.jpg','1104.jpg','1105.jpg','1106.jpg','1107.jpg','1108.jpg'];
	var voiceImg = ['1201.jpg','1202.jpg','1203.jpg','1204.jpg','1205.jpg','1206.jpg','1207.jpg','1208.jpg'];
	var electImg = ['1301.jpg','1302.jpg','1303.jpg','1304.jpg','1305.jpg','1306.jpg','1307.jpg','1308.jpg'];
	var carImg = ['1401.jpg','1402.jpg','1403.jpg','1404.jpg','1405.jpg','1406.jpg','1407.jpg','1408.jpg'];

	var pImg = [hotImg,voiceImg,electImg,carImg];

	var hotText = ['10000mAh小米移动电源2','小米圈铁耳机','小米插线板','小米蓝牙耳机','小米移动电源10000mAh高配套','小米移动电源10000mAh 高配版','小米小钢炮蓝牙音箱2','小米小钢炮'];
	var voiceText = ['小米圈铁耳机 银色','小米胶囊耳机','小米活塞耳机 基础版','小米蓝牙耳机','小米小钢炮蓝牙音箱2','方盒子音箱','小米蓝牙音箱','睿米车载蓝牙小音箱'];
	var electText = ['移动电源5000mAh','小米移动电源10000mAh高配套','移动电源10000mAh 高配版','移动电源20000mAh','10000mAh小米移动电源保护套','小米插线板（3孔位+USB）','小米USB充电器（4口）','小米插线板 5孔位'];
	var carText = ['SanDisk 16GB储存卡（Class4）','原装快充套装','彩虹5号电池（10粒装）','彩虹7号电池（10粒装）','米兔手机U盘升级版32GB','镍氢充电电池套装','小米车载充电器','红米2/红米2原装电池'];

	var pText = [hotText,voiceText,electText,carText];

	var hotPrice = ['78元','99元','49元','79元','169元','149元','129元','99元'];
	var voicePrice = ['99元','69元','29元','79元','129元','89元','199元','69元'];
	var electPrice = ['49元','169元','149元','149元','19.9元','49元','69元','39元'];
	var carPrice = ['26.9元','58元','9.9元','9.9元','79元','88元','49元','69元'];

	var pPrice = [hotPrice,voicePrice,electPrice,carPrice];

	var hotComment = ['27人评价','2.1万人评价','25.7万人评价','9.5万人评价','108人评价','2.5万人评价','1.5万人评价'];
	var voiceComment = ['2万人评价','1.7万人评价','6.5万人评价','9.4万人评价','1.5万人评价','1.5万人评价','2万人评价'];
	var electComment = ['9.3万人评价','108人评价','2.4人评价','5.3万人评价','2.1人评价','25.6人评价','8879人评价'];
	var carComment = ['8万人评价','0人评价','7.5人评价','4.5人评价','3万人评价','0人评价','3.4人评价'];

	var pComment = [hotComment,voiceComment,electComment,carComment];

	var aImg = $('#pdt_second .pdt_lists img');
	var aText = $('#pdt_second .pdt_lists h4');
	var aPrice = $('#pdt_second .pdt_lists .price');
	var aComment = $('#pdt_second .pdt_lists .comment');
	var aLength =aImg.length;

	for( var i = 0; i < aLength; i++){
		$(aImg).eq(i).attr('src','./img/img2/'+hotImg[i]);
		$(aText).eq(i).text(hotText[i]);
		$(aPrice).eq(i).text(hotPrice[i]);
		$(aComment).eq(i).text(hotComment[i]);
	}

	var oOver = $('#pdt_second .pdt_tit .all a');
	var long = oOver.length;

	for( var j = 0; j < long; j++){
		$(oOver).eq(j).attr('index',j);

	}
	$(oOver).eq(0).css({
		'color':' #ff6700',
		'borderColor':'#ff6700'
	});
	$(oOver).mouseover(function(){
			var go = $(this).attr('index');
			match(pImg[go],pText[go],pPrice[go],pComment[go]);
			$(oOver).css({
				'color':' #333',
				'borderColor':'#fff'
			});
			$(this).css({
				'color':' #ff6700',
				'borderColor':'#ff6700'
			});
	});
	
	function match(Img,Text,Price,Comment){
		for( var i = 0; i < Img.length; i++){
			$(aImg).eq(i).attr('src','./img/img2/'+Img[i]);
			$(aText).eq(i).text(Text[i]);
			$(aPrice).eq(i).text(Price[i]);
			$(aComment).eq(i).text(Comment[i]);
		}
	}


})


//-------------------------------------------搭配----------------------------------------


//-------------------------------------------配件----------------------------------------

$(document).ready(function(){
	var hotImg = ['2101.jpg','2102.jpg','2103.jpg','2104.jpg','2105.jpg','2106.jpg','2107.jpg','2108.jpg'];
	var coverImg = ['2201.jpg','2202.jpg','2203.jpg','2204.jpg','2205.jpg','2206.jpg','2207.jpg','2208.jpg'];
	var filmImg = ['2301.jpg','2302.jpg','2303.jpg','2304.jpg','2305.jpg','2306.jpg','2307.jpg','2308.jpg'];
	var otherImg = ['2401.jpg','2402.jpg','2403.jpg','2404.jpg','2405.jpg','2406.jpg','2407.jpg','2408.jpg'];

	var pImg = [hotImg,coverImg,filmImg,otherImg];

	var hotText = ['小米Max 标准高透贴膜','小米自拍杆（线控版）','青米USB快速充电数据线','ZMI无线拓展数据线 120cm','苹果Lightning to USB数据线','小米随身WIFI','红米Note3 炫彩翻页保护套','小米5s标准'];
	var coverText = ['小米手机5 智能翻盖保护套','虾米Max 智能显示保护套','红米Pro 智能显示保护套','红米3高配版 炫彩翻盖保护套','红米Note3 炫彩翻页保护套','红米3标准版 炫彩翻盖保护套','小米手机4 智能唤醒翻盖保护套','平板2保护套'];
	var filmText = ['小米手机5 极薄防蓝光贴膜','小米Max 标准高透贴膜','小米平板2 标准高透贴膜','红米Note3 钢化玻璃膜','红米手机3 钢化玻璃膜','小米手机5 钢化玻璃贴膜','红米Pro 标准高透贴膜','小米手机5 标准高透贴膜'];
	var otherText = ['小米蓝牙遥控器','指环式防滑手机支架','小米蓝牙手柄','蓝牙语音体感遥控器','手机USB Type-C数据线','小米千兆网线','ZMI无线拓展数据线','青米USB快速充电数据线'];

	var pText = [hotText,coverText,filmText,otherText];

	var hotPrice = ['19元','49元','14.9元','29元','39元','19.9元','29元','19元'];
	var coverPrice = ['49元','59元','29元','39元','29元','39元','15元','69元'];
	var filmPrice = ['49元','19元','39元','10元','9.9元','29元','610元','19元'];
	var otherPrice = ['39元','12.5元','99元','99元','39元','14.9元','29元','24.9元'];

	var pPrice = [hotPrice,coverPrice,filmPrice,otherPrice];

	var hotComment = ['8981人评价','1098人评价','1.6万人评价','5120人评价','1.8万人评价','3万人评价','2.5万人评价'];
	var coverComment = ['2.1万人评价','6641人评价','533万人评价','6349万人评价','2.4万人评价','7195人评价','11.5万人评价'];
	var filmComment = ['9.3万人评价','108人评价','2.4人评价','5.3万人评价','2.1人评价','25.6人评价','8879人评价'];
	var otherComment = ['7479人评价','8980人评价','1360人评价','3.8万人评价','8027人评价','3.8万人评价','884人评价']; 

	var pComment = [hotComment,coverComment,filmComment,otherComment];

	var aImg = $('#pdt_third .pdt_lists img');
	var aText = $('#pdt_third .pdt_lists h4');
	var aPrice = $('#pdt_third .pdt_lists .price');
	var aComment = $('#pdt_third .pdt_lists .comment');
	var aLength =aImg.length;

	for( var i = 0; i < aLength; i++){
		$(aImg).eq(i).attr('src','./img/img3/'+hotImg[i]);
		$(aText).eq(i).text(hotText[i]);
		$(aPrice).eq(i).text(hotPrice[i]);
		$(aComment).eq(i).text(hotComment[i]);
	}

	var oOver = $('#pdt_third .pdt_tit .all a');
	var long = oOver.length;

	for( var j = 0; j < long; j++){
		$(oOver).eq(j).attr('index',j);

	}
	$(oOver).eq(0).css({
		'color':' #ff6700',
		'borderColor':'#ff6700'
	});
	$(oOver).mouseover(function(){
			var go = $(this).attr('index');
			match(pImg[go],pText[go],pPrice[go],pComment[go]);
			$(oOver).css({
				'color':' #333',
				'borderColor':'#fff'
			});
			$(this).css({
				'color':' #ff6700',
				'borderColor':'#ff6700'
			});
	});
	
	function match(Img,Text,Price,Comment){
		for( var i = 0; i < Img.length; i++){
			$(aImg).eq(i).attr('src','./img/img3/'+Img[i]);
			$(aText).eq(i).text(Text[i]);
			$(aPrice).eq(i).text(Price[i]);
			$(aComment).eq(i).text(Comment[i]);
		}
	}


})



//-------------------------------------------配件----------------------------------------


//-------------------------------------------周边----------------------------------------

$(document).ready(function(){
	var hotImg = ['3101.jpg','3102.jpg','3103.jpg','3104.jpg','3105.jpg','3106.jpg','3107.jpg','3108.jpg'];
	var clothImg = ['3201.jpg','3202.jpg','3203.jpg','3204.jpg','3205.jpg','3206.jpg','3207.jpg','3208.jpg'];
	var rabbitImg = ['3301.jpg','3302.jpg','3303.jpg','3304.jpg','3305.jpg','3306.jpg','3307.jpg','3308.jpg'];
	var liveImg = ['3401.jpg','3402.jpg','3403.jpg','3404.jpg','3405.jpg','3406.jpg','3407.jpg','3408.jpg'];
	var boxImg = ['3501.jpg','3502.jpg','3503.jpg','3504.jpg','3505.jpg','3506.jpg','3507.jpg','3508.jpg'];

	var pImg = [hotImg,clothImg,rabbitImg,liveImg,boxImg];

	var hotText = ['圆领套头卫衣','经典休闲连帽卫衣','虾米羊毛触屏手套 男款','小米羊毛围巾','小米经典商务双肩包','米家随身电蚊香','米家LED随身等 增强版','金属鼠标垫'];
	var clothText = ['小米摇粒绒加厚保暖外套','小米空气层连帽运动卫衣 男款','小米摇粒绒加厚保暖外套 女款','小米空气层连帽运动卫衣 女款','小米羊毛触屏手套 女款','小米短袖T恤 水管工米兔','小米V领短袖T恤 女款','小米短袖T恤 水管工米兔 女款'];
	var rabbitText = ['超脑米兔钥匙扣','拳击手米兔','悟空米兔','飞行员米兔屏幕擦装饰','经典版米兔','文艺版米兔','30cm坐姿米兔','黑猫米兔'];
	var liveText = ['金属鼠标垫 小号','米家签字笔','米家LED随身灯 增强版','手机支架 小蜜蜂','变形金刚特别版声波','小米百变随身杯','小米电源线收纳盒','虾米鼠标垫'];
	var boxText = ['90分旅行箱 20寸','90分旅行箱 24寸','虾米轻动系百搭多用背包','90分便携收纳袋','小米经典商务双肩包','小米极简都市双肩包','小米多功能都市休闲胸包','夏末上午真皮手提包'];

	var pText = [hotText,clothText,rabbitText,liveText,boxText];

	var hotPrice = ['99元','149元','49元','99元','399元','29元','19.9元','49元'];
	var clothPrice = ['99元','199元','99元','199元','49元','39元','39元','39元'];
	var rabbitPrice = ['29元','49元','49元','29元','29元','49元','49元','39元'];
	var livePrice = ['49元','19元','19.9元','19元','169元','39元','49元','4.9元'];
	var boxPrice = ['299元','349元','39元','29元','99元','149元','60元','149元'];

	var pPrice = [hotPrice,clothPrice,rabbitPrice,livePrice,boxPrice];

	var hotComment = ['8981人评价','1098人评价','1.6万人评价','5120人评价','1.8万人评价','3万人评价','2.5万人评价'];
	var clothComment = ['2.1万人评价','6641人评价','533万人评价','6349万人评价','2.4万人评价','7195人评价','11.5万人评价'];
	var rabbitComment = ['9.3万人评价','108人评价','2.4人评价','5.3万人评价','2.1人评价','25.6人评价','8879人评价'];
	var liveComment = ['7479人评价','8980人评价','1360人评价','3.8万人评价','8027人评价','3.8万人评价','884人评价']; 
	var boxComment = ['7479人评价','8980人评价','1360人评价','3.8万人评价','8027人评价','3.8万人评价','884人评价']; 

	var pComment = [hotComment,clothComment,rabbitComment,liveComment,boxComment];

	var aImg = $('#pdt_fouth .pdt_lists img');
	var aText = $('#pdt_fouth .pdt_lists h4');
	var aPrice = $('#pdt_fouth .pdt_lists .price');
	var aComment = $('#pdt_fouth .pdt_lists .comment');
	var aLength =aImg.length;

	for( var i = 0; i < aLength; i++){
		$(aImg).eq(i).attr('src','./img/img4/'+hotImg[i]);
		$(aText).eq(i).text(hotText[i]);
		$(aPrice).eq(i).text(hotPrice[i]);
		$(aComment).eq(i).text(hotComment[i]);
	}

	var oOver = $('#pdt_fouth .pdt_tit .all a');
	var long = oOver.length;

	for( var j = 0; j < long; j++){
		$(oOver).eq(j).attr('index',j);

	}
	$(oOver).eq(0).css({
		'color':' #ff6700',
		'borderColor':'#ff6700'
	});
	$(oOver).mouseover(function(){
			var go = $(this).attr('index');
			match(pImg[go],pText[go],pPrice[go],pComment[go]);
			$(oOver).css({
				'color':' #333',
				'borderColor':'#fff'
			});
			$(this).css({
				'color':' #ff6700',
				'borderColor':'#ff6700'
			});
	});
	
	function match(Img,Text,Price,Comment){
		for( var i = 0; i < Img.length; i++){
			$(aImg).eq(i).attr('src','./img/img4/'+Img[i]);
			$(aText).eq(i).text(Text[i]);
			$(aPrice).eq(i).text(Price[i]);
			$(aComment).eq(i).text(Comment[i]);
		}
	}



})

//-------------------------------------------周边----------------------------------------


//-------------------------------------------为你推荐----------------------------------------

$(document).ready(function(){
	var aImg = ['001.jpg','002.jpg','003.jpg','004.jpg','005.jpg','006.jpg','007.jpg','008.jpg','009.jpg','010.jpg','011.jpg','012.jpg','013.jpg','014.jpg','015.jpg','016.jpg','017.jpg','018.jpg','019.jpg','020.jpg'];
	var aText = ['红米Pro 智能显示保护套','小米手环','小米5 智能翻盖保护套','小米5s 智能立显点阵式保护套','红米Note4 智能显示保护套','红米Note3 炫彩翻页保护套','红米Note4 标准高透贴膜','10000mAh小米移动电源2','小米4c 智能唤醒翻盖保护套','小米5s 标准高透贴膜','小米自拍杆','手机USB Type-C数据线 120cm','小米平板2 智能翻盖支架保护套','小米5 户外防摔保护壳','空气净化器滤芯 除甲醛增强版','米家LED 智能台灯','小米圈铁耳机','空气净化器滤芯','8H护颈乳胶枕','小米小钢炮蓝牙音箱2'];
	var aPrice = ['29元','69元','49元','79元','39元','29元','19元','79元','49元','19元','49元','29元','69元','39元','169元','169元','99元','149元','239元','129元'];
	var aComment = ['534人好评','12万人好评','2.1万人好评','525人好评','1945人好评','2.5万人好评','2045人好评','77人好评','2.4万人好评','1166人好评','7.8万人好评','1227人好评','7156人好评','7648人好评','81人好评','7569人好评','2.1万人好评','28人好评','677人好评','1.5万人好评'];

	
	for(var i = 0; i < aImg.length; i++){
		var li = document.createElement('li');
		var a1 = document.createElement('a');
		var a2 = document.createElement('a');
		var p_price = document.createElement('p');
		var p_comment = document.createElement('p');
		var h4 = document.createElement('h4');
		var img = document.createElement('img');
		$(p_price).addClass('price');
		$(p_comment).addClass('comment');
		$(a1).append(img);
		$(a2).append(h4);
		var lis = $(li).append(a1).append(a2).append(p_price).append(p_comment);
		$('#recommend .list').append(li);

	}
	//console.log(html);
	//$('#recommend .list').html(html);

	var oImg = $('#recommend .list img');
	var oText = $('#recommend .list h4');
	var oPrice = $('#recommend .list .price');
	var oComment = $('#recommend .list .comment');
	var aLength =aImg.length;

	for( var i = 0; i < aLength; i++){
		$(oImg).eq(i).attr('src','./img/com_img/'+aImg[i]);
		$(oText).eq(i).text(aText[i]);
		$(oPrice).eq(i).text(aPrice[i]);
		$(oComment).eq(i).text(aComment[i]);
	}
	$('#recommend .list').css('width',aLength*248);

//点击事件
	var side = 0;
	$('#recommend .title .btn .btnl').click(function(){
		side--;
		if(side < 0){
			side = 0;
		}
		$('#recommend .list').animate({left:-1226*side},500);
	});
	$('#recommend .title .btn .btnr').click(function(){
		side++;
		if(side > 3){
			side = 3;
		}
		$('#recommend .list').animate({left:-1226*side},500);
	});
	for(var i = 0; i < aImg.length; i++){
		if((i + 1) % 5 == 0){
			$('#recommend .list li').eq(i).css('marginRight',0);
		}
	}



});

//-------------------------------------------为你推荐----------------------------------------

//-------------------------------------------内容----------------------------------------

$(document).ready(function(){

//第一个
	var bookImg = ['con11.jpg','con12.jpg','con13.jpg','con14.jpg'];
	var miuiImg = ['con21.jpg','con22.jpg','con23.jpg','con24.jpg'];
	var gameImg = ['con31.jpg','con32.jpg','con33.jpg','con34.jpg'];
	var appImg = ['con41.jpg','con42.jpg','con43.jpg','con44.jpg'];
    var cImg = [bookImg,miuiImg,gameImg,appImg];
	var bookName = ['哈利·波特与魔法石','特价专区','杂志专区',''];
	var miuiName = ['剑侠世界','纸间梦境','剑侠情缘网络版叁',''];
	var gameName = ['剑侠世界','米柚手游模拟器','老九门',''];
	var appName = ['2015年度应用','2015年度游戏','小米应用',''];
	var cName = [bookName,miuiName,gameName,appName];
	var bookText = ['哈利波特来了！','精选畅销好书，特价促销，天天更新，天天特价！','纸媒杂志＋互联网杂志，你想看的这都有！','海量好书，享受精品阅读时光漂亮的中文排版，千万读者选择！'];
	var miuiText = ['游戏同名主题，免费下载！吴亦凡陪你仗剑江湖！','崭新的九月，要有全新的梦，小米主题带你探寻纸间梦境。','首款官方主题，经典再现，十二门派锁屏通通收入囊中','众多个性主题、百变锁屏与自由桌面让你的手机与众不同！'];
	var gameText = ['一生不容错过的浪漫武侠！！','在电脑上玩遍小米所有手游','九门恩怨，盗墓笔记前传上线','免费下载海量的手机游戏天天都有现金福利赠送'];
	var appText = ['2015年度应用','2015年度游戏','小米出品 必属精品','帮助小米手机和其他安卓手机用户发现好用的安卓应用'];
	var cText = [bookText,miuiText,gameText,appText];
	var bookFree = ['','限时优惠','同步新刊上线','前往多看阅读'];
	var miuiFree = ['免费','免费','免费','前往MIUI肢体市场'];
	var gameFree = ['免费','免费','免费','前往小米游戏商店'];
	var appFree = ['免费','免费','免费','前往小米应用商店'];
	var cFree = [bookFree,miuiFree,gameFree,appFree];
	var cMove = $('.content .move');
	var bImg = $(cMove).eq(0).find('img');
	//console.log(bImg.length);
	for(var m = 0; m <cMove.length; m++){
		for( var n = 0; n <$(cMove).eq(m).find('img').length; n++){
			$(cMove).eq(m).find('img').eq(n).attr('src','./img/con_img/'+cImg[m][n]);
			$(cMove).eq(m).find('h2').eq(n).text(cName[m][n]);
			$(cMove).eq(m).find('p').eq(n).text(cText[m][n]);
			$(cMove).eq(m).find('h4').eq(n).text(cFree[m][n]);
		}
		$(cMove).eq(m).find('.target').text(cFree[m][3]);
	}
	


//点击事件
	var num1 = 0;
	var oBtn = $('.content .box .btn li');
	var length = oBtn.length;
	var btn1r = $('.content .box:eq(0) .btnr');
	var btn1l = $('.content .box:eq(0) .btnl');
	var li1 = $('.content .box:eq(0) .btn li');
	$(li1).eq(0).addClass('active');
	$(btn1r).click(function(){
		clear1();
		num1++;
		if(num1 > 3){
			num1 = 3;
		}
		change1();
	});
	$(btn1l).click(function(){
		clear1();
		num1--;
		if(num1 < 0){
			num1 = 0;
		}
		change1();
	});
	for( var i = 0; i < length; i++){
		$(li1).eq(i).attr('index',i);
	}
	$(li1).click(function(){
		clear1();
		num1 = $(this).attr('index');
		change1();
	})
	function clear1(){
		$(li1).eq(num1).removeClass('active');
	}
	function change1(){
		$('.content .box:eq(0) .move').animate({left:-296*num1},1000);
		$(li1).eq(num1).addClass('active');
	}

//第二个
	var num2 = 0;
	var btn2r = $('.content .box:eq(1) .btnr');
	var btn2l = $('.content .box:eq(1) .btnl');
	var li2 = $('.content .box:eq(1) .btn li');
	$(li2).eq(0).addClass('active');
	$(btn2r).click(function(){
		clear2();
		num2++;
		if(num2 > 3){
			num2 = 3;
		}
		change2();
	});
	$(btn2l).click(function(){
		clear2();
		num2--;
		if(num2 < 0){
			num2 = 0;
		}
		change2();
	});
	for( var i = 0; i < length; i++){
		$(li2).eq(i).attr('index',i);
	}
	$(li2).click(function(){
		clear2();
		num2 = $(this).attr('index');
		change2();
	})
	function clear2(){
		$(li2).eq(num2).removeClass('active');
	}
	function change2(){
		$('.content .box:eq(1) .move').animate({left:-296*num2},1000);
		$(li2).eq(num2).addClass('active');
	}
	
//第三个

	var num3 = 0;
	var btn3r = $('.content .box:eq(2) .btnr');
	var btn3l = $('.content .box:eq(2) .btnl');
	var li3 = $('.content .box:eq(2) .btn li');
	$(li3).eq(0).addClass('active');
	$(btn3r).click(function(){
		clear3();
		num3++;
		if(num3 > 3){
			num3 = 3;
		}
		change3();
	});
	$(btn3l).click(function(){
		clear3();
		num3--;
		if(num3 < 0){
			num3 = 0;
		}
		change3();
	});
	for( var i = 0; i < length; i++){
		$(li3).eq(i).attr('index',i);
	}
	$(li3).click(function(){
		clear3();
		num3 = $(this).attr('index');
		change3();
	})
	function clear3(){
		$(li3).eq(num3).removeClass('active');
	}
	function change3(){
		$('.content .box:eq(2) .move').animate({left:-296*num3},1000);
		$(li3).eq(num3).addClass('active');
	}
//第四个

	var num4 = 0;
	var btn4r = $('.content .box:eq(3) .btnr');
	var btn4l = $('.content .box:eq(3) .btnl');
	var li4 = $('.content .box:eq(3) .btn li');
	$(li4).eq(0).addClass('active');
	$(btn4r).click(function(){
		clear4();
		num4++;
		if(num4 > 3){
			num4 = 3;
		}
		change4();
	});
	$(btn4l).click(function(){
		clear4();
		num4--;
		if(num4 < 0){
			num4 = 0;
		}
		change4();
	});
	for( var i = 0; i < length; i++){
		$(li4).eq(i).attr('index',i);
	}
	$(li4).click(function(){
		clear4();
		num4 = $(this).attr('index');
		change4();
	})
	function clear4(){
		$(li4).eq(num4).removeClass('active');
	}
	function change4(){
		$('.content .box:eq(3) .move').animate({left:-296*num4},1000);
		$(li4).eq(num4).addClass('active');
	}

//鼠标移入事件
	var cfather = $('.content .box');
	
		$(cfather).mouseenter(function(){
			$(this).find('span').fadeIn();
		});
		$(cfather).mouseleave(function(){
			$(this).find('span').fadeOut();
		});
	


});


//-------------------------------------------内容----------------------------------------




























