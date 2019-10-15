// FETCH API

document.addEventListener("DOMContentLoaded", function () {
  const url = "http://brdpo-cms.herokuapp.com/api/events";
  const event_id = location.search.match(/\d+/g).map(Number)[0];

  console.log(event_id);
  //  REQUISIÇÃO 

  fetch(url + '/' + event_id)
    .then((resp) => resp.json()
      .then(function (data) {
        console.log(data);
        $('.ajax-event-name').text(data.name);
        $('.ajax-image').attr('src', data.image);
        $('.ajax-date').text(data.date);
        $('.ajax-price').text('R$ ' + data.price);
        $('.ajax-location').text(data.location);
        $('.ajax-hour').text(data.hour);
        $('.ajax-about').html(data.about);
      })
    )
});