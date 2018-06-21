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

  //マーカー表示用パラメータ格納
  function markerzahyo(_lat, _lng, _html){
    this.lat = _lat;
    this.lng = _lng;
    this.html = _html;
  };
  const zahyo_s = new Array();
  const zahyo_t = new Array();
  const zahyo_k = new Array();
  const zahyo_o = new Array();
  //小学校
  zahyo_s[0] = new markerzahyo(35.660755, 139.399061,'<p>日野市立南平小学校</p>');
  zahyo_s[1] = new markerzahyo(35.672864, 139.392949,'<p>日野市立日野第七小学校</p>');
  zahyo_s[2] = new markerzahyo(35.677445, 139.398456,'<p>日野市立第一小学校</p>');
  zahyo_s[3] = new markerzahyo(35.649386, 139.386300,'<p>日野市立第六小学校</p>');
  zahyo_s[4] = new markerzahyo(35.670430, 139.383326,'<p>日野市立日野第五小学校/p>');
  //中学校
  zahyo_t[0] = new markerzahyo(35.665463, 139.379835,'<p>日野市立第二中学校</p>');
  zahyo_t[1] = new markerzahyo(35.661777, 139.369243,'<p>日野市立第四中学校</p>');
  zahyo_t[2] = new markerzahyo(35.649517, 139.411458,'<p>日野市立日野第三中学校</p>');
  zahyo_t[3] = new markerzahyo(35.680405, 139.400849,'<p>日野市立日野第一中学校</p>');
  zahyo_t[4] = new markerzahyo(35.674207, 139.386504,'<p>日野市立大坂上中学校</p>');
  //観光
  zahyo_k[0] = new markerzahyo(35.649553, 139.402685,'<p>多摩動物公園</p>');
  zahyo_k[1] = new markerzahyo(35.662392, 139.410074,'<p>高幡不動尊金剛寺</p>');
  zahyo_k[2] = new markerzahyo(35.649082, 139.405145,'<p>京王れーるランド</p>');
  zahyo_k[3] = new markerzahyo(35.654033, 139.427906,'<p>京王百草園</p>');
  zahyo_k[4] = new markerzahyo(35.704480, 139.412911,'<p>国営昭和記念公園</p>');
  //お店
  zahyo_o[0] = new markerzahyo(35.661847, 139.413012,'<p>パティスリー・ドゥ・シェフ・フジウ</p>');
  zahyo_o[1] = new markerzahyo(35.675650, 139.401977,'<p>うなぎ藤田</p>');
  zahyo_o[2] = new markerzahyo(35.663495, 139.378703,'<p>ピッコロ レガーロ</p>');
  zahyo_o[3] = new markerzahyo(35.662478, 139.381441,'<p>アナスドーサビリヤニ</p>');
  zahyo_o[4] = new markerzahyo(35.661495, 139.414139,'<p>マロニエ京王線高幡不動駅前店</p>');

  const syougakou_markerElement = [];
  const tyugakou_markerElement = [];
  const kankou_markerElement = [];
  const omise_markerElement = [];

  const syougakou_InfoWindowElement = [];
  const tyugakou_InfoWindowElement = [];
  const kankou_InfoWindowElement = [];
  const omise_InfoWindowElement = [];

  const syougakou_infoWindow = new google.maps.InfoWindow(syougakou_InfoWindowElement);
  const tyugakou_infoWindow = new google.maps.InfoWindow(tyugakou_InfoWindowElement);
  const kankou_infoWindow = new google.maps.InfoWindow(kankou_InfoWindowElement);
  const omise_infoWindow = new google.maps.InfoWindow(omise_InfoWindowElement);

  window.syougakou_markerArray = new Array();
  window.tyugakou_markerArray = new Array();
  window.kankou_markerArray = new Array();
  window.omise_markerArray = new Array();
  window.infoWindowArray = new Array();

  for (let i = 0; i < zahyo_k.length; i++) {
      syougakou_markerElement[i] = {position: {lat:zahyo_s[i].lat, lng:zahyo_s[i].lng}};
      tyugakou_markerElement[i] = {position: {lat:zahyo_t[i].lat, lng:zahyo_t[i].lng}};
      kankou_markerElement[i] = {position: {lat:zahyo_k[i].lat, lng:zahyo_k[i].lng}};
      omise_markerElement[i] = {position: {lat:zahyo_o[i].lat, lng:zahyo_o[i].lng}};

      syougakou_InfoWindowElement[i] = {content:zahyo_s[i].html};
      tyugakou_InfoWindowElement[i] = {content:zahyo_t[i].html};
      kankou_InfoWindowElement[i] = {content:zahyo_k[i].html};
      omise_InfoWindowElement[i] = {content:zahyo_o[i].html};

      window.syougakou_markerArray.push(new google.maps.Marker(syougakou_markerElement[i]));
      window.tyugakou_markerArray.push(new google.maps.Marker(tyugakou_markerElement[i]));
      window.kankou_markerArray.push(new google.maps.Marker(kankou_markerElement[i]));
      window.omise_markerArray.push(new google.maps.Marker(omise_markerElement[i]));

      window.infoWindowArray.push(syougakou_infoWindow);
      window.infoWindowArray.push(tyugakou_infoWindow);
      window.infoWindowArray.push(kankou_infoWindow);
      window.infoWindowArray.push(omise_infoWindow);

      //小学校
      window.syougakou_markerArray[i].addListener('syougakouClick', ()=> { //関数オブジェクトを記述開始
          window.infoWindowArray.forEach((val,index,array) => {
            val.close();
          });
        //マーカオブジェクトがクリックされた時に，この関数が呼ばれる
          window.infoWindowArray[i].open(myMap, window.syougakou_markerArray[i]);
        }//関数オブジェクト記述ここまで
      );
      //中学校
      window.tyugakou_markerArray[i].addListener('tyugakouClick', ()=> { //関数オブジェクトを記述開始
          window.infoWindowArray.forEach((val,index,array) => {
            val.close();
          });
        //マーカオブジェクトがクリックされた時に，この関数が呼ばれる
          window.infoWindowArray[i].open(myMap, window.tyugakou_markerArray[i]);
        }//関数オブジェクト記述ここまで
      );
      //観光
      window.kankou_markerArray[i].addListener('kankouClick', ()=> { //関数オブジェクトを記述開始
          window.infoWindowArray.forEach((val,index,array) => {
            val.close();
          });
          window.infoWindowArray[i].open(myMap, window.kankou_markerArray[i]);
        //マーカオブジェクトがクリックされた時に，この関数が呼ばれる
          //window.nfoWindowArray[i].open(myMap, window.kankou_markerArray[i]);
        }//関数オブジェクト記述ここまで
      );
      //お店
      window.omise_markerArray[i].addListener('omiseClick', ()=> { //関数オブジェクトを記述開始
          window.infoWindowArray.forEach((val,index,array) => {
            val.close();
          });
        //マーカオブジェクトがクリックされた時に，この関数が呼ばれる
          window.infoWindowArray[i].open(myMap, window.omise_markerArray[i]);
        }//関数オブジェクト記述ここまで
      );
  }
  //マーカー関係ここまで

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
          window.svgctrl.load("images/map_masterplan.svg svg", function(){
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

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される


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

function a1(){valueAnimationOpen(3);}
function a2(){valueAnimationOpen(4);}
function a3(){valueAnimationOpen(6);}
function a4(){valueAnimationOpen(9);}

function b1(){valueAnimationOpen(10);}
function b2(){valueAnimationOpen(11);}
function b3(){valueAnimationOpen(5);}

function c1(){valueAnimationOpen(0);}
function c2(){valueAnimationOpen(1);}

function d1(){valueAnimationOpen(2);}

function e1(){valueAnimationOpen(7);}
function e2(){valueAnimationOpen(8);}
function e3(){valueAnimationOpen(14);}



function syougakouClick(){
//	  alert("クリックされました");
window.infoWindowArray.forEach((val,index,array) => {val.close();});
window.syougakou_markerArray.forEach((val,index,array) => {val.setMap(window.myMap);val.setAnimation(google.maps.Animation.DROP);});
}
function tyugakouClick(){
//	  alert("クリックされました");
window.infoWindowArray.forEach((val,index,array) => {val.close();});
window.tyugakou_markerArray.forEach((val,index,array) => {val.setMap(window.myMap);val.setAnimation(google.maps.Animation.DROP);});
}
function kankouClick(){
//	  alert("クリックされました");
window.infoWindowArray.forEach((val,index,array) => {val.close();});
window.kankou_markerArray.forEach((val,index,array) => {val.setMap(window.myMap);val.setAnimation(google.maps.Animation.DROP);});
}
function omiseClick(){
//	  alert("クリックされました");
window.infoWindowArray.forEach((val,index,array) => {val.close();});
window.omise_markerArray.forEach((val,index,array) => {val.setMap(window.myMap);val.setAnimation(google.maps.Animation.DROP);});
}
