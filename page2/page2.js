// page2.js

function hitoClick(){
	document.getElementById("item1").innerHTML =
	'<div id = "test1"></div>'+
	'<div id = "test1"></div>'+
	'<div id = "test1"></div>'+
	'<div id = "test1"></div>'+
	'<div id = "test1"></div>'+
	'<p><input type="submit" value="次へ" onClick="onClickButton()"></p>';

	$('#item2').animate({
	    'marginLeft': '100%'
	},500,function(){});
}


function but(){
	$('#item2').animate({
	    'marginLeft': '0%'
	});
}

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

window.answerArray = new Array();
function imageClick(imageNumber){
    window.answerArray.push(imageNumber);
    if(imageNumber == 1){//人を選択した場合

        document.getElementById("Question").innerHTML =
				'<div id = "test1"></div>'+
				'<div id = "test1"></div>'+
				'<div id = "test1"></div>'+
				'<div id = "test1"></div>'+
				'<div id = "test1"></div>'+
        '<p><input type="submit" value="次へ" onClick="onClickButton()"></p>';
    }
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


function onClickButton(){
  // form要素を取得
  let element = document.getElementById( "Question" ) ;

  // form要素内のラジオボタングループ(name="choice")を取得
  let radioNodeList = element.choice ;
  let v = radioNodeList.value;
  alert(v);//選択したものをポップアップで表示

  if(buttonCounter == 0){//１回目の書き換え//Array[0]//自然と触れ合える地域

    if(v == 'a'){//人を選択した場合
       document.getElementById("Question").innerHTML =
       '<input type="radio" name="choice" value="1"  />'  +
       '　子供が住みやすい</br>' +
       '<input type="radio" name="choice" value="2" />' +
       '　近所間でのコミュニティがある</br>' +
       '<input type="radio" name="choice" value="3" />' +
       '　コミュニティの活動拠点となる</br>'　+
       '<input type="radio" name="choice" value="3" />' +
       '　人が集まり車の利便性が高い</br>';
      buttonCounter++;
    }

    if(v == 'b'){//車を選択した場合
       document.getElementById("Question").innerHTML =
       //Array[0] = v;
       '<input type="radio" name="choice" value="1" checked="checked" />'  +
       '　集まって住むことの楽しさがある</br>' +
       '<input type="radio" name="choice" value="2" />' +
       '　にぎわいがありモノレールの利便性も高い</br>' +
       '<input type="radio" name="choice" value="3" />' +
       '　車利用者へのサービス施設が共生</br>';
      buttonCounter++;
    }

    if(v == 'c'){//電車を選択した場合//選択肢は一つ
       document.getElementById("Question").innerHTML =
       //Array[0] = v;

      buttonCounter++;
    }

    if(v == 'd'){//自然を選択した場合
	     document.getElementById("Question").innerHTML =
       //Array[0] = v;
       '<input type="radio" name="choice" value="1" checked="checked" />'  +
       '　昔ながらの里山風景</br>' +
       '<input type="radio" name="choice" value="2" />' +
       '　多様な生き物</br>' +
       '<input type="radio" name="choice" value="3" />' +
       '　子供が住みやすい</br>'　+
       '<input type="radio" name="choice" value="3" />' +
       '　地域の緑のオアシスとなる</br>';
      buttonCounter++;
    }

    if(v == 'e'){//地域を選択した場合
       document.getElementById("Question").innerHTML =
       //Array[0] = v;
       '<input type="radio" name="choice" value="1" checked="checked" />'  +
       '　昔ながらの里山風景</br>' +
       '<input type="radio" name="choice" value="2" />' +
       '　多様な生き物</br>' +
       '<input type="radio" name="choice" value="3" />' +
       '　子供が住みやすい</br>'　+
       '<input type="radio" name="choice" value="3" />' +
       '　地域の緑のオアシスとなる</br>';
      buttonCounter++;
    }



  }
  else if(buttonCounter == 1){//２回目の書き換え//
	   document.getElementById("Question").innerHTML =
	    "<p>2回目の書き換え</p>";
	     buttonCounter++;
  }
  else if(buttonCounter == 2){//３回目の書き換え
	   document.getElementById("Question").innerHTML =
	    "<p>3回目の書き換え．<br />最初に戻ります．</p>";
	     buttonCounter = 0;
  }
}







/*
function onClickButton(){
  // form要素を取得
  let element = document.getElementById( "Question" ) ;

  // form要素内のラジオボタングループ(name="choice")を取得
  let radioNodeList = element.choice ;
  let v = radioNodeList.value;
  alert(v);//選択したものをポップアップで表示

  if(buttonCounter == 0){//１回目の書き換え//Array[0]//自然と触れ合える地域    checked="checked"

    if(v == 'a'){//人を選択した場合
       document.getElementById("Question").innerHTML =
       '<input type="radio" name="choice" value="1"  />'  +
       '　子供が住みやすい</br>' +
       '<input type="radio" name="choice" value="2" />' +
       '　近所間でのコミュニティがある</br>' +
       '<input type="radio" name="choice" value="3" />' +
       '　コミュニティの活動拠点となる</br>'　+
       '<input type="radio" name="choice" value="3" />' +
       '　人が集まり車の利便性が高い</br>';
      buttonCounter++;
    }

    if(v == 'b'){//車を選択した場合
       document.getElementById("Question").innerHTML =
       //Array[0] = v;
       '<input type="radio" name="choice" value="1" checked="checked" />'  +
       '　集まって住むことの楽しさがある</br>' +
       '<input type="radio" name="choice" value="2" />' +
       '　にぎわいがありモノレールの利便性も高い</br>' +
       '<input type="radio" name="choice" value="3" />' +
       '　車利用者へのサービス施設が共生</br>';
      buttonCounter++;
    }

    if(v == 'c'){//電車を選択した場合//選択肢は一つ
       document.getElementById("Question").innerHTML =
       //Array[0] = v;

      buttonCounter++;
    }

    if(v == 'd'){//自然を選択した場合
	     document.getElementById("Question").innerHTML =
       //Array[0] = v;
       '<input type="radio" name="choice" value="1" checked="checked" />'  +
       '　昔ながらの里山風景</br>' +
       '<input type="radio" name="choice" value="2" />' +
       '　多様な生き物</br>' +
       '<input type="radio" name="choice" value="3" />' +
       '　子供が住みやすい</br>'　+
       '<input type="radio" name="choice" value="3" />' +
       '　地域の緑のオアシスとなる</br>';
      buttonCounter++;
    }

    if(v == 'e'){//地域を選択した場合
       document.getElementById("Question").innerHTML =
       //Array[0] = v;
       '<input type="radio" name="choice" value="1" checked="checked" />'  +
       '　昔ながらの里山風景</br>' +
       '<input type="radio" name="choice" value="2" />' +
       '　多様な生き物</br>' +
       '<input type="radio" name="choice" value="3" />' +
       '　子供が住みやすい</br>'　+
       '<input type="radio" name="choice" value="3" />' +
       '　地域の緑のオアシスとなる</br>';
      buttonCounter++;
    }



  }*
  else if(buttonCounter == 1){//２回目の書き換え//
	   document.getElementById("Question").innerHTML =
	    "<p>2回目の書き換え</p>";
	     buttonCounter++;
  }
  else if(buttonCounter == 2){//３回目の書き換え
	   document.getElementById("Question").innerHTML =
	    "<p>3回目の書き換え．<br />最初に戻ります．</p>";
	     buttonCounter = 0;
  }
}
*/
