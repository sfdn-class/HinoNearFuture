// display_marker.js
window.count = 0;
// window.addEventListenerに関数オブジェクトを登録しておくと，
// 全部のコンテンツの読み込みが終了した時に自動的に，
// 登録しておいた関数オブジェクトが次々と呼ばれる
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト

  const bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(35.639245, 139.356940),
    new google.maps.LatLng(35.691640, 139.441536));

  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:(35.691640 + 35.639245)/2, lng:(139.441536 + 139.356940)/2},
    // ズームレベル
    zoom: 14
  };
  // 地図を保持するためのconstオブジェクトmyMapを宣言し，
  // GoogleMapsのコンストラクタの引数に，先に定義した地図表示に必要なパラメータを食わせる
    window.myMap = new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される

    //let overlay;
    USGSOverlay.prototype = new google.maps.OverlayView();

    window.overlay = new USGSOverlay(bounds,window.myMap);


    function USGSOverlay(bounds, map) {
          // Initialize all properties.
          this.bounds_ = bounds;
          this.map_ = map;

          // Define a property to hold the image's div. We'll
          // actually create this div upon receipt of the onAdd()
          // method so we'll leave it null for now.
          this.div_ = null;

          // Explicitly call setMap on this overlay.
          this.setMap(map);
    }

    USGSOverlay.prototype.onAdd = function() {

          let div = document.createElement('div');
          div.style.borderStyle = 'none';
          div.style.borderWidth = '0px';
          div.style.position = 'absolute';

          // Create the img element and attach it to the div.
          obj = document.createElement('div');
          obj.id = 'customsvg';
          obj.style.width = '100%';
          obj.style.height = '100%';
          obj.style.position = 'absolute';
          div.appendChild(obj);
          this.div_ = div;

          // Add the element to the 'overlayLayer' pane.
          var panes = this.getPanes();
          panes.overlayLayer.appendChild(div);

          //svg読み込み
          window.blocksArray = new Array();
          window.svgctrl = $("#customsvg")
          window.svgctrl.load("./images/map_masterplan.svg svg", function(){
            window.blocksArray.push(window.svgctrl.find("#blocks001"));
            window.blocksArray.push(window.svgctrl.find("#blocks002"));
            window.blocksArray.push(window.svgctrl.find("#blocks003"));
            window.blocksArray.push(window.svgctrl.find("#blocks004"));
            window.blocksArray.push(window.svgctrl.find("#blocks005"));
            window.blocksArray.push(window.svgctrl.find("#blocks006"));
            window.blocksArray.push(window.svgctrl.find("#blocks007"));
            window.blocksArray.push(window.svgctrl.find("#blocks008"));
            window.blocksArray.push(window.svgctrl.find("#blocks009"));
            window.blocksArray.push(window.svgctrl.find("#blocks010"));
            window.blocksArray.push(window.svgctrl.find("#blocks011"));
            window.blocksArray.push(window.svgctrl.find("#blocks012"));
            window.blocksArray.push(window.svgctrl.find("#blocks013"));
            window.blocksArray.push(window.svgctrl.find("#blocks016"));
            window.blocksArray.push(window.svgctrl.find("#blocks017"));
              window.blocksArray.forEach((val, index, array) => {
                val.css('opacity', '0.0');
              });
          });

    };



    USGSOverlay.prototype.draw = function() {

          // We use the south-west and north-east
          // coordinates of the overlay to peg it to the correct position and size.
          // To do this, we need to retrieve the projection from the overlay.
          var overlayProjection = this.getProjection();

          // Retrieve the south-west and north-east coordinates of this overlay
          // in LatLngs and convert them to pixel coordinates.
          // We'll use these coordinates to resize the div.
          var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
          var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

          var div = this.div_;
          div.style.left = sw.x + 'px';
          div.style.top = ne.y + 'px';
          div.style.width = (ne.x - sw.x) + 'px';
          div.style.height = (sw.y - ne.y) + 'px';


    };

    USGSOverlay.prototype.onRemove = function() {
          this.div_.parentNode.removeChild(this.div_);
          this.div_ = null;
    };


    //マーカー表示用パラメータ格納
    function markerzahyo(_lat, _lng, _html){
      this.lat = _lat;
      this.lng = _lng;
      this.html = _html;
    };

    window.zahyo_s = new Array();
    window.zahyo_t = new Array();
    window.zahyo_k = new Array();
    window.zahyo_o = new Array();
    //小学校
    window.zahyo_s[0] = new markerzahyo(35.660755, 139.399061,'<p>日野市立南平小学校</p>');
    window.zahyo_s[1] = new markerzahyo(35.672864, 139.392949,'<p>日野市立日野第七小学校</p>');
    window.zahyo_s[2] = new markerzahyo(35.677445, 139.398456,'<p>日野市立第一小学校</p>');
    window.zahyo_s[3] = new markerzahyo(35.649386, 139.386300,'<p>日野市立第六小学校</p>');
    window.zahyo_s[4] = new markerzahyo(35.670430, 139.383326,'<p>日野市立日野第五小学校/p>');
    //中学校
    window.zahyo_t[0] = new markerzahyo(35.665463, 139.379835,'<p>日野市立第二中学校</p>');
    window.zahyo_t[1] = new markerzahyo(35.661777, 139.369243,'<p>日野市立第四中学校</p>');
    window.zahyo_t[2] = new markerzahyo(35.649517, 139.411458,'<p>日野市立日野第三中学校</p>');
    window.zahyo_t[3] = new markerzahyo(35.680405, 139.400849,'<p>日野市立日野第一中学校</p>');
    window.zahyo_t[4] = new markerzahyo(35.674207, 139.386504,'<p>日野市立大坂上中学校</p>');
    //観光
    window.zahyo_k[0] = new markerzahyo(35.649553, 139.402685,'<p>多摩動物公園</p>');
    window.zahyo_k[1] = new markerzahyo(35.662392, 139.410074,'<p>高幡不動尊金剛寺</p>');
    window.zahyo_k[2] = new markerzahyo(35.649082, 139.405145,'<p>京王れーるランド</p>');
    window.zahyo_k[3] = new markerzahyo(35.654033, 139.427906,'<p>京王百草園</p>');
    window.zahyo_k[4] = new markerzahyo(35.704480, 139.412911,'<p>国営昭和記念公園</p>');
    //お店
    window.zahyo_o[0] = new markerzahyo(35.661847, 139.413012,'<p>パティスリー・ドゥ・シェフ・フジウ</p>');
    window.zahyo_o[1] = new markerzahyo(35.675650, 139.401977,'<p>うなぎ藤田</p>');
    window.zahyo_o[2] = new markerzahyo(35.663495, 139.378703,'<p>ピッコロ レガーロ</p>');
    window.zahyo_o[3] = new markerzahyo(35.662478, 139.381441,'<p>アナスドーサビリヤニ</p>');
    window.zahyo_o[4] = new markerzahyo(35.661495, 139.414139,'<p>マロニエ京王線高幡不動駅前店</p>');

    const markerElement = [];
    const InfoWindowElement = [];

    window.markerArray = new Array();
    window.infoWindowArray = new Array();

    let markerPush = function(zahyo,i){
      markerElement[i] = {
        position: {lat:zahyo[i].lat, lng:zahyo[i].lng},
      };
      InfoWindowElement[i] = {content:zahyo[i].html};

      window.markerArray.push(new google.maps.Marker(markerElement[i]));
      window.infoWindowArray.push(new google.maps.InfoWindow(InfoWindowElement[i]));
    }

    for (let i = 0; i < window.zahyo_s.length; i++) {markerPush(window.zahyo_s,i);}
    for (let i = 0; i < window.zahyo_t.length; i++) {markerPush(window.zahyo_t,i);}
    for (let i = 0; i < window.zahyo_k.length; i++) {markerPush(window.zahyo_k,i);}
    for (let i = 0; i < window.zahyo_o.length; i++) {markerPush(window.zahyo_o,i);}

    for (let i = 0; i < markerArray.length; i++) {
      window.markerArray[i].addListener('click', ()=> { //関数オブジェクトを記述開始
          window.infoWindowArray.forEach((val,index,array) => {
            val.close();
          });
        //マーカオブジェクトがクリックされた時に，この関数が呼ばれる
          window.infoWindowArray[i].open(myMap, window.markerArray[i]);
        }//関数オブジェクト記述ここまで
      );
    }
    //マーカー関係ここまで


} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される


