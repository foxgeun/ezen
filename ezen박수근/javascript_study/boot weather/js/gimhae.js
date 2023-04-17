(function () {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);

    
    function getSuccess() {
      // position: 사용자의 위치정보가 들어있다.

      
      
      var url =
        "https://api.openweathermap.org/data/2.5/weather?lat=37.4965961&lon=126.7871105&appid=1c2a00e9d03e3877fd4e717ae6aa353f&units=metric";
      var ddd = fetch(url).then((response) =>
        response.json().then((Data) => {
          console.log(Data.name);
        })
      );
    }

    function getError() {
      console.error("실패!");
    }

})();

// https://api.openweathermap.org/data/2.5/weather?q=Gimhae&appid=1c2a00e9d03e3877fd4e717ae6aa353f&units=metric