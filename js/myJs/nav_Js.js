$(function(){
	var kaiGuan = true;
	$("#navButotm").click(function(){
		if(kaiGuan==true){
			$(".HappyCoffee").css("display","none");
			$(".headerDL").css("display","none");
			$(".navCaiDan").css("display","none");
			$(this).attr("class","iconfont icon-cuo-xi")
			$("#caiDanLan").fadeIn();	
			$("#header").css({"overflow-y":"scroll","position":"fixed"});
			$("html").attr("class","scrollNav");
			kaiGuan=false;
		}else{
			$(".HappyCoffee").css("display","block");
			$(".headerDL").css("display","block");
			$(".navCaiDan").css("display","inline-block");
			$(this).attr("class","iconfont icon-caidan");
			$("#caiDanLan").fadeOut();
			$("html").attr("class","");
			$("#header").css({"overflow-y":"hidden","position":""});
			kaiGuan=true;
		}
		
	})
	
//	首页的底部轮播
	var num = 0;
	
	$("#indexLeftBtn").click(function(){
		$("#indexRifhtBtn").show();
		var liWidth = $(".coffeLunBox>ul").css("left");
		console.log(liWidth);
		if(liWidth=="0px"){
			$(".coffeLunBox>ul").animate({"left":-288});
		}
		if(liWidth=="-288px"){
			$(".coffeLunBox>ul").animate({"left":-320});
			$("#indexLeftBtn").hide();
		}
		
	})
	$("#indexRifhtBtn").click(function(){
		$("#indexLeftBtn").show();
		var liWidth = $(".coffeLunBox>ul").css("left");
		console.log(liWidth);
		if(liWidth=="-288px"){
			$(".coffeLunBox>ul").animate({"left":0});
			$("#indexRifhtBtn").hide();
		}
		if(liWidth=="-320px"){
			$(".coffeLunBox>ul").animate({"left":-288});
			
		}
		
	})
})