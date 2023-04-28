var urlAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=ef6ec8f189e690ca76de8785ae98bf0e&language=ko-KR&page=1&region=KR";

$.ajax({
  type: "GET",
  url: urlAPI,
  dataType: "json",
  async: false, //동기상태 => ajax는 기본적으로 비동기다.
  success: function (data) {
    console.log(data);
    const results = data.results;
    console.log(results);
    for (const result of results) {
      console.log(result);
      console.log(result.id);
      console.log(result.backdrop_path);
      console.log(result.poster_path);

      const id = result.id;
      const poster = result.poster_path;
      const mvtitle = result.title;
      console.log(result.poster_path);
    }
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});

$.ajax({
  url: "https://api.themoviedb.org/3/movie/popular?api_key=ef6ec8f189e690ca76de8785ae98bf0e&language=ko-KR&page=1&region=KR",
  success: function (data) {
    var slides = [];
    $.each(data.results, function (i, item) {
      var posterUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
      var title = item.title;
      var slide =
        "<div class='imgbox'><img class='mv_img' src=" +
        posterUrl +
        " alt = '포스터'><p class='mv_name'>" +
        title +
        "</p></div>";
      slides.push(slide);
    });
    $(".mv_imgbox").append(slides.join(""));
  },
});

var tvUrlAPI =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=ef6ec8f189e690ca76de8785ae98bf0e&language=ko-KR&page=1";

$.ajax({
  type: "GET",
  url: tvUrlAPI,
  dataType: "json",
  async: false, //동기상태 => ajax는 기본적으로 비동기다.
  success: function (data) {
    console.log(data);
    const results = data.results;
    console.log(results);
    for (const result of results) {
      const tvposter = "https://image.tmdb.org/t/p/w500" + result.poster_path;
      const tvtitle = result.name;
      console.log(tvtitle);

      $(".tv_imgbox").append(
        "<div class='tvimgbox'><img class='tv_img' src=" +
          tvposter +
          " alt = '포스터'><p class='tv_name'>" +
          tvtitle +
          "</p></div>"
      );
    }
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
