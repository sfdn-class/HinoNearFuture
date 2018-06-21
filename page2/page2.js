// page2.js

let buttonCounter = 0;

//カテゴリ選択　ここから
function hitoClick(){
	$('#item2').animate({'height': 'hide'},200,function(){});

	setTimeout(function(){
		document.getElementById("itemButtons1").innerHTML =
		'<a href="#a1" id="category1" class="button2" onclick="a1();"><p class="butText2">子供が住みやすい</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="a2();"><p class="butText2">近所間でのコミュニティがある</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="a3();"><p class="butText2">コミュニティの活動拠点となる</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="a4();"><p class="butText2">人が集まり車の利便性が高い</p></a>'+
		'<a href="#a1" id="category1" class="button" onclick="back();"><p class="butText2">もどる</p></a>';

		buttonCounter = 1;
		if(window.innerWidth > 768) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr');
		}

		$('#item1').animate({'height': 'show'},200,function(){});
	},200);
}

function kurumaClick(){
	$('#item2').animate({'height': 'hide'},200,function(){});

	setTimeout(function(){
		document.getElementById("itemButtons1").innerHTML =
		'<a href="#a1" id="category1" class="button2" onclick="a4();"><p class="butText2">人が集まり車の利便性が高い</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="b1();"><p class="butText2">モノレールも車も使いやすく賑わいがある</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="b2();"><p class="butText2">車利用者へ向けたサービス施設がある</p></a>'+
		'<a href="#a1" id="category1" class="button" onclick="back();"><p class="butText2">もどる</p></a>';

		buttonCounter = 2;
		if(window.innerWidth > 768) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr 1fr');
		}

		$('#item1').animate({'height': 'show'},200,function(){});
	},200);
}

function densyaClick(){
	$('#item2').animate({'height': 'hide'},200,function(){});

	setTimeout(function(){
		document.getElementById("itemButtons1").innerHTML =
		'<a href="#a1" id="category1" class="button2" onclick="b3();"><p class="butText2">鉄道の駅から近い</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="b1();"><p class="butText2">モノレールの駅から近い</p></a>'+
		'<a href="#a1" id="category1" class="button" onclick="back();"><p class="butText2">もどる</p></a>';

		buttonCounter = 3;
		if(window.innerWidth > 768) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr');
		}

		$('#item1').animate({'height': 'show'},200,function(){});
	},200);
}

function sizennClick(){
	$('#item2').animate({'height': 'hide'},200,function(){});

	setTimeout(function(){
		document.getElementById("itemButtons1").innerHTML =
		'<a href="#a1" id="category1" class="button2" onclick="c1();"><p class="butText2">昔ながらの里山風景が残る</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="c2();"><p class="butText2">多様な生き物と共に暮らす</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="a1();"><p class="butText2">子供達が街の小さな自然と交流できる</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="a3();"><p class="butText2">緑のオアシスでコミュニティの活動拠点になる</p></a>'+
		'<a href="#a1" id="category1" class="button" onclick="back();"><p class="butText2">もどる</p></a>';

		buttonCounter = 1;
		if(window.innerWidth > 768) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr');
		}

		$('#item1').animate({'height': 'show'},200,function(){});
	},200);
}

function tiikiClick(){
	$('#item2').animate({'height': 'hide'},200,function(){});

	setTimeout(function(){
		document.getElementById("itemButtons1").innerHTML =
		'<a href="#a1" id="category1" class="button2" onclick="d1();"><p class="butText2">散歩しながら地域の野菜が手に入る</p></a>'+
		'<a href="#a1" id="category1" class="button" onclick="back();"><p class="butText2">もどる</p></a>';

		buttonCounter = 4;
		if(window.innerWidth > 768) {
			$('.item').css('grid-template-columns', '1fr 1fr');
		}

		$('#item1').animate({'height': 'show'},200,function(){});
	},200);
}

function sonotaClick(){
	$('#item2').animate({'height': 'hide'},200,function(){});

	setTimeout(function(){
		document.getElementById("itemButtons1").innerHTML =
		'<a href="#a1" id="category1" class="button2" onclick="e1();"><p class="butText2">農地と住宅地が共存している</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="e2();"><p class="butText2">歩くことが快適な住宅地</p></a>'+
		'<a href="#a1" id="category1" class="button2" onclick="e3();"><p class="butText2">工場と住宅地が共存している</p></a>'+
		'<a href="#a1" id="category1" class="button" onclick="back();"><p class="butText2">もどる</p></a>';

		buttonCounter = 2;
		if(window.innerWidth > 768) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr 1fr');
		}

		$('#item1').animate({'height': 'show'},200,function(){});
	},200);
}

function back(){
	$('#item1').animate({'height': 'hide'},200,function(){});

	setTimeout(function(){
			buttonCounter = 0;
			if(window.innerWidth > 768) {
				$('.item').css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr 1fr');
			}

			$('#item2').animate({'height': 'show'},200,function(){});
	},200);
}
//カテゴリ選択　ここまで

//レスポンシブ
$(window).on('load resize', function() {
  if (window.innerWidth < 768) {
    $('.item').css('grid-template-columns', '1fr 1fr 1fr');
  }else{
		if (buttonCounter == 0) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr 1fr');
		}else if (buttonCounter == 1) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr');
		}else if (buttonCounter == 2) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr 1fr');
		}else if (buttonCounter == 3) {
			$('.item').css('grid-template-columns', '1fr 1fr 1fr');
		}else if (buttonCounter == 4) {
			$('.item').css('grid-template-columns', '1fr 1fr');
		}
	}
});


