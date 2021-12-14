//--選單上下滑入效果
	var scrollTop =
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop;
	var productHeight = $('.products').outerHeight(true);
	var products = $('.products');
	var news = $('.news');
	var $unitBtn = $('.unitsList .unitBtn');
	var _showUnits = 0;
	var num = 0;
	var $unitLi = $('.unitsList .unitBtn').eq(_showUnits).addClass('active');
	$(window).on('load',function(){
		$($unitLi.find('a')).siblings().hide();
	});

	window.addEventListener("scroll",function(){
		var header = document.querySelector('header');
		header.classList.toggle("sticky",window.scrollY > 0);
		if(window.scrollY > 0){
			$('#logoDark').removeClass('dark');
			$('#cart, #menuBtn').addClass('white');
			$('#logoWhite').removeClass('m_dark');
		}else{
			$('#logoDark').addClass('dark');
			$('#cart, #menuBtn').removeClass('white');		
			$('#logoWhite').addClass('m_dark');
		}
		if(window.scrollY > 600){
			$('.backToTop').fadeIn();
		}else{
			$('.backToTop').fadeOut();
		}
		//handleScroll();
		//deactivated();
		
		function handleScroll() {
				// if (this.$route.path != "/") {
				//   return;
				// }
				var scrollTop =
					window.pageYOffset ||
					document.documentElement.scrollTop ||
					document.body.scrollTop;

				//console.log(scrollTop)
				var item1 = document.getElementById("item1");

				// if (
				// 	this.section2.number1 ||
				// 	this.section2.number2 ||
				// 	this.section2.number3
				// ) {
				// 	this.section2.number1 = parseInt(this.section2.number1, 10);
				// 	this.section2.number2 = parseInt(this.section2.number2, 10);
				// 	this.section2.number3 = parseInt(this.section2.number3, 10);

				// 	if (this.item1_once == false && scrollTop >= item1.top) {
				// 		this.item1_once = true;
				// 		this.numFun(0, this.section2.number1, 10, "since");
				// 		this.numFun(0, this.section2.number2, 1, "available");
				// 		this.numFun(0, this.section2.number3, 1, "facilities");
				// 	}
				// }
				var item2 = document.getElementById("scrollView");
				var scrollDiv = document.getElementById("scrollDiv");
				var item2 = document.getElementById("scrollView");

				//console.log(scrollTop)
				//console.log(item2.offsetTop)
				//console.log(item2.offsetHeight)
				//var scrolldiv = document.getElementById("scrolldiv");
				if (
					scrollTop >= item2.offsetTop &&
					scrollTop <=
					item2.offsetTop + (item2.offsetHeight - scrollDiv.offsetHeight)
				) {
					scrollDiv.classList.add("position-fixed");

					scrollDiv.style.top = 0 + "px";

					if (
						scrollTop >=
						item2.offsetTop +
						((item2.offsetHeight - scrollDiv.offsetHeight) / 5) * 4
					) {
						this.selectsquare = 4;
					} else if (
						scrollTop >=
						item2.offsetTop +
						((item2.offsetHeight - scrollDiv.offsetHeight) / 5) * 3
					) {
						this.selectsquare = 3;
						this.changeproductData();
					} else if (
						scrollTop >=
						item2.offsetTop +
						((item2.offsetHeight - scrollDiv.offsetHeight) / 5) * 2
					) {
						this.selectsquare = 2;
						this.changeproductData();
					} else if (
						scrollTop >=
						item2.offsetTop +
						((item2.offsetHeight - scrollDiv.offsetHeight) / 5) * 1
					) {
						this.selectsquare = 1;
						this.changeproductData();
					} else {
						this.selectsquare = 100;
					}
				} else if (
					scrollTop >
					item2.offsetTop + (item2.offsetHeight - scrollDiv.offsetHeight)
				) {
					scrollDiv.style.top = -1 *
						(scrollTop -
							item2.offsetHeight -
							item2.offsetTop +
							scrollDiv.offsetHeight) +
						"px";
				} else {
					scrollDiv.style.top = item2.offsetTop - scrollTop + "px";
				}
			}
		function deactivated() {
				window.removeEventListener("scroll", this.handleScroll);
			}

		//--左側點點選單
		if($('.unitsList').offset().top >= $('.home').offset().top){			
			$('.unitsList').removeClass('blue');
			$('.unitsList .unitBtn').eq(_showUnits).addClass('active');
			$('.unitsList .unitBtn').eq(1).removeClass('active');
			$('.unitsList .unitBtn').eq(2).removeClass('active');
			$('.unitsList .unitBtn').eq(3).removeClass('active');
			$('.unitsList .unitBtn').eq(4).removeClass('active');


		}

		if($('.unitsList').offset().top >= $('.history').offset().top){
			$('.unitsList').removeClass('blue');
			$('.unitsList .unitBtn').eq(_showUnits).removeClass('active');
			$('.unitsList .unitBtn').eq(1).addClass('active');
			$('.unitsList .unitBtn').eq(2).removeClass('active');
			$('.unitsList .unitBtn').eq(3).removeClass('active');
	
		}

		if($('.unitsList').offset().top >= $('.products').offset().top){
			$('.unitsList').addClass('blue');
			$('.unitsList .unitBtn').eq(1).removeClass('active');
			$('.unitsList .unitBtn').eq(2).addClass('active');
			$('.unitsList .unitBtn').eq(3).removeClass('active');
			$('.unitsList .unitBtn').eq(4).removeClass('active');
			//num = 0;						
			//console.log('true');
		}

		if($('.unitsList').offset().top < $('.products').offset().top){
			removeClass();
		}

		if($('.unitsList .track').offset().top >= $('.news').offset().top){
			$('.unitsList').removeClass('blue');
			$('.unitsList .unitBtn').eq(3).addClass('active');
			$('.unitsList .unitBtn').eq(1).removeClass('active');
			$('.unitsList .unitBtn').eq(2).removeClass('active');
			$('.unitsList .unitBtn').eq(4).removeClass('active');		
			//console.log('false');
			}

		if($('.unitsList .track').offset().top >= $('.blog').offset().top){
			$('.unitsList').addClass('blue');
			$('.unitsList .unitBtn').eq(1).removeClass('active');
			$('.unitsList .unitBtn').eq(4).addClass('active');
			$('.unitsList .unitBtn').eq(3).removeClass('active');
			$('.unitsList .unitBtn').eq(2).removeClass('active');
		}

		});



		$unitBtn.on('click',unitScrollTop)
		// .find('a').focus(function(){
		// 	this.blur();
		// });
		function unitScrollTop(e) {
			var $this = $(this);
			var _clickUnit = $this.find('a').attr('href');
			
			//console.log(_clickUnit);
			$this.addClass('active').siblings('.active').removeClass('active');
			if($unitBtn.length){
				var position = $($(this).attr("href")).offset().top;
				$('html, body').animate({
					scrollTop: position
				});
			}			
			$(_clickUnit).stop(false, true);
			return false;			
		}