//オーバーレイアニメーションと#infomation 書き換え　ここから
//バッククオーテーション``は消さないこと！

let opcValOpen = 0.0;
let opcValClose = 0.8;
let cssVal = 0;

let valueAnimationOpen = function(num){
  opcValOpen = 0.0;
  opcValClose = 0.8;
    let id = setInterval(function(){
        opcValOpen += 0.1;
        opcValClose -= 0.1;

        for (let i = 0; i < window.blocksArray.length; i++) {
          if (i != num && window.blocksArray[i].css('opacity') > 0.0) {
            window.blocksArray[i].css('opacity', opcValClose);
          }
        }

        if (window.blocksArray[num].css('opacity') < 0.8) {
          window.blocksArray[num].css('opacity', opcValOpen);
        }

        if (opcValOpen > 0.8 && opcValClose < 0.0) {
          clearInterval(id);
        }
    },30);
}

let rewriteInfo = function(text){
  $('#choice').animate({'height': 'show'},400,function(){});
	$('#infomation').animate({'width': 'hide'},200,function(){});
	$('#infomation').animate({'width': 'show'},200,function(){});
	setTimeout(function(){
		$("#infomation").html(text);
	},200);
}

function a1(){
    valueAnimationOpen(3);
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
  valueAnimationOpen(4);
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
function a3(){valueAnimationOpen(6);}
function a4(){valueAnimationOpen(9);}

function b1(){valueAnimationOpen(10);}
function b2(){valueAnimationOpen(11);}
function b3(){valueAnimationOpen(5);}

function c1(){valueAnimationOpen(0);}
function c2(){valueAnimationOpen(1);}

function d1(){valueAnimationOpen(2);}

function e1(){
      valueAnimationOpen(7);
      rewriteInfo(`
    			<h2>
    				<span class="no-wrap">「周辺の営農環境に配慮した まち並みの整った住環境」</span>
    				<span class="no-wrap">についてのご紹介</span>
    			</h2>
    				<img src="./images/mukasinagarano.png" alt="写真">
    				<div class = "column2_content">
    					<h3>目的</h3>
    					<p>
    　         まちづくりにおいては、居住者の利便性や快適性の向上は大きな目的のひとつであり、基盤整備はその基本となるものです。また、幹線道路の整備も地区の利便性の向上には欠かせないものです。
              </p>
    				</div>
    				<div class = "column2_content">
    					<h3>問題と課題</h3>
    							<p>
    　            都市基盤や幹線道路が整備されると、地区の様相かは一変し、それまで農地が広大な広がりを見せていた地区が市街化され、住宅地が形成されていきます。
                  しかし、こうした状況にあっても地区内に残された農地は農業基本条例の精神に従って保全、育成していくことが必要となります。
    							</p>
    				</div>
    							<div id = "g_street_view">
    							<iframe src="https://www.google.com/maps/embed?pb=!4v1529558946017!6m8!1m7!1sZWzAB8jS8rAX-eMyhCkJgg!2m2!1d35.66102958996036!2d139.3681677131816!3f318.93204722983324!4f9.674716852543298!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    							</div>
    				<div class = "column2_content">
    					<h3>解決策</h3>
    							<p>
    　             基盤整備や幹線道路の整備などを含めた、住宅市街地等の整備の際に、残された農地の営農環境を著しく悪化させないように配慮していきます。</p>
    				</div>
    				<div class = "column2_content">
    						 <h3>具体的対策</h3>
    								 <p>
    　                東西軸の幹線道路沿道北側について、後背部の農地への日照等、良好な営農環境保全の観点から、南側に比して建物高さを押さえるなど、柔軟で、きめ細かな都市計画を行い、営農環境と調和し、交通利便性に優れた、街並みの整った住環境の形成を図ります。</p>
    				</div>
    		`);
    }

function e2(){valueAnimationOpen(8);}
function e3(){valueAnimationOpen(14);}



//マーカー表示　ここから
let markerInit = function(a,b,c,d){
  window.infoWindowArray.forEach((val,index,array) => {
    val.close();
  });
  window.markerArray.forEach((val,index,array) => {
    val.setMap(null);
    val.setAnimation(google.maps.Animation.DROP);
  });
  for (let i = a + b + c ; i < a + b + c + d; i++) {
    window.markerArray[i].setMap(myMap);
  }
}

function syougakouClick(){
  markerInit(0,0,0,window.zahyo_s.length);
}

function tyugakouClick(){
  markerInit(0,0,window.zahyo_s.length,window.zahyo_t.length);
}

function kankouClick(){
  markerInit(0,window.zahyo_s.length,window.zahyo_t.length,window.zahyo_k.length);
}

function omiseClick(){
  markerInit(window.zahyo_s.length,window.zahyo_t.length,window.zahyo_k.length,window.zahyo_o.length);
}

function markerClear(){
  window.infoWindowArray.forEach((val,index,array) => {
    val.close();
  });
  window.markerArray.forEach((val,index,array) => {
    val.setMap(null);
  });
}
//マーカー表示　ここまで
