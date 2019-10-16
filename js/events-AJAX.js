// FETCH API

document.addEventListener("DOMContentLoaded", function(){   
    
    const containerEvents = document.getElementById("events-container");
    

    const url = "http://brdpo-cms.herokuapp.com/api/events";
       
    
    //  REQUISIÇÃO 

    fetch(url + "?limit=3")
    .then((resp) => resp.json()
    .then(function(data){        
        console.log(data.length);

        let html = ``; // declara variável vazia          
                 
        let x = data.length-1;  
        
        /* apresenta 3 cards na tela */
        for (x = 0; x < data.length; x++){    	
            
            // vai concatenando o HTML
            html += 
            '<div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">'+
                '<div class="card border-0 rounded-0 hover-shadow">'+
                '<div class="card-img position-relative">'+
                    '<img class="card-img-top rounded-0" src="'+data[x].image+'" alt="event thumb">'+
                    '<div class="card-date"><span>18</span><br>December</div>'+
                '</div>'+
                '<div class="card-body">'+
                    //  location 
                    '<p><i class="ti-location-pin text-primary mr-2"></i>'+data[x].location+'</p>'+
                    '<a href="event-single.html?event_id=' + data[x].id +'"><h4 class="card-title">'+data[x].name+'</h4></a>'+
                '</div>'+
                '</div>'+
            '</div>';
                   
        
        } 
        
        containerEvents.innerHTML = html; // insere o conteúdo na div
        
    })
    )   
    
});