//--menu control

	$('.menuBtn').click(function(){
		if($('.menu_wrap').css('display') == 'none'){
			$('.menu_wrap').fadeIn();
		}else{
			$('.menu_wrap').fadeOut();
		}
	});
	$('.close').click(function(){
		$('.menu_wrap').fadeOut();
	});
	$('.magnifier').click(function(e){
		e.preventDefault();
		var $this = $(this);

		if($('#searchBar').css('display') == 'none'){
			$('#searchBar').fadeIn();

		}else{
			$('#searchBar').fadeOut();

		}

	});
	$('.logo').on('click',function(){
		window.location.href = "index.html"
	});

	function newsMore(){
		$(this).toggleClass('active');
	}

	$('.news.more').on('click',newsMore);

//--手機版選單
	$('.mobile .home,.mobile stockists,.mobile .newsCenter,.mobile .blogs').click(function(){

		if($(this).children('ul.sub').css('display') == 'none'){
			$(this).addClass('act');
			$(this).children('ul.sub').slideDown();
			$('#m-terms').fadeOut();
		}else{
			$(this).removeClass('act');
			$(this).children('ul.sub').slideUp();
			$('#m-terms').fadeIn();

		}

	});

	$('.status').on('click',function(){
		if($('.statusInfo').css('opacity') == 0){
			$('.statusInfo').animate(
				{
					opacity:"1",
					height:"2em"
				},
				500
			);
		}else{
			$('.statusInfo').animate(
				{
					opacity:"0",
					height:"1px"
				},
				500
			);
		}
	});

