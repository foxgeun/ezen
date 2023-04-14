// (function () {
//   /* 접속자 위치정보 가져오기 */

//   // 현재 위치 가져오기
//   // 위치정보 가져오기 성공했을 때 , 위치정보 가져오기 실패했을 때
  navigator.geolocation.getCurrentPosition(getSuccess, getError);



//   // 가져오기 성공
  function getSuccess(position) {
    // position: 사용자의 위치정보가 들어있다.

    // 위경도 가져오기
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=37.4965961&lon=126.7871105&appid=1c2a00e9d03e3877fd4e717ae6aa353f&units=metric"
    var ddd = fetch(url).then(response => response.json().then(Data=>{
      console.log(Data.name)
    }));
    
  }

//   // 가져오기 실패
  function getError() {
    console.error("사용자의 위치정보를 가져오는데 실패했습니다.");
  }


 
  
  // 1c2a00e9d03e3877fd4e717ae6aa353f

//   // 카카오맵을 실행하는 함수
//   function loadmap(lat, lon) {
//     var mapContainer = document.getElementById("map"), // 지도를 표시할 div
//       mapOption = {
//         center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
//         level: 3, // 지도의 확대 레벨
//       };

//     // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
//     var map = new kakao.maps.Map(mapContainer, mapOption);

//     // 마커가 표시될 위치입니다
//     var markerPosition = new kakao.maps.LatLng(lat, lon);

//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//       position: markerPosition,
//     });

//     // 마커가 지도 위에 표시되도록 설정합니다
//     marker.setMap(map);

//     // 좌표(위경도) => 주소로 변환

//     // 주소-좌표 변환 객체를 생성합니다
//     var geocoder = new kakao.maps.services.Geocoder();

//     // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
//     searchAddrFromCoords(map.getCenter(), displayCenterInfo);

//     function searchAddrFromCoords(coords, callback) {
//       // 좌표로 행정동 주소 정보를 요청합니다
//       // coords: 접속한 중심좌효의 위경도 정보가 들어있음
//       // callback: displayCenterInfo(result, status) 함수가 들어있다.
//       geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
//     }

//     // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
//     function displayCenterInfo(result, status) {
//       if (status === kakao.maps.services.Status.OK) {
//         var infoDiv = document.getElementById("centerAddr");

//         for (var i = 0; i < result.length; i++) {
//           // 행정동의 region_type 값은 'H' 이므로
//           if (result[i].region_type === "H") {
//             let juso = result[i];

//             $(".region1-depth").text(juso.region_1depth_name);
//             $(".region3-depth").text(juso.region_3depth_name);

//             infoDiv.innerHTML = result[i].address_name;

//             // 온도 구하기
//             let temp = getWeather(lat, lon);
//             console.log(lat, lon);
//             $(".region-weather").text(`${temp.celsius}℃`);

//             // 날씨아이콘 바꾸기
//             var iconURL =
//               "https://openweathermap.org/img/wn/" + temp.icon + ".png";

//             $(".region-icon").attr("src", iconURL);
//             break;
//           }
//         }
//       }
//     }
//   } // load map함수의 끝


