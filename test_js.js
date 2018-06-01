// display_marker.js
let count = 0;

// window.addEventListenerに関数オブジェクトを登録しておくと，
// 全部のコンテンツの読み込みが終了した時に自動的に，
// 登録しておいた関数オブジェクトが次々と呼ばれる
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト

  const imageBounds = {
     north: 35.691747,
     south: 35.639345,
     east: 139.441536,
     west: 139.357072
   };

  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.661504, lng:139.367559},
    // ズームレベル
    zoom: 16
  };
  // 地図を保持するためのconstオブジェクトmyMapを宣言し，
  // GoogleMapsのコンストラクタの引数に，先に定義した地図表示に必要なパラメータを食わせる
  window.myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される



  window.overlay = new Array();
  window.overlay.push(new google.maps.GroundOverlay(
    './map_block001.svg',imageBounds));
  window.overlay.push(new google.maps.GroundOverlay(
    './map_block002.svg',imageBounds));
  window.overlay.push(new google.maps.GroundOverlay(
    './map_block003.svg',imageBounds));

    window.overlay.forEach((val,index,array) => {
      val.setMap(myMap);
    });

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される

function but(){
  count++;
  if (count == 1) {
    window.overlay.forEach((val,index,array) => {
      val.setMap(null);
    });
      window.overlay[0].setMap(myMap);
  }else if(count == 2){
    window.overlay.forEach((val,index,array) => {
      val.setMap(null);
    });
      window.overlay[1].setMap(myMap);
    count = 0;
  }
}