//--右上方選單切換 login, profile, status,
	$('.menu-idv .login, .menu-idv .showName, .menu-idv .profile, .menu-idv .logout').click(function(){
		event.preventDefault();
		$('.menu-status').slideToggle();
	})
	$('.menu-status .showName').click(function(){
		$('.menu-status').slideUp();
		$('.menu-idv .login').parent().removeClass('block').addClass('none');
		$('.menu-idv .showName').parent().removeClass('none').addClass('block');
		$('.menu-idv .profile').parent().removeClass('block').addClass('none');
		$('.menu-idv .logout').parent().removeClass('block').addClass('none');
	})

	$('.menu-status .login').click(function(){
		$('.menu-status').slideUp();
		$('.menu-idv .login').parent().removeClass('none').addClass('block');
		$('.menu-idv .showName').parent().removeClass('block').addClass('none');
		$('.menu-idv .profile').parent().removeClass('block').addClass('none');
		$('.menu-idv .logout').parent().removeClass('block').addClass('none');
	})

	$('.menu-status .profile').click(function(){
		$('.menu-status').slideUp();
		$('.menu-idv .login').parent().removeClass('block').addClass('none');
		$('.menu-idv .showName').parent().removeClass('block').addClass('none');
		$('.menu-idv .profile').parent().removeClass('none').addClass('block');
		$('.menu-idv .logout').parent().removeClass('block').addClass('none');
	})

	$('.menu-status .logout').click(function(){
		$('.menu-status').slideUp();
		$('.menu-idv .login').parent().removeClass('block').addClass('none');
		$('.menu-idv .showName').parent().removeClass('block').addClass('none');
		$('.menu-idv .profile').parent().removeClass('block').addClass('none');
		$('.menu-idv .logout').parent().removeClass('none').addClass('block');
	})

	$('.menu-status .showName').click(function(){
		$('.menu-status').slideUp();
		$('.menu-idv .login').parent().removeClass('block').addClass('none');
		$('.menu-idv .showName').parent().removeClass('none').addClass('block');
		$('.menu-idv .profile').parent().removeClass('block').addClass('none');
		$('.menu-idv .logout').parent().removeClass('block').addClass('none');

		$('.menu-status .login').parent().removeClass('none').addClass('block');
		$('.menu-status .showName').parent().removeClass('block').addClass('none');
		$('.menu-status .profile').parent().removeClass('none').addClass('block');
		$('.menu-status .logout').parent().removeClass('none').addClass('block');		
	})	
	$('.menu-status .login').click(function(){
		$('.menu-status').slideUp();
		$('.menu-idv .login').parent().removeClass('none').addClass('block');
		$('.menu-idv .showName').parent().removeClass('block').addClass('none');
		$('.menu-idv .profile').parent().removeClass('block').addClass('none');
		$('.menu-idv .logout').parent().removeClass('block').addClass('none');

		$('.menu-status .login').parent().removeClass('block').addClass('none');
		$('.menu-status .showName').parent().removeClass('none').addClass('block');
		$('.menu-status .profile').parent().removeClass('none').addClass('block');
		$('.menu-status .logout').parent().removeClass('none').addClass('block');		
	})	
	$('.menu-status .profile').click(function(){
		$('.menu-status').slideUp();
		$('.menu-idv .login').parent().removeClass('block').addClass('none');
		$('.menu-idv .showName').parent().removeClass('block').addClass('none');
		$('.menu-idv .profile').parent().removeClass('none').addClass('block');
		$('.menu-idv .logout').parent().removeClass('block').addClass('none');

		$('.menu-status .login').parent().removeClass('none').addClass('block');
		$('.menu-status .showName').parent().removeClass('none').addClass('block');
		$('.menu-status .profile').parent().removeClass('block').addClass('none');
		$('.menu-status .logout').parent().removeClass('none').addClass('block');		
	})	

	$('.menu-status .logout').click(function(){
		$('.menu-status').slideUp();
		$('.menu-idv .login').parent().removeClass('block').addClass('none');
		$('.menu-idv .showName').parent().removeClass('block').addClass('none');
		$('.menu-idv .profile').parent().removeClass('block').addClass('none');
		$('.menu-idv .logout').parent().removeClass('none').addClass('block');

		$('.menu-status .login').parent().removeClass('none').addClass('block');
		$('.menu-status .showName').parent().removeClass('none').addClass('block');
		$('.menu-status .profile').parent().removeClass('none').addClass('block');
		$('.menu-status .logout').parent().removeClass('none').addClass('none');		
	})





