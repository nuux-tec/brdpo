// FETCH API

document.addEventListener("DOMContentLoaded", function(){   
    
    const containerNotice = document.getElementById("notice-container");
    

    const url = "http://brdpo-cms.herokuapp.com/api/news";
       
    
    //  REQUISIÇÃO 

    fetch(url)
    .then((resp) => resp.json()
    .then(function(data){        
        console.log(data);

        let html = ``; // declara variável vazia          
                 
        let x = data.length-1;  
        
        /* apresenta 3 cards na tela */
        for(x; x >= data.length-3;x--){    	
            
            // vai concatenando o HTML
            html += 
            '<li class="d-md-table mb-4 w-100 border-bottom hover-shadow">'+
              '<div class="d-md-table-cell text-center p-4 bg-primary text-white mb-4 mb-md-0 ">'+
              '<span class="h2 d-block">30</span> Abril,2019</div>'+
              '<div class="d-md-table-cell px-4 vertical-align-middle mb-4 mb-md-0">'+
                '<a href="notice-single.html" class="h4 mb-3 d-block">'+ data[x].name+'</a>'+
                '<p class="mb-0">'+ data[x].content+'</p>'+
              '</div>'+
              '<div class="d-md-table-cell text-right pr-0 pr-md-4"><a href="notice-single.html"'+
                  'class="btn btn-primary">leia mais</a></div>'+
           ' </li>';
                   
        
        } 
        
        containerNotice.innerHTML = html; // insere o conteúdo na div
        
    })
    )   
    
});