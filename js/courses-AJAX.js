// FETCH API

document.addEventListener("DOMContentLoaded", function(){   
    
    const containerCourses = document.getElementById("courses-container");
    

    const url = "http://brdpo-cms.herokuapp.com/api/courses";
       
    
    //  REQUISIÇÃO 

    fetch(url)
    .then((resp) => resp.json()
    .then(function(data){        
        console.log(data);

        let html = ``; // declara variável vazia          
                 
        let x = data.length-1;  
        
        /* apresenta 3 cards na tela */
        for (x = 0; x < data.length; x++){    	
            
            // vai concatenando o HTML
            html += 
            '<div class="col-lg-4 col-sm-6 mb-5">'+
                '<div class="card p-0 border-primary rounded-0 hover-shadow">'+
                '<img class="card-img-top rounded-0" src="'+ data[x].image+'" alt="course thumb">'+
                '<div class="card-body">'+
                    '<ul class="list-inline mb-2">'+
                    '<li class="list-inline-item"><i class="ti-calendar mr-1 text-color"></i>'+ data[x].date+'</li>'+
                    '<li class="list-inline-item"><a class="text-color" href="#">'+ data[x].category+'</a></li>'+
                    '</ul>'+
                    '<a href="course-single.html?course_id=' + data[x].id +'">'+
                    '<h4 class="card-title mt-3">'+ data[x].name+'</h4>'+
                    '</a>'+
                    '<p class="card-text mb-4">'+ data[x].about+'</p>'+
                    '<a href="course-single.html?course_id=' + data[x].id +'" class="btn btn-primary btn-sm">Ver curso</a>'+
                '</div>'+
                '</div>'+
            '</div>';
                   
        
        } 
        
        containerCourses.innerHTML = html; // insere o conteúdo na div
        
    })
    )   
    
});