//--首頁頁籤切換
	var _showTab = 0;

	var $tabBtn = $('.info-chart .tabsList .tabBtn');			
	var $tabLi = $('.info-chart .tabsList .tabBtn').eq(_showTab).addClass('active');
	$(window).on('load',function(){
		$($tabLi.find('a').attr('href')).siblings().hide();
	});
	$tabBtn.click(function(e) {
		var $this = $(this);
		var _clickTab2 = $this.find('a').attr('href');
		$this.addClass('active').siblings('.active').removeClass('active');
		$(_clickTab2).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});


	var $new_tabBtn = $('.news-wrap .tabsList .tabBtn');			
	var $new_tabLi = $('.news-wrap .tabsList .tabBtn').eq(_showTab).addClass('active');
	$(window).on('load',function(){
		$($new_tabLi.find('a').attr('href')).siblings().hide();
	});
	$new_tabBtn.click(function(e) {
		var $this = $(this);
		var _clickTab = $this.find('a').attr('href');
		$this.addClass('active').siblings('.active').removeClass('active');
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});

	var $blog_tabBtn = $('.blog-wrap .tabsList .tabBtn');			
	var $blog_tabLi = $('.blog-wrap .tabsList .tabBtn').eq(_showTab).addClass('active');
	$(window).on('load',function(){
		$($blog_tabLi.find('a').attr('href')).siblings().hide();
	});
	$blog_tabBtn.click(function(e) {
		var $this = $(this);
		var _clickTab = $this.find('a').attr('href');
		$this.addClass('active').siblings('.active').removeClass('active');
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});


//--首頁 slider
	$('.cardsCt').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
		items: 1,
		nav: true
		},
		700: {
		items: 1,
		nav: true,
		margin: 20
		},
		1000: {
		items: 3,
		nav: true,
		margin: 20
		}
	}
	})

	$('.main-banner').owlCarousel({
	loop: true,
	margin: 0,
	responsiveClass: true,
	responsive: {
		0: {
		items: 1,
		nav: true,
		dot: false
		},
		700: {
		items: 1,
		nav: true,
		dot: false
		},
		1000: {
		items: 1,
		nav: true,
		dot: true
		}
	}
	});


