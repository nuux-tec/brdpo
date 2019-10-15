(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('header').offset().top > 10) {
            // $('.top-header').addClass('hide');
            $('.navigation').addClass('nav-bg');
        } else {
            // $('.top-header').removeClass('hide');
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    //Hero Slider
    // $('.hero-slider').slick({
    //     autoplay: false,
    //     autoplaySpeed: 7500,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     infinite: false,
    //     arrows: true,
    //     fade: true,
    //     prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
    //     nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
    //     dots: false
    // });
    // $('.hero-slider').slickAnimation();

    // venobox popup
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    
    // mixitup filter
    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
    var mixer;
    if (containerEl) {
        mixer = mixitup(containerEl, {
            selectors: {
                target: '[data-ref~="mixitup-target"]'
            }
        });
    }

    //  Count Up
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    $(window).on('scroll', function () {
        counter();
    });

})(jQuery);


// FETCH API

document.addEventListener("DOMContentLoaded", function(){   
    
    const containerCurses = document.getElementById("home-curses-cards");
    const containerevents = document.getElementById("home-events-cards");
    const url = "http://brdpo-cms.herokuapp.com";

    const endpoint = {
        curses : "/api/courses",
        events : "/api/events",
        news : "/api/news"
    };   
    
    //  REQUISIÇÃO PARA CURSOS 

    fetch(url+endpoint.curses)
    .then((resp) => resp.json()
    .then(function(data){
        console.log("CURSES");
        console.log(data);
        let html = ``; // declara variável vazia          
                 
        let x = data.length-1;  
        
        /* apresenta 3 cards na tela */
        for(x; x >= data.length-3;x--){    	
            
            // vai concatenando o HTML
            html += 
            '<div class="col-lg-4 col-sm-6 mb-5">'+
                '<div class="card p-0 border-primary rounded-0 hover-shadow">'+
                    '<img class="card-img-top rounded-0" src="images/courses/course-1.jpg" alt="course thumb">'+
                    '<div class="card-body">'+
                    '<ul class="list-inline mb-2">'+
                        '<li class="list-inline-item"><i class="ti-calendar mr-1 text-color"></i>'+data[x].date+'</li>'+
                        '<li class="list-inline-item"><a class="text-color" href="#">R$ '+ data[x].price +'</a></li>'+
                    '</ul>'+
                   ' <a href="#">'+
                        '<h4 class="card-title mt-3">'+ data[x].name+'</h4>'+
                    '</a>'+
                    '<p class="card-text mb-4">'+data[x].about+'</p>'+
                    '<a href="#" class="btn btn-primary btn-sm">Ver curso</a>'+
                    '</div>'+
                '</div>'+
            '</div>';       
        
        } 
        
        containerCurses.innerHTML = html; // insere o conteúdo na div
        
    })
    ) 
    
    // REQUISIÇÃO PARA EVENTOS 

    fetch(url+endpoint.events)
    .then((resp) => resp.json()
    .then(function(data){
        console.log("EVENTS");
        console.log(data);
        let html = ``; // declara variável vazia          
                 
        let x = data.length-1;  
        
        /* apresenta 3 cards na tela */
        for(x; x >= data.length-3;x--){    	
            
            // vai concatenando o HTML
            html += 
            '<div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">'+
                '<div class="card border-0 rounded-0 hover-shadow">'+
                    '<div class="card-img position-relative">'+
                    '<img class="card-img-top rounded-0" src="images/events/event-1.jpg" alt="event thumb">'+
                    '<div class="card-date"><span>18</span><br>December</div>'+
                    '</div>'+
                   '<div class="card-body">'+
                    
                    '<p><i class="ti-location-pin text-primary mr-2"></i>'+data[x].location+'</p>'+
                    '<a href="#">'+
                        '<h4 class="card-title">'+data[x].name+'D</h4>'+
                    '</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
                   
        
        } 
        
        containerevents.innerHTML = html; // insere o conteúdo na div
        
    })
    ) 

});