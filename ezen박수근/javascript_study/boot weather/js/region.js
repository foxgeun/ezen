(function getWeatherWithCity() {
  var card_temp = document.querySelector(".card-temp");
  var card_city = document.querySelector(".card-city");
  var card_max_temp = document.querySelector(".card-max-temp");
  var card_min_temp = document.querySelector(".card-min-temp");
  var img_div = document.querySelector(".image_div");
  var card_wind = document.querySelector(".card_wind");
  var card_hum = document.querySelector(".card_hum");

  const currentURl = location.href;
  console.log(currentURl);
  //쿼리스트링 파라미터 가져오기
  const urlobj = new URL(currentURl);
  const params = urlobj.searchParams; //파라미터에 대한 정보가 들어있다
  console.log(params);

  const q = params.get("q");
  const krcity = params.get("krcity");
  console.log(q);
  console.log(krcity);

  var temp = {};
  var urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=1c2a00e9d03e3877fd4e717ae6aa353f&units=metric`;

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      console.log(data);
      var atemp = data.main.temp;
      card_temp.innerText = `평균온도 ${atemp}℃`;
      card_city.innerText = `${krcity}의 날씨`;
      var max_temp = data.main.temp_max;
      card_max_temp.innerText = `최고온도 ${max_temp}℃`;
      var min_temp = data.main.temp_min;
      card_min_temp.innerText = `최저온도 ${min_temp}℃`;
      var weather = data.weather[0].icon;
      console.log(data.weather[0]);
      console.log(weather);
      var wind = data.wind.speed;
      card_wind.innerText = `풍속 ${wind}`;
      var hum = data.main.humidity;
      card_hum.innerText = `습도 ${hum}`;

      var iconURL = "https://openweathermap.org/img/wn/" + weather + ".png";
      img_div.setAttribute("src", iconURL);

      // //정상 응답시 처리 작업
      // temp.celsius = data.main.temp.toFixed(0); // 소수점 버림;
      // temp.icon = data.weather[0].icon;
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  return temp;
})();

// https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=1c2a00e9d03e3877fd4e717ae6aa353f&units=metric
