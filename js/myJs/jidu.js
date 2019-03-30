$(function(){
	$(".one").click(function(){
		var haha=$(this).children("p").css("height");
		console.log(haha);
	});
	var kaiguan = true;
	var height="";
	$(".icon-jiantou-copy").click(function(){		
		if(kaiguan == true){
			var height = $(this).prev(".oneKuang").css("height");				
			console.log(height);
			$(this).prev(".oneKuang").css({"height":"auto"});
			kaiguan = false;
			$(this).css({"transform":'rotate(180deg)'});
		}else{
			$(this).prev(".oneKuang").css({"height":"122px"});
			$(this).css({"transform":'rotate(0deg)'});
			kaiguan = true;
		}		
	})
	
	
	
//	入口函数
})