var up_timer;

function getPosition(){
	horizontal = document.body.scrollLeft || document.documentElement.scrollLeft;
	vertical = document.body.scrollTop  || document.documentElement.scrollTop;
}

function pageup(x,y){
	if (up_timer) {
		clearTimeout(up_timer);
	}
	if (y >= 1) {
		getPosition();
		var divisionY = (vertical-(vertical/7));
		var Y = Math.floor(divisionY);
		window.scrollTo(horizontal,Y);
		up_timer = setTimeout("pageup("+horizontal+","+Y+")",10);
	} else {
		window.scrollTo(horizontal,0);
		clearTimeout(up_timer);
	}
}

function scrollup(){
	getPosition();
	pageup(horizontal,vertical);
}


let rewriteInfo = function(text){
	$('#infomation').animate({'width': 'hide'},200,function(){});
	$('#infomation').animate({'width': 'show'},200,function(){});
	setTimeout(function(){
		$("#infomation").html(text);
	},200);
}
//#infomation 書き換え　ここから
//バッククオーテーション``は消さないこと！
function a1(){
	rewriteInfo(`
		<h2>
			<span class="no-wrap">「昔ながらの里山風景が残る住環境」</span>
			<span class="no-wrap">についてのご紹介</span>
		</h2>

			<img src="./images/mukasinagarano.png" alt="写真">
			<div class = "column2_content">
				<h3>特徴</h3>
						 <p>
							 里山風景が残るこの地区は、多摩丘陵の東端に位置し、
						起伏に富んだ谷戸地形を形成しています。そして、
						丘陵地の樹林と湧水に育まれた多様な生物が生息しています。</p>
						<p>
						　また、雑木林やリンゴの里、養鶏場などの都市農業がこの地域を特徴付けており、
						まとまりのある集落が良好な田園景観を形成しています。
						</p>
			</div>
						<div id = "g_street_view">
						<iframe src="https://www.google.com/maps/embed?pb=!4v1529558946017!6m8!1m7!1sZWzAB8jS8rAX-eMyhCkJgg!2m2!1d35.66102958996036!2d139.3681677131816!3f318.93204722983324!4f9.674716852543298!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
			<div class = "column2_content">
				<h3>この地域のいいところ</h3>
						<p>
						　このように谷戸景観や田園景観が残されている地区においては、
						住宅一戸の建築であっても自然の地形を活かし、
						自然環境や景観に配慮した住宅となるように誘導していきます。</p>
						<p>
						　そこで、まちづくりにおいても谷戸特有である自然環境や集落環境を保全するとともに、
						これらと共存する低層住宅地を形成していきます。
						 </p>
			</div>
			<div class = "column2_content">
					 <h3>なんか情報</h3>
							 <p>
							 　このように谷戸景観や田園景観が残されている地区においては、住宅一戸の建築であっても自然の地形を活かし、
							 自然環境や景観に配慮した住宅となるように誘導していきます。</p>
							 <p>
							 　そこで、まちづくりにおいても谷戸特有である自然環境や集落環境を保全するとともに、
							 これらと共存する低層住宅地を形成していきます。
								</p>
			</div>
	`);
}
function a2(){
			rewriteInfo(`
			  <h2>「多様な生き物とともに暮らしていける住環境」についてのご紹介</h2>

					<img src="./images/tayounaikimono.png" alt="写真">
					<h3>特徴</h3>
						<p>
						  多様な生き物が身近に生息するこの地区は、周辺の多摩
						川や日野用水などの水辺、日野緑地の崖線の緑や湧水が身
						近にある自然環境が豊かに残されています。</br></br>
						　自然環境を身近に感じ、四季の移ろいを肌で感じられる
						環境は、市街化が進む中では希少になりつつあります。
						</p>
						<div id = g_street_view></div>
					<h3>この地域のいいところ</h3>
						<p>
						　しかし、まちづくりにおいてこれらの貴重な自然環境を
						しっかりと守り、育んでいくことで、いつまでもこの環境
						の中で生活していくことが可能となります。</br></br>
						 そこで、都市基盤の改善や住環境の向上などまちづくり
						を進めるなかで、自然環境を保全するとともに、これらと
						共存する低層住宅地を形成していきます。
						</p>
					<h3>なんか情報</h3>
						<p>
						　しかし、まちづくりにおいてこれらの貴重な自然環境を
						しっかりと守り、育んでいくことで、いつまでもこの環境
						の中で生活していくことが可能となります。</br></br>
						そこで、都市基盤の改善や住環境の向上などまちづくり
						進めるなかで、自然環境を保全するとともに、これらと
						共存する低層住宅地を形成していきます。
						</p>
			`);
}
function a3(){rewriteInfo(``);}
function a4(){rewriteInfo(``);}

function b1(){rewriteInfo(``);}
function b2(){rewriteInfo(``);}
function b3(){rewriteInfo(``);}

function c1(){rewriteInfo(``);}
function c2(){rewriteInfo(``);}

function d1(){rewriteInfo(``);}

function e1(){rewriteInfo(``);}
function e2(){rewriteInfo(``);}
function e3(){rewriteInfo(``);}

//#infomation 書き換え　ここまで