//--首頁產品菱形控制
	function layerMove1(num){
		num = 1;
		if($('#sp1').css('opacity') == 0 && num == 1){
			//console.log('test1');
			$('.layer-diamond').removeClass('act1-1');
			$('.layer-diamond').removeClass('act2-1');
			$('.layer-diamond').removeClass('act3-1');
			$('.layer-diamond').removeClass('act4-1');
			$('.layer-diamond').removeClass('act2');
			$('.layer-diamond').removeClass('act3');
			$('.layer-diamond').removeClass('act4');
			$('.layer-diamond').addClass('act1');
		}else if($('#sp1').css('opacity') == 1 ){
			$('.layer-diamond').removeClass('act1');
			$('.layer-diamond').addClass('act1-1');
			return	
		}		
	}
	function layerMove2(num){
		num = 2;
		if($('#sp2').css('opacity') == 0  && num == 2){
			$('.layer-diamond').removeClass('act1-1');
			$('.layer-diamond').removeClass('act2-1');
			$('.layer-diamond').removeClass('act3-1');
			$('.layer-diamond').removeClass('act4-1');
			$('.layer-diamond').removeClass('act1');
			$('.layer-diamond').removeClass('act3');
			$('.layer-diamond').removeClass('act4');			
			$('.layer-diamond').addClass('act2');
		}else if($('#sp2').css('opacity') == 1 ){
			$('.layer-diamond').removeClass('act2');
			$('.layer-diamond').addClass('act2-1');			
		}		
	}	
	function layerMove3(num){
		num = 3;
		if($('#sp3').css('opacity') == 0  && num == 3 ){
			$('.layer-diamond').removeClass('act1-1');
			$('.layer-diamond').removeClass('act2-1');
			$('.layer-diamond').removeClass('act3-1');
			$('.layer-diamond').removeClass('act4-1');
			$('.layer-diamond').removeClass('act1');
			$('.layer-diamond').removeClass('act2');
			$('.layer-diamond').removeClass('act4');			
			$('.layer-diamond').addClass('act3');
		}else if($('#sp3').css('opacity') == 1 ){
			$('.layer-diamond').removeClass('act3');
			$('.layer-diamond').addClass('act3-1');			
		}		
	}
	function layerMove4(num){
		num = 4;
		if($('#sp4').css('opacity') == 0  && num == 4){
			$('.layer-diamond').removeClass('act1-1');
			$('.layer-diamond').removeClass('act2-1');
			$('.layer-diamond').removeClass('act3-1');
			$('.layer-diamond').removeClass('act4-1');
			$('.layer-diamond').removeClass('act1');
			$('.layer-diamond').removeClass('act2');
			$('.layer-diamond').removeClass('act3');			
			$('.layer-diamond').addClass('act4');
		}else if($('#sp4').css('opacity') == 1 ){
			$('.layer-diamond').removeClass('act4');
			$('.layer-diamond').addClass('act4-1');			
		}		
	}
	function removeClass(num){
		//num = 0;
		$('.layer-diamond').removeClass('act1-1');
		$('.layer-diamond').removeClass('act2-1');
		$('.layer-diamond').removeClass('act3-1');
		$('.layer-diamond').removeClass('act4-1');
		$('.layer-diamond').removeClass('act1');
		$('.layer-diamond').removeClass('act2');
		$('.layer-diamond').removeClass('act3');		
		$('.layer-diamond').removeClass('act4');
		return num = 0;		
	}

	$('.layer1').on('click',layerMove1);
	$('.layer2').on('click',layerMove2);
	$('.layer3').on('click',layerMove3);
	$('.layer4').on('click',layerMove4);
	$('.tabBtn.tab1,.tabBtn.tab2').on('click',removeClass);



//--產品右側上下按鈕

	$('.round-arrow.top').on('click',upScroll)
	function upScroll(e) {
		if(window.scrollY + productHeight > products.offset().top){
			$('html, body').animate({
				//scrollTop: $("#elementtoScrollToID").offset().top
				scrollTop: $(window).scrollTop() - productHeight
			});
			num -= 1;
			console.log(num);
			if( num < 0 || num == -1){
				num = 0;
				removeClass();
			}			
			if( num == 0){
				removeClass();
				console.log(0);				
			}else if( num == 1){
				layerMove1();
				console.log(1);
			}else if( num == 2){
				layerMove2();
				console.log(2);
			}else if( num == 3){
				layerMove3();
				console.log(3);
			}else if( num == 4){
				layerMove4();
				console.log(4);
			}else{
				removeClass();
				console.log(5);
			}
			
			return;		
		}else{
			removeClass();
			$('html, body').animate({
				scrollTop: $(".history").offset().top
			});
			num = 0;
			console.log(0);		
		}
		
	}

	$('.round-arrow.down').on('click',downScroll)
	function downScroll(e) {	

		var bottom = $(window).height() - productHeight;
		//console.log(window.scrollY + productHeight < news.offset().top);
		
		if(window.scrollY + productHeight < news.offset().top ){
			$('html, body').animate({
				scrollTop: $(window).scrollTop() + productHeight
			});
			num += 1;
			if( num > 4){
				num = 4;
				layerMove4();
			}
			console.log(num);
			if( num == 0){
				removeClass();
				console.log(0);
			}else if( num == 1){
				layerMove1();
				console.log(1);
			}else if( num == 2){
				layerMove2();
				console.log(2);
			}else if( num == 3){
				layerMove3();
				console.log(3);
			}else if( num == 4){
				layerMove4();
				console.log(4);
			}else{
				//removeClass();	
				layerMove4();
			}
			return;
		}else{
			removeClass();
			$('html, body').animate({
				scrollTop: $(".news").offset().top
			});
			num = 0;
			console.log(0);				
		}
		//console.log(window.scrollY);
	}	




//產品計算隱藏跟顯示
	$('.count .closeBtn').on('click',function(){
		$(this).parent().fadeOut();
		$(this).parent().next('.list-price').animate(
			{
				opacity:1,

			},500
		).css('pointer-events','visible');
	});
	$('.list-price').on('click',function(){
		$(this).prev('.count').fadeIn();
		$(this).animate({
			opacity:0,
		},500).css('pointer-events','none');
	});

