//모바일메뉴 쉽게만들기위해 제작
(function( $ ){

	//기본옵션설정
	var basicOption = {

		position: 'left',
		// motion: 'slide',
		navWidth: 280,
		maxWidth: 280,
		// maxHeight:'100%',
		// marginTop: 0,
		// marginBottom: 0,
		speed: 500,
		// delay: 0,
		OpenBtn: null,
		OpenBtnText:'open navigation',
		CloseBtn: null,
		CloseBtnText:'close navigation',
		addTarget: '#lect-body',
		btnTarget:'#lect-body',
		wrapClass: 'lect-wrap',
		bgOpacity: 0.8,
		bgColor: '#000',

		onSideBefore: function() {return true;},
		onSideAfter: function() {return true;},
		onSideOn: function() {return true;},
		onSideOff: function() {return true;}

	};
	//prototype 설정
	$.fn.sideNav = function(option){	
		//원본대신에 복사한 개체 사용
		var sideMenu = {},
		el = this.clone();	

		if($(el).data('sideNav')){return;}
		// install 함수
		var init = function(){	

			if($(el).data('sideNav')){return;}
			sideMenu.settings = $.extend({},basicOption,option);

			//로딩시작 callback
			sideMenu.settings.onSideBefore.call('',true);
			setup();
		};
		//초기설정
		var setup = function(){	
			//변수선언
			var nBtn,nBtnClose,snavPos,wrapPos;	

			//방향설정
			if(sideMenu.settings.position == "right"){
				snavPos = "right";
				wrapPos = "left";
			}else if(sideMenu.settings.position == "left"){
				snavPos = "left";
				wrapPos = "right";
			};

			//먼저 body를 감쌈
			if($(wrapId).length < 1){
				var wrapId = sideMenu.settings.addTarget.replace('#','');
				$('body').wrapInner('<div id="'+wrapId+'" style="position:relative; '+wrapPos+':0;"></div>').append('<div class="'+sideMenu.settings.wrapClass+'-bg" style="position:fixed; top:0;left:0;bottom:0;right:0; opacity:'+sideMenu.settings.bgOpacity+'; background:'+sideMenu.settings.bgColor+'; z-index:2000;display:none;"></div>');
			}
			if(!isNaN(sideMenu.settings.navWidth)){
				sideMenu.settings.navWidth = sideMenu.settings.navWidth+'px';
			};
			el.attr('class','').attr('id','').wrap('<div class="'+sideMenu.settings.wrapClass+'" style="position:fixed; '+snavPos+':-'+sideMenu.settings.navWidth+';top:0;bottom:0; width:'+sideMenu.settings.navWidth+'; z-index:2001;"><nav class="'+sideMenu.settings.wrapClass+'-gnb"></nav></div>');
			sideMenu.obj = el.parent();
			
			// var elTag = el[0].nodeName.toLowerCase();
			$(sideMenu.settings.addTarget).prepend(sideMenu.obj.parent());

			//버튼세팅
			if(sideMenu.settings.OpenBtn==null){
				$(sideMenu.settings.btnTarget).prepend('<a class="'+sideMenu.settings.wrapClass+'-btn'+'" style="cursor:pointer">'+sideMenu.settings.OpenBtnText+'</a>');
				nBtn = $('.'+sideMenu.settings.wrapClass+'-btn');
				btnsetting(nBtn);
			}else{
				btnsetting($(sideMenu.settings.OpenBtn));
			};
			//버튼세팅
			if(sideMenu.settings.CloseBtn==null){
				$('.'+sideMenu.settings.wrapClass).prepend('<a class="'+sideMenu.settings.wrapClass+'-close'+'" style="cursor:pointer">'+sideMenu.settings.CloseBtnText+'</a>');
				nBtnClose = $('.'+sideMenu.settings.wrapClass+'-close');
				btnsetting(nBtnClose);
			}else{
				btnsetting($(sideMenu.settings.OpenBtn));
			};


			//로딩완료 callback
			sideMenu.settings.onSideAfter.call('',true);
		};


		//버튼액션
		var btnsetting = function(Btn){
			if(sideMenu.settings.position == "right"){
				Btn.unbind('click').bind('click',function(){
					if(!$('body').hasClass('sideNav-active')){
						$(sideMenu.settings.addTarget).animate({'left':'-'+sideMenu.settings.navWidth},sideMenu.settings.speed);
						$('.'+sideMenu.settings.wrapClass).stop().animate({'right':0},sideMenu.settings.speed);
						$('.'+sideMenu.settings.wrapClass+'-bg').stop().fadeIn(sideMenu.settings.speed);
						//메뉴오픈 callback
						sideMenu.settings.onSideOn.call('',true,Btn);
					}else{
						$(sideMenu.settings.addTarget).animate({'left':0},sideMenu.settings.speed);
						$('.'+sideMenu.settings.wrapClass).stop().animate({'right':'-'+sideMenu.settings.navWidth},sideMenu.settings.speed);
						$('.'+sideMenu.settings.wrapClass+'-bg').stop().fadeOut(sideMenu.settings.speed);
						//메뉴클로즈 callback
						sideMenu.settings.onSideOff.call('',false,Btn);
					}
					$('body').toggleClass('sideNav-active');
				});
			}else if(sideMenu.settings.position == "left"){
				Btn.unbind('click').bind('click',function(){
					if(!$('body').hasClass('sideNav-active')){
						$(sideMenu.settings.addTarget).animate({'right':'-'+sideMenu.settings.navWidth},sideMenu.settings.speed);
						$('.'+sideMenu.settings.wrapClass).stop().animate({'left':0},sideMenu.settings.speed);
						$('.'+sideMenu.settings.wrapClass+'-bg').stop().fadeIn(sideMenu.settings.speed);
						//메뉴오픈 callback
						sideMenu.settings.onSideOn.call('',true,Btn);
					}else{
						$(sideMenu.settings.addTarget).animate({'right':0},sideMenu.settings.speed);
						$('.'+sideMenu.settings.wrapClass).stop().animate({'left':'-'+sideMenu.settings.navWidth},sideMenu.settings.speed);
						$('.'+sideMenu.settings.wrapClass+'-bg').stop().fadeOut(sideMenu.settings.speed);
						//메뉴클로즈 callback
						sideMenu.settings.onSideOff.call('',false,Btn);
					}
					$('body').toggleClass('sideNav-active');
				});
			};
		};

		init();
	};


	

})( jQuery );

