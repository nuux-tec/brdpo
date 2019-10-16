// FETCH API

document.addEventListener("DOMContentLoaded", function () {

  const containerNotice = document.getElementById("home-news-cards");

  const url = "http://brdpo-cms.herokuapp.com/api/news";

  //  REQUISIÇÃO 

  fetch(url + "?limit=3")
    .then((resp) => resp.json()
      .then(function (data) {
        console.log(data);

        let html = ``; // declara variável vazia          

        // let x = data.length - 1;

        /* apresenta 3 cards na tela */
        for (x = 0; x < data.length; x++) {
          // vai concatenando o HTML
          html +=
            '<article class="col-lg-4 col-sm-6 mb-5 mb-lg-0">' +
            '<div class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">' +
            '<img class="card-img-top rounded-0" src="' + data[x].image + '" alt="Post thumb">' +
            '<div class="card-body">' +

            '<ul class="list-inline mb-3">' +
            '<li class="list-inline-item mr-3 ml-0">' + data[x].day + '/' + data[x].month + '/' + data[x].year + '</li>' +
            '</ul>' +

            '<a href="notice-single.html?news_id=' + data[x].id + '">' +
            '<h4 class="card-title">' + data[x].name + '</h4>' +
            '</a>' +
            '<a href="notice-single.html?news_id=' + data[x].id + '" class="btn btn-primary btn-sm">Leia mais</a>' +
            '</div>' +
            '</div>' +
            '</article>';
        }

        containerNotice.innerHTML = html; // insere o conteúdo na div

      })
    )

});