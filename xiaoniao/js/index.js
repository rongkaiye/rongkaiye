//banner轮播
	(function(){
		var oDiv = $('#banner');
		var oPrev = oDiv.find(".prev");
		var oNext = oDiv.find(".right");
		var aSpan = oDiv.find(".middle span");
		var animateFater = null;
		var nowIndex = 0;
		
		//进来的时候先运动一下第一页(这里只需要将banner内部的image运动，所以把image运动单独提出来放一个函数)
		animateFater = $(".banner_picture").eq(0);
		animateImage();
		//右点击事件
		oNext.click(function(){
			if( nowIndex < ($(".banner_change .middle span").length-1) ){
				nowIndex++;
			}else{
				nowIndex = 0;
			}
			bannerAnimate();
		});
		//左点击事件
		oPrev.click(function(){
			if( nowIndex >0 ){
				nowIndex--;
			}else{
				nowIndex = ($(".banner_change .middle span").length-1)
			}
			bannerAnimate();
		});
		//指示点点击
		aSpan.click(function(){
			nowIndex = $(this).index();
			bannerAnimate();
		})

		function animateImage(){
			animateFater.find(".image_1").show().addClass("animated  fadeInLeft");
			setTimeout(function(){
				animateFater.find(".image_2").show().addClass("animated  bounceInRight");
				animateFater.find(".image_3").show().addClass("animated  fadeIn");
			},300);
		}	
		function bannerAnimate(){
			
			$(".banner_change .middle span").removeClass("now");
			$(".banner_change .middle span").eq(nowIndex).addClass("now");
			$(".banner_picture").fadeOut(200);
			animateFater = $(".banner_picture").eq(nowIndex);
			animateFater.fadeIn(200);
			animateImage()
		}
		
	})();