// FETCH API

document.addEventListener("DOMContentLoaded", function(){   
    const containerCourses = document.getElementById("courses-container");
    const url = "http://brdpo-cms.herokuapp.com/api/courses";
    const course_id = location.search.match(/\d+/g).map(Number)[0];

    console.log(course_id);
    //  REQUISIÇÃO 

    fetch(url + '/' + course_id)
    .then((resp) => resp.json()
    .then(function(data){        
      console.log(data);
      $('.ajax-course-name').text(data.name);
      $('.ajax-image').attr('src', data.image);
      $('.ajax-when').text(data.date);
      $('.ajax-price').text('R$ ' + data.price);
      $('.ajax-duration').text(data.duration);
      $('.ajax-about').html(data.about);
    })
    )   
    
});