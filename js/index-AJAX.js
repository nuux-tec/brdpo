// FETCH API

document.addEventListener("DOMContentLoaded", function(){   
    
    const containerCurses = document.getElementById("home-curses-cards");
    const containerEvents = document.getElementById("home-events-cards");    
    const containerNews = document.getElementById("home-news-cards");

    const url = "http://brdpo-cms.herokuapp.com";

    const endpoint = {
        curses : "/api/courses",
        events : "/api/events",
        news : "/api/news"
    };   
    
    //  REQUISIÇÃO PARA CURSOS 

    fetch(url + endpoint.curses + '?limit=3')
    .then((resp) => resp.json()
    .then(function(data){
        // console.log("CURSES");
        // console.log(data);
        let html = ``; // declara variável vazia          
                 
        // let x = data.length-1;  
        
        /* apresenta 3 cards na tela */
        for(x = 0; x < data.length;x++){    	
            
            // vai concatenando o HTML
            html += 
            '<div class="col-lg-4 col-sm-6 mb-5">'+
                '<div class="card p-0 border-primary rounded-0 hover-shadow">'+
                    '<img class="card-img-top rounded-0" src="'+data[x].image+'" alt="course thumb">'+
                    '<div class="card-body">'+
                    '<ul class="list-inline mb-2">'+
                        '<li class="list-inline-item"><i class="ti-calendar mr-1 text-color"></i>'+data[x].date+'</li>'+
                        '<li class="list-inline-item"><a class="text-color" href="#">R$ '+ data[x].price +'</a></li>'+
                    '</ul>'+
                    ' <a href="course-single.html?course_id=' + data[x].id +'">'+
                        '<h4 class="card-title mt-3">'+ data[x].name+'</h4>'+
                    '</a>'+
                    '<p class="card-text mb-4">'+data[x].about+'</p>'+
                        '<a href="course-single.html?course_id=' + data[x].id +'" class="btn btn-primary btn-sm">Ver curso</a>'+
                    '</div>'+
                '</div>'+
            '</div>';       
        
        } 
        
        containerCurses.innerHTML = html; // insere o conteúdo na div
        
    })
    ) 
    
    // REQUISIÇÃO PARA EVENTOS 

    fetch(url + endpoint.events + '?limit=3')
    .then((resp) => resp.json()
    .then(function(data){
        // console.log("EVENTS");
        // console.log(data);
        let html = ``; // declara variável vazia          
                 
        // let x = data.length-1;  
        
        /* apresenta 3 cards na tela */
        for (x = 0; x < data.length; x++){    	
            
            // vai concatenando o HTML
            html += 
            '<div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">'+
                '<div class="card border-0 rounded-0 hover-shadow">'+
                    '<div class="card-img position-relative">'+
                    '<img class="card-img-top rounded-0" src="'+data[x].image+'" alt="event thumb">'+
                    '<div class="card-date"><span>'+ data[x].day +'</span><br>'+ data[x].month +'/'+ data[x].year +'</div>'+
                    '</div>'+
                   '<div class="card-body">'+
                    
                    '<p><i class="ti-location-pin text-primary mr-2"></i>'+data[x].location+'</p>'+
                        '<a href="event-single.html?event_id=' + data[x].id +'">'+
                        '<h4 class="card-title">'+data[x].name+'</h4>'+
                    '</a>'+

                    '<p class="card-text">' + data[x].name + '</p>' +
                        '<a href="event-single.html?event_id=' + data[x].id +'" class="btn btn-primary btn-sm">Ver evento</a>' +
                    '</div>' +
                    '</div>'+
                '</div>'+
            '</div>';
                   
        
        } 
        
        containerEvents.innerHTML = html; // insere o conteúdo na div
        
    })
    ) 


    //  REQUISIÇÃO PARA Notícias 

    fetch(url + endpoint.news + '?limit=3')
    .then((resp) => resp.json()
    .then(function(data){
        // console.log("notícias");
        console.log(data);
        let html = ``; // declara variável vazia          
                 
        // let x = data.length-1;  
        
        /* apresenta 3 cards na tela */
        for (x = 0; x < data.length; x++){    	
            
            // vai concatenando o HTML
            html += 
            '<article class="col-lg-4 col-sm-6 mb-5 mb-lg-0">'+
                '<div class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">'+
                    '<img class="card-img-top rounded-0" src="' + data[x].image +'" alt="Post thumb">'+
                    '<div class="card-body">'+
                   
                   '<ul class="list-inline mb-3">'+
                        '<li class="list-inline-item mr-3 ml-0">' + data[x].day  + '/' +  data[x].month + '/' + data[x].year + '</li>'+
                    '</ul>'+
                   
                    '<a href="notice-single.html?news_id='+ data[x].id +'">'+
                        '<h4 class="card-title">'+ data[x].name+'</h4>'+
                    '</a>'+
                    '<a href="notice-single.html?news_id=' + data[x].id +'" class="btn btn-primary btn-sm">Leia mais</a>'+
                    '</div>'+
                '</div>'+
            '</article>';
                   
        
        } 
        
        containerNews.innerHTML = html; // insere o conteúdo na div
        
    })
    ) 
});