// (function () {
//     //뉴스 api 6a7d9d236bb0436188c4d9581951af69
//     const text1 = document.querySelector(".text1")
//     const text2 = document.querySelector(".text2")
//     const text3 = document.querySelector(".text3")
//     const text4 = document.querySelector(".text4")
//     const text5 = document.querySelector(".text5")
//     const text6 = document.querySelector(".text6")
//     const text7 = document.querySelector(".text7")
//  const temp = {};
//     const newsAPI = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=6a7d9d236bb0436188c4d9581951af69"; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

//     $.ajax({
//       type: "GET",
//       url: newsAPI,
//       dataType: "json",
//       async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
//       success: function (data) {
//         console.log(data);
//         const title1 = console.log(data.articles[0].url);

//         const title2 = console.log(data.articles[1].title);
//         const title3 = console.log(data.articles[2].title);
//         const title4 = console.log(data.articles[3].title);
//         const title5 = console.log(data.articles[4].title);
//         const title6 = console.log(data.articles[5].title);
//         const title7 = console.log(data.articles[6].title);

//         text1.setAttribute("href",data.articles[0].url);
//         text2.setAttribute("href",data.articles[1].url);
//         text1.innerText = data.articles[0].title;
//         text2.innerText = data.articles[1].title;
//       },
//       error: function (request, status, error) {
//         //응답 에러시 처리 작업
//         console.log("code:" + request.status);
//         console.log("message:" + request.responseText);
//         console.log("error:" + error);
//         },

//     });

// }

// )();

(function () {
  //영화 api b8cfc814abb09ebb64d0f165854e5596
  
  var movie_link = document.querySelector(".movie_link");
  var btn1 = document.querySelector(".btn1");
  var movie_link2 = document.querySelector(".movie_link2");
  var btn2 = document.querySelector(".btn2");


  btn1.addEventListener("click", ss)
  btn2.addEventListener("click", dd)
  
  function ss() {
    movie_link.setAttribute('id', "hidden");
    movie_link2.removeAttribute("id", "hidden");
  }

  function dd() {
    movie_link2.setAttribute("id", "hidden");
    movie_link.removeAttribute("id", "hidden");
  }

  var movieAPI = (`https://api.themoviedb.org/3/movie/popular?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&page=1&region=KR`); // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

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
 
})();
