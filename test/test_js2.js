// display_marker.js
window.count = 0;
// window.addEventListenerに関数オブジェクトを登録しておくと，
// 全部のコンテンツの読み込みが終了した時に自動的に，
// 登録しておいた関数オブジェクトが次々と呼ばれる
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト

  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.661504, lng:139.367559},
    // ズームレベル
    zoom: 16
  };
  // 地図を保持するためのconstオブジェクトmyMapを宣言し，
  // GoogleMapsのコンストラクタの引数に，先に定義した地図表示に必要なパラメータを食わせる
    window.myMap = new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される

    //let overlay;
    USGSOverlay.prototype = new google.maps.OverlayView();

    const bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(35.638045, 139.356940),
      new google.maps.LatLng(35.691620, 139.441536));

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
          window.svgctrl = $("#customsvg")
          window.svgctrl.load("./map_masterplan.svg svg", function(){
          window.st3 = window.svgctrl.find(".st3");
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
          div.style.height = (ne.y - sw.y) + 'px';


    };

    USGSOverlay.prototype.onRemove = function() {
          this.div_.parentNode.removeChild(this.div_);
          this.div_ = null;
    };

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される


let i = 1.0;

function but(){
    i -= 0.1;
    let stopId = setTimeout(but,20);
      if(i<0.0){
        clearTimeout(stopId);
      }
    window.st3.css('opacity',i);
}

function but2(){
  i += 0.1;
  let stopId2 = setTimeout(but2,20);
    if(i>0.5){
      clearTimeout(stopId2);
    }
  window.st3.css('opacity',i);
}
