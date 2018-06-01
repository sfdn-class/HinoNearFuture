// display_marker.js

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
    const myMap = new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される

    let overlay;
    USGSOverlay.prototype = new google.maps.OverlayView();

    const bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(35.639345, 139.357072),
      new google.maps.LatLng(35.691747, 139.441536));

    const srcSVG = './map_masterplan.svg';

    overlay = new USGSOverlay(bounds,srcSVG,myMap);


    function USGSOverlay(bounds, image, map) {
          // Initialize all properties.
          this.bounds_ = bounds;
          this.image_ = image;
          this.map_ = map;

          // Define a property to hold the image's div. We'll
          // actually create this div upon receipt of the onAdd()
          // method so we'll leave it null for now.
          this.div_ = null;

          // Explicitly call setMap on this overlay.
          this.setMap(map);
    }

    USGSOverlay.prototype.onAdd = function() {

          var div = document.createElement('div');
          div.style.borderStyle = 'none';
          div.style.borderWidth = '0px';
          div.style.position = 'absolute';

          // Create the img element and attach it to the div.
          var img = document.createElement('img');
          img.src = this.image_;
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.position = 'absolute';
          div.appendChild(img);

          this.div_ = div;

          // Add the element to the "overlayLayer" pane.
          var panes = this.getPanes();
          panes.overlayLayer.appendChild(div);
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

          // Resize the image's div to fit the indicated dimensions.

    };

    USGSOverlay.prototype.onRemove = function() {
          this.div_.parentNode.removeChild(this.div_);
          this.div_ = null;
    };



} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される
google.maps.event.addDomListener(window, 'load', window.myMap);
