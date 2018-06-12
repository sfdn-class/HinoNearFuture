// page2.js
let buttonCounter = 0;


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


//let answer = new Array(10);

//let buttonCounter = 0; //カウンタ変数

/**
    else if(imageNumber == 2){//車を選択した場合

      document.getElementById("Question").innerHTML =
      '<label for="1"><input type="radio" name="choice" value="kuruma1"  checked="checked"/>'  +
      ' 集まって住むことの楽しさと車利用の利便性を実感できる住環境</br></label>' +
      '<label for="2"><input type="radio" name="choice" value="kuruma2" />' +
      ' モノレールと車利用の利便性を実感できる交通利便性に優れた「にぎわい」のある住環境</br></label>' +
      '<label for="3"><input type="radio" name="choice" value="kuruma3" />' +
      ' 車利用者へのサービス施設が共生した住環境の形成</br></label>'　+
      '<p><input type="submit" value="次へ" onClick="onClickButton()"></p>';

    }
    else if(imageNumber == 3){//電車を選択した場合//選択肢は一つ

      document.getElementById("Question").innerHTML =
      '<label for="1"><input type="radio" name="choice" value="densya1"  checked="checked"/>'  +
      ' 駅近くの利便性を享受できる住環境</br></label>'　+
      '<p><input type="submit" value="次へ" onClick="onClickButton()"></p>';

    }
    else if(imageNumber == 4){//自然を選択した場合

      document.getElementById("Question").innerHTML =
      '<label for="1"><input type="radio" name="choice" value="sizen1"  checked="checked"/>'  +
      ' 昔ながらの里山風景が残る住環境</br></label>' +
      '<label for="2"><input type="radio" name="choice" value="sizen2" />' +
      ' 多様な生き物とともに暮らしていける住環境</br></label>' +
      '<label for="3"><input type="radio" name="choice" value="sizen3" />' +
      ' 子供がまちの中の身近で小さな自然や人と交流し、心身を鍛えることのできる住環境</br></label>'　+
      '<label for="4"><input type="radio" name="choice" value="sizen4" />' +
      ' 地域の緑のオアシスとなりコミュニティの活動拠点となる開かれた住宅団地</br></label>'　+
      '<p><input type="submit" value="次へ" onClick="onClickButton()"></p>';

    }
    else if(imageNumber == 5){//地域を選択した場合

      document.getElementById("Question").innerHTML =
      '<label for="1"><input type="radio" name="choice" value="tiiki1"  checked="checked"/>'  +
      ' 散歩しながら旬の野菜を買うことができる住環境</br></label>' +
      '<label for="2"><input type="radio" name="choice" value="tiiki2" />' +
      ' 対面販売の商店街のある地域密着型の商業地</br></label>'　+
      '<p><input type="submit" value="次へ" onClick="onClickButton()"></p>';

    }
    else if(imageNumber == 6){//その他を選択した場合

      document.getElementById("Question").innerHTML =
      '<label for="1"><input type="radio" name="choice" value="sonota1"  checked="checked"/>'  +
      ' 周辺の営業環境に配慮したまち並みの整った住環境</br></label>' +
      '<label for="2"><input type="radio" name="choice" value="sonota2" />' +
      ' 歩行者空間と一体となったまち並みの整った住環境</br></label>' +
      '<label for="3"><input type="radio" name="choice" value="sonota3" />' +
      ' 企業と共に歩み続けてきた住工共存の住環境の形成</br></label>'　+
      '<p><input type="submit" value="次へ" onClick="onClickButton()"></p>';

    }
}
**/
