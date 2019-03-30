$(function(){
	var searchBtn = true;
	$(".searchLeft").click(function(){
		if(searchBtn==true){
			$(this).children("i").attr("class","iconfont icon-cuo-xi");
			$("#keywords").fadeIn();
			searchBtn = false;
		}else{
			$(this).children("i").attr("class","iconfont icon-chazhao");
			$("#keywords").fadeOut();
			searchBtn = true;
		}
		
	});
//	滚动页面进行监听
	
	
	$(document).scroll(function(){
		var keJianHeight =$(document).height();
		var gHidtop = $(this).scrollTop();
		var keshiHight = keJianHeight-626;
		var n = (gHidtop/keshiHight)*100;
		$(".coffeeTiao").css("width",n+"%");
		console.log(gHidtop);
		console.log(keJianHeight);
		if(gHidtop>=24){
			$(".coffeeSearch").css({"position":"fixed","top":0,"left":"0%","right":"0%"});
			
		}
		if(gHidtop==0){
			$(".coffeeSearch").css({"position":"absolute","top":24,"left":"10%","right":"10%"});			
		}
	});
		
//	窗口发生改变	
	//窗口大小变更事件
	$(window).resize(function() {
		var e = $(window).outerWidth();
		var num = e+17;
//		console.log(num);
		if(num<=768){
			var fBox1 = $(".wzHeightone").css("height");
			$(".imgBoxone").css("height",fBox1);
			var fBox2 = $(".wzHeightwo").css("height");
			$(".imgBoxtwo").css("height",fBox2);
			var fBox3 = $(".wzHeighthree").css("height");
			$(".imgBoxThree").css("height",fBox3);
		}			
	});
//	***********************
})