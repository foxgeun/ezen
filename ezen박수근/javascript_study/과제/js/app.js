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

  $("btn1").on("click", function (e) {
    $(".home_title").text("아아");
  });

  const movieAPI =
    "https://api.themoviedb.org/3/movie/popular?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&page=1&region=KR"; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

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
      // https://api.themoviedb.org/3/movie/${data.results[i].id}api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&append_to_response=KR
      // https://www.themoviedb.org/movie/data.results[i].id?language=ko

      // for (let i = 0; i <= 7; i++) {
      //   console.log("영화제목: " + data.results[i].title);
      //   console.log("영화설명: " + data.results[i].overview);
      //   console.log("영화설명: " + data.results[i].id);
      //   console.log("영화평점: " + data.results[i].vote_average);
      //   const pos = console.log("영화평점: " + data.results[i].poster_path);

      //   let imgURL =
      //     "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
      //   $(".imges").append(
      //     `<a href="https://www.themoviedb.org/movie/${data.results[i].id}"><img src="${imgURL}"></a>`
      //   );

      //   $(".imges").append(data.results[i].title);

      //   if (data.results[i].genre_ids[i] == 16) {
      //     console.log(data.results[i]);
      //   }

      //   ketword = `https://api.themoviedb.org/3/movie/${data.results[i].id}/b8cfc814abb09ebb64d0f165854e5596`;
      // }

      // https://api.themoviedb.org/3/movie/${data.results[i].id}?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  //   const movie2API =
  //     "https://api.themoviedb.org/3/movie/popular?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&page=2&region=KR"; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

  //   $.ajax({
  //     type: "GET",
  //     url: movie2API,
  //     dataType: "json",
  //     async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
  //     success: function (data) {
  //       console.log(data);

  //     },
  //     error: function (request, status, error) {
  //       //응답 에러시 처리 작업
  //       console.log("code:" + request.status);
  //       console.log("message:" + request.responseText);
  //       console.log("error:" + error);
  //     },
  //   });

  //    const movie_now_API =
  //      "https://api.themoviedb.org/3/movie/now_playing?api_key=b8cfc814abb09ebb64d0f165854e5596&language=ko-KR&page=1&region=KR"; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

  //    $.ajax({
  //      type: "GET",
  //      url: movie_now_API,
  //      dataType: "json",
  //      async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
  //      success: function (data) {
  //        console.log(data);
  //       const i =0

  //          let imgURL =
  //            "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
  //          console.log(imgURL);
  //          $(".now_img").attr("src", `${imgURL}`);
  //          $(".now_ex").text(data.results[0].title);

  //      },
  //      error: function (request, status, error) {
  //        //응답 에러시 처리 작업
  //        console.log("code:" + request.status);
  //        console.log("message:" + request.responseText);
  //        console.log("error:" + error);
  //      },
  //    });
})();
