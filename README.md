# sideNavigation
좌우측슬라이드메뉴 만들기 귀찮아서 만듬

jquery 기반으로 좌우측에 사이드메뉴 생성기


side.html 파일을 열면 설명이있음


<script src="sidenav.min.js"></script>



//상세옵션설정
  // #gnb등 생성되는 메뉴 selete
	$('#qnb').sideNav({
		position: 'right',	//방향설정 left,right
		navWidth: 180,	//네비 넓이 (px이나 %를 쓰지않으면 기본 px로 들어감)
		maxWidth: 180,	//네비 최고 넓이 (px이나 %를 쓰지않으면 기본 px로 들어감)
		speed: 200,	//사이드메뉴 펼쳐지는 속도
		OpenBtn: '.qbtn',	//custom 열기 버튼 지정 - 예) '.openBtn'
		OpenBtnText:'퀵메뉴열기',
		CloseBtn: null,	//custom 닫기 버튼 지정 - 예) '.closeBtn'
		CloseBtnText:'퀵메뉴닫기',
		addTarget: '#lect-foot',	//사이드메뉴가 생성되는 위치
		btnTarget:'#lect-foot',	//custom 버튼이 없을때 기본 버튼 생성위치
		wrapClass: 'lect-wrap2',	//부모로 생성되는 class명칭
		bgOpacity: 0.8,		//메뉴 뒷배경 투명도
		bgColor: '#ff6600',	//메뉴 뒷배경 색상
		onSideBefore: function() {
			console.log('2세팅전');
		},
		onSideAfter: function() {
			console.log('2세팅완료');
		},
		onSideOn: function() {
			console.log('2메뉴펼침');
		},
		onSideOff: function() {
			console.log('2메뉴닫힘');
		}
	});
