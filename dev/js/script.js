$(document).ready(function () {
          
   
          $(".main-menu__link.main-menu__link_dropdown").click(function (e) {
                e.preventDefault();
                
               if ($(this).hasClass('active')) {
                    $(this).removeClass("active");
                    $(this).addClass("dropdown-close");
                    $(this).parent().find('.main-menu__sub-menu').slideUp();
                }
                else if ($(this).hasClass('dropdown-close')) {

                   closeMenus();
                  
                    $(this).addClass("active");
                    $(this).removeClass("dropdown-close");
                    $(this).parent().find('.main-menu__sub-menu').slideDown();
                }
            });

          function closeMenus() {
                $(".main-menu__link.main-menu__link_dropdown").each(function(index, menu) {
                    var menuNodes = document.querySelectorAll(".main-menu__link.main-menu__link_dropdown");

                   menuNodes[index].classList.remove("active");
                    menuNodes[index].classList.add("dropdown-close");

                   $(menu).parent().find('.main-menu__sub-menu').slideUp();

                });
           }
        
    
    $(".item_mobile__dropdown-link").click(function(e){
         e.preventDefault();
        $(this).parent().parent().toggleClass('open');
         $(this).parent().parent().parent().find('.calendar__item_desctop').slideToggle();
    });
    
    
     $(".ico-slide-up").click(function(e){
         e.preventDefault();
         $(this).parent().parent().find('.calendar__item_desctop').slideUp();
         $(this).parent().parent().find('.calendar__item_mobile').removeClass('open');
    });
    
   /* $(".main-menu__link_dropdown.close").on('click', function (e) {
                e.preventDefault();
              console.log('close');
                $(".main-menu__link_dropdown.active").parent().find('.main-menu__sub-menu').slideUp();
                $(".main-menu__link_dropdown.active").removeClass('active').addClass('close');
                $(this).removeClass('close').addClass('active');
                $(this).parent().find('.main-menu__sub-menu').slideDown();
           });
       
     */
    
    
            $(".mobile-menu").on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('active');
                $('.main-menu__list').slideToggle();
                $('.header').toggleClass('active');
                
            });
            

            $('a.scroll-down').click(function () {
                var target = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 800);
                return false;
            });
            $('.circle').circleProgress({
                value: 0
            });
    var mainCalendar = $('.calendar');
    
    if (mainCalendar.length) {
         var waypoint = new Waypoint({
                element: document.getElementsByClassName('calendar')
                , handler: function (direction) {
                    $('.first.circle').circleProgress({
                        value: 0.6
                    }).on('circle-animation-progress', function (event, progress) {
                        $(this).find('strong').html('<i>2</br>days</br>left</br></i>');
                    });
                    $('.second.circle').circleProgress({
                        value: 0.8
                    }).on('circle-animation-progress', function (event, progress) {
                        $(this).find('strong').html('<i>1</br>day</br>left</br></i>');
                    });
                    $('.third.circle').circleProgress({
                        value: 0.3
                    }).on('circle-animation-progress', function (event, progress) {
                        $(this).find('strong').html('<i>6</br>days</br>left</br></i>');
                    });
                }
                , offset: '62%'
            });
        
        
    function progressBar(percent, $element, day) {
        var progressBarWidth = percent;
        var dayStr;
        if (day==1) {
            dayStr='day'
        } else{
             dayStr='days'
        };
        $element.find('div.progress-img').css("width" , progressBarWidth +'%');
        
        $element.find('div.progress-label').html(day +' '+ dayStr + ' left');
    }
    
               progressBar(60, $('#progress1'), 2);
               progressBar(80, $('#progress2'), 1);
               progressBar(85, $('#progress3'), 6); 
               progressBar(80, $('#progress4'), 1);
               progressBar(45, $('#progress5'), 2); 
    
    var mobileProgress = false;
    
    window.addEventListener('resize', function() {
          if($(window).width() < 620 && !mobileProgress ) {
              console.log('resize');
               progressBar(60, $('#progress1'), 2);
               progressBar(80, $('#progress2'), 1);
               progressBar(85, $('#progress3'), 6); 
               progressBar(80, $('#progress4'), 1);
               progressBar(45, $('#progress5'), 2); 
             
          } 
    });
    }
           
    var reviewCircle = $('.review-circle');
    if(reviewCircle && reviewCircle.length){
         $('.review-circle.circle').circleProgress({
                        value: 0.8
                    }).on('circle-animation-progress', function (event, progress) {
                        $(this).find('strong').html('<i>1</br>day</br>left</br></i>');
                    });
    }
    
    
    var reviewVideo = document.getElementById("review-video");
    
    if(reviewVideo){
          reviewVideo.onloadeddata = function(){
            reviewVideo.oncanplay = function() {
                var isPlaying = false;
      $('.review-main__video').removeClass('no-video');
      console.log('remove no-video');
       $('.review-main__video').click(function(){
           if(!isPlaying){
               reviewVideo.play();
               $('.review-main__video-overlay').css('display', 'none');
           } 
           else{
               reviewVideo.pause();
               $('.review-main__video-overlay').css('display', 'block');
               
           }
           
           isPlaying = !isPlaying;
           
        });
            }
    
  };
    
  
    }
    

   
  $('.tab-btn.tab-link').click(function (e) {
                e.preventDefault();
        
                var target = $(this).attr('href');
                
               var activeLink = $('.tab-btn.active-tab-link');
                var activeTab = $('.review-tabs__tab.opened-tab');
                
                $(activeLink).removeClass('active-tab-link').addClass('tab-link');
           $(activeTab).removeClass('opened-tab').addClass('closed-tab');
                $(target).removeClass('closed-tab').addClass('opened-tab');
                $(this).removeClass('tab-link').addClass('active-tab-link');
            });
   $('.tab-btn.active-tab-link').click(function (e) {
	e.preventDefault();
     var target = $(this).attr('href');
                console.log('target1'+target);
               var activeLink = $('.tab-btn.active-tab-link');
                var activeTab = $('.review-tabs__tab.opened-tab');
                
                $(activeLink).removeClass('active-tab-link').addClass('tab-link');
           $(activeTab).removeClass('opened-tab').addClass('closed-tab');
                $(target).removeClass('closed-tab').addClass('opened-tab');
                $(this).removeClass('tab-link').addClass('active-tab-link');
            }); 
});