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


/*
function kankouClick(){
//	  alert("クリックされました");

	    // 多摩動物公園
	    const firstMarkerElement = {
	      position: {lat:35.649553, lng:139.402685},
	      map: myMap
	    };
	    const firstMarker =
	      new google.maps.Marker(firstMarkerElement);
	    //高幡不動尊金剛寺
	    const secondMarkerElement = {
	      position: {lat:35.662392, lng:139.410074},
	      map: myMap
	    };
	    const secondMarker =
	      new google.maps.Marker(secondMarkerElement);
	    //京王れーるランド
	    const thirdMarkerElement = {
	      position: {lat:35.649082, lng:139.405145},
	      map: myMap
	    };
	    const thirdMarker =
	      new google.maps.Marker(thirdMarkerElement);
	    //京王百草園
	    const forthMarkerElement = {
	      position: {lat:35.654033, lng:139.427906},
	      map: myMap
	    };
	    const forthMarker =
	      new google.maps.Marker(forthMarkerElement);
	}

}*/
