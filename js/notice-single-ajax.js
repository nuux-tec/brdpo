// FETCH API

document.addEventListener("DOMContentLoaded", function () {
  const url = "http://brdpo-cms.herokuapp.com/api/news/";
  const news_id = location.search.match(/\d+/g).map(Number)[0];

  console.log(news_id);
  //  REQUISIÇÃO 

  fetch(url + news_id)
    .then((resp) => resp.json()
      .then(function (data) {
        console.log(data);
        $('.ajax-news-title').text(data.name);
        $('.ajax-day').text(data.day);
        $('.ajax-month-year').text(data.month + '/' + data.year);
        $('.ajax-content').html(data.content);
      })
    )

});