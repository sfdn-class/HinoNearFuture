// display_marker.js

// window.addEventListenerに関数オブジェクトを登録しておくと，
// 全部のコンテンツの読み込みが終了した時に自動的に，
// 登録しておいた関数オブジェクトが次々と呼ばれる
window.addEventListener('load', () => { //登録する関数オブジェクト記述開始
  //地図表示に必要なパラメータを保持するconstオブジェクト

  const imageBounds = {
    north: 35.692446,
    south: 35.639243,
    east: 139.441660,
    west: 139.356987
  };

  //const sw = new GLatLng(35.639243, 139.356987);
  //const ne = new GLatLng(35.692446, 139.440160);

  const mapElement = {
    // 日野キャンパス2号館をの緯度経度を中心にして表示する
    center: {lat:35.661504, lng:139.367559},
    // ズームレベル
    zoom: 16
  };

  // 地図を保持するためのconstオブジェクトmyMapを宣言し，
  // GoogleMapsのコンストラクタの引数に，先に定義した地図表示に必要なパラメータを食わせる
  const myMap =
    new google.maps.Map(document.getElementById('map'), mapElement);
  // コンストラクタが実行されると表示される

  const overlay = new google.maps.GroundOverlay(
    './map_masterplan.svg',
      imageBounds);
  overlay.setMap(myMap);

  // 日野キャンパス1号館にマーカを表示するためのパラメータのconstオブジェクト
  const firstMarkerElement = {
    // 1号館の緯度経度
    position: {lat:35.661930, lng:139.366485},
    // どのマップオブジェクトに表示するか
    map: myMap
  };

  // マーカのコンストラクタに，先に定義したマーカのパラメータのオブジェクトを食わせて
  // オブジェクトを取り出す
  const firstMarker =
    new google.maps.Marker(firstMarkerElement);
  // 同様にコンストラクタが実行されると表示される

} // window.addEventListenerに登録する関数オブジェクトの記述ここまで
); // window.addEventListener関数自体は，このセミコロンで終わって実行される