//最上方關閉按鈕
	$('.close-row').on('click',function(){
		$('.login-body').fadeOut();
	});


//--關於我們 option change
	var _showTab = 0;
	var $subBtn = $('.article-wrap .tabsList .tabBtn');			
	var $defaultLi = $('.article-wrap .tabsList .tabBtn').eq(_showTab).addClass('active');

	$(window).on('load',function(){
		$($defaultLi.find('a').attr('href')).siblings().hide();
	});
	$subBtn.click(function(e) {
		var $this = $(this);
		var _clickTab = $this.find('a').attr('href');
		$this.addClass('active').siblings('.active').removeClass('active');
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});

//--關於我們 slider
	$('.cardsCt-').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
		items: 1,
		nav: false
		},
		700: {
		items: 1,
		nav: false,
		margin: 20
		},
		1000: {
		items: 3,
		nav: false,
		margin: 20
		}
	}
	})

//--關於我們 cards linkDemo
	function link(){
		window.location.href ="blog-inner.html";		
	}
	$('.card').on('click',link);

//--頁籤切換 change

	var _showTab = 0;
	var $subBtn = $('.article-wrap .tabsList .tabBtn, .list-wrap .tabsList .tabBtn');			
	var $defaultLi = $('.article-wrap .tabsList .tabBtn, .list-wrap .tabsList .tabBtn').eq(_showTab).addClass('active');

	$(window).on('load',function(){
		$($defaultLi.find('a').attr('href')).siblings().hide();
	});
	$subBtn.click(function(e) {
		var $this = $(this);
		var _clickTab = $this.find('a').attr('href');
		$this.addClass('active').siblings('.active').removeClass('active');
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});

	var $tabBtn = $('.info-chart .tabsList .tabBtn');			
	var $tabLi = $('.info-chart .tabsList .tabBtn').eq(_showTab).addClass('active');
	$(window).on('load',function(){
		$($tabLi.find('a').attr('href')).siblings().hide();
	});
	$tabBtn.click(function(e) {
		var $this = $(this);
		var _clickTab2 = $this.find('a').attr('href');
		$this.addClass('active').siblings('.active').removeClass('active');
		$(_clickTab2).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});


//--產品頁
	//地區展開
	function link(){
		window.location.href ="";		
	}
	$('#hkBtn').on('click',function(){
		if($('.hkArea .wrap').css('display') == 'none'){
			$('.hkArea .wrap').slideDown();
			$('.hkArea .AreaBtn').addClass('rotate');
		}else{
			$('.hkArea .wrap').slideUp();
			$('.hkArea .AreaBtn').removeClass('rotate');
		}
	});
	$('#ovBtn').on('click',function(){
		if($('.overSeaArea .wrap').css('display') == 'none'){
			$('.overSeaArea .wrap').slideDown();
			$('.overSeaArea .AreaBtn').addClass('rotate');
		}else{
			$('.overSeaArea .wrap').slideUp();
			$('.overSeaArea .AreaBtn').removeClass('rotate');
		}		
	});

//個人資料
	//加減計算機
	var num = 0;
	var countNum = $('.count input').val(num);
	countNum;
	function plusNum(){
		num += 1;	
		$('.count input').val(num);
	}
	function minusNum(){
		if($('.count input').val() >= 1){
		num -= 1;	
		}else{
		num = 0;
		}
		$('.count input').val(num);	
	}

	$('.plus').on('click',plusNum);
	$('.minus').on('click',minusNum);



	//最上方按鈕
	$('.close-row').on('click',function(){
		$('.profile-body').fadeOut();
	});

	//profile change password
	$('#changePassword-pr').click(function(){
		event.preventDefault();
		$(this).fadeOut();
		if($('.cf-password').css('display') == 'none'){
			$('.cf-password').slideDown();
			$('.cf-password').css('display','flex');
		}else{
			$('.cf-password').slideUp();
		}	
	});
	//profile update password
	
	$('#upPassword-pr').click(function(){
		event.preventDefault();
		$('.cf-password').slideUp();
		$('#changePassword-pr').fadeIn();
	});