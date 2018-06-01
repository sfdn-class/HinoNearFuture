// hinoshi.js
//let answer = new Array(10);

//let buttonCounter = 0; //カウンタ変数

window.answerArray = new Array();
function imageClick(imageNumber){
    window.answerArray.push(imageNumber);
    if(imageNumber == 1){//人を選択した場合

        document.getElementById("Question").innerHTML =
        '<label for="1"><input type="radio" name="choice" value="hito1"  checked="checked"/>'  +
        ' 子供がまちの中の身近で小さな自然や人と交流し、心身を鍛えることのできる住環境</br></label>' +
        '<label for="2"><input type="radio" name="choice" value="hito2" />' +
        ' 向こう三軒両隣のコミュニティのある住環境</br></label>' +
        '<label for="3"><input type="radio" name="choice" value="hito3" />' +
        ' 地域の緑のオアシスとなりコミュニティの活動拠点となる開かれた住宅団地</br></label>'　+
        '<label for="4"><input type="radio" name="choice" value="hito4" />' +
        ' 集まって住むことの楽しさと車利用の利便性を実感できる住環境</br></label>' +
        '<label for="5"><input type="radio" name="choice" value="hito5" />' +
        ' さまざまな人々が住み、働き、憩う、出会いと交流のあるまちの形成</br></label>'　+
        '<p><input type="submit" value="次へ" onClick="onClickButton()"></p>';
;



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
  }*/
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
