(function () {
  //영화 api b8cfc814abb09ebb64d0f165854e5596


  
  
   

  var movieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&page=1&region=KR`; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다
  
  $.ajax({
    type: "GET",
    url: movieAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      console.log(data);
      
      for (let i = 0; i <= 20; i++) {
        let imgURL =
          "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;

        $(".movie_link").append(
          `<a href="https://www.themoviedb.org/movie/${data.results[i].id}"><img class="movie_img" src="${imgURL}"></img><h1 class="movie_ex">${data.results[i].title}</h1></a>`
        );

        for (let e = 0; e <= 4; e++) {
          let the = data.results[i].genre_ids[e];
          if (the == 16) {
            $(".movie_con1").append(
              `<a href="https://www.themoviedb.org/movie/${data.results[i].id}"><img class="movie_img" src="${imgURL}"></img><h1 class="movie_ex">${data.results[i].title}</h1></a>`
            );
          }
        }
      }
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  var movieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&page=2&region=KR`; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

  $.ajax({
    type: "GET",
    url: movieAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      console.log(data);

      for (let i = 0; i <= 20; i++) {
        let imgURL =
          "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
        console.log(data.results[i].title);
        $(".movie_link2").append(
          `<a href="https://www.themoviedb.org/movie/${data.results[i].id}"><img class="movie_img" src="${imgURL}"></img><h1 class="movie_ex">${data.results[i].title}</h1></a>`
        );

        $(".movie_con").append(
          `<a href="https://www.themoviedb.org/movie/${data.results[i].id}"><img class="movie_img" src="${imgURL}"></img><h1 class="movie_ex">${data.results[i].title}</h1></a>`
        );
      }
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  var movieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&page=3&region=KR`; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

  $.ajax({
    type: "GET",
    url: movieAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      console.log(data);

      for (let i = 0; i <= 20; i++) {
        let imgURL =
          "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
        console.log(data.results[i].title);
        $(".movie_link").append(
          `<a href="https://www.themoviedb.org/movie/${data.results[i].id}"><img class="movie_img" src="${imgURL}"></img><h1 class="movie_ex">${data.results[i].title}</h1></a>`
        );

        $(".movie_con").append(
          `<a href="https://www.themoviedb.org/movie/${data.results[i].id}"><img class="movie_img" src="${imgURL}"></img><h1 class="movie_ex">${data.results[i].title}</h1></a>`
        );

        console.log(data.results[i].id);
      }
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  var movieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&page=4&region=KR`; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

  $.ajax({
    type: "GET",
    url: movieAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      console.log(data);

      for (let i = 0; i <= 20; i++) {
        let imgURL =
          "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
        console.log(data.results[i].title);
        $(".movie_link3").append(
          `<a href="https://www.themoviedb.org/movie/${data.results[i].id}"><img class="movie_img" src="${imgURL}"></img><h1 class="movie_ex">${data.results[i].title}</h1></a>`
        );
      }
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
})();
