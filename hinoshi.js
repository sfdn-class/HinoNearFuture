// hinoshi.js
//let answer = new Array(10);

//let buttonCounter = 0; //カウンタ変数

window.answerArray = new Array();
function imageClick(imageNumber){
    window.answerArray.push(imageNumber);
    if(imageNumber == 1){//人を選択した場合

        document.getElementById("Question").innerHTML =
      /*  '<input type="radio" name="choice" value="1"  />'  +
        '　子供が住みやすい</br>' +
        '<input type="radio" name="choice" value="2" />' +
        '　近所間でのコミュニティがある</br>' +
        '<input type="radio" name="choice" value="3" />' +
        '　コミュニティの活動拠点となる</br>'　+
        '<input type="radio" name="choice" value="3" />' +
        '　人が集まり車の利便性が高い</br>';*/
        "あああ";
    }
    else if(imageNumber == 2){//車を選択した場合
        document.getElementById("Question").innerHTML =
        "あああ";
    }
    else if(imageNumber == 3){//電車を選択した場合//選択肢は一つ
        document.getElementById("Question").innerHTML =
        "あああ";
    }
    else if(imageNumber == 4){//自然を選択した場合
        document.getElementById("Question").innerHTML =
        "あああ";
    }
    else if(imageNumber == 5){//地域を選択した場合
        document.getElementById("Question").innerHTML =
        "あああ";
    }
    else if(imageNumber == 6){//その他を選択した場合
        document.getElementById("Question").innerHTML =
        "あああ";
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



  }*/
  /*else if(buttonCounter == 1){//２回目の書き換え//
	   document.getElementById("Question").innerHTML =
	    "<p>2回目の書き換え</p>";
	     buttonCounter++;
  }
  else if(buttonCounter == 2){//３回目の書き換え
	   document.getElementById("Question").innerHTML =
	    "<p>3回目の書き換え．<br />最初に戻ります．</p>";
	     buttonCounter = 0;
  }
}*/
