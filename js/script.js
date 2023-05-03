

$(document).ready(function(){

    //Drop Down Select box 
    $(".select_box_drop ").click(function(){
      $(".select_box_list").slideToggle(300);
    });
    $(".select_box_list").find("li").click(function(e){
      var selected_txt = $(this).text();
      $(".select_box").text(selected_txt);
    });

    $(window).scroll(function(){
      var scroll_top = $(window).scrollTop();
      
      //top Header
       if (scroll_top > 150) {
          $(".top_header").addClass("active_header")
        }else{
          $(".top_header").removeClass("active_header")
        }
    })


    //mobile btn section
    $(".mobile_btn").click(function(){
      $(".header_menu_bar").toggleClass("active_mobile_menu");

      $(".mobile_btn").toggleClass("close_icon");
    })
  
    $(".mobile_menu_btn").click(function(){
      $(".header_menu").addClass("active_menu");
    })
    $(".mobile_close_btn").click(function(){
      $(".header_menu").removeClass("active_menu");
    })
    $(".drop_down").click(function(e){
      
      $(".drop_menu").toggleClass("active_submenu");
    })

   // CountUp 

    $('.counter_box').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });  
      
    });


    // Heat treatment Process tab
    $(".hm_about_cont").find(".abt_page_section").hide();
    $(".hm_about_cont").find(".abt_page_section").eq(0).show();

    $(".abt_rt_list").find("li").find("a").click(function(e){
      e.preventDefault();
      var parent_tab = $(this).parent().index();
      $(".abt_rt_list").parent().find(".active").removeClass("active");
      $(this).parent().addClass("active");
      $(".hm_about_cont").find(".abt_page_section").hide();
      $(".hm_about_cont").find(".abt_page_section").eq(parent_tab).show();
    })

    // var gallery = $('.content'),
    // height = gallery.height();

    // $('.arrow').on('click', function(){
    //     var up = $(this).is('.up_arrow');
        
    //     if (up) {
    //         gallery.animate({'scrollTop': '-=' + height});
    //     } else {
    //         gallery.animate({'scrollTop': '+=' + height});        
    //     }
    // });

    //Sectop scroll spy
    $(".side_nav").find("li").find("a").click(function(e){
      e.preventDefault();
      let target = $(this).attr("href");      
      $('html, body').stop().animate({
        scrollTop: $(target).offset().top - 80
        
      }, 0, function() {
          location.hash = $(target).offset().top - 80;
      });

      return false;

    })


    $(window).scroll(function(){
        var scrol_top = $(window).scrollTop();
        // console.log(scrol_top);
        

        $('.page_sect_cont').each(function(i) {

            if ($(this).position().top - 80 <= scrol_top) {
                $('.side_nav').find(".active-side-nav").removeClass('active-side-nav');
                $('.side_nav li').eq(i).addClass('active-side-nav');
            }       
        });
        
    }).scroll();

    //Owl carousel
    $('#banner-slide').owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      pagination: false,
      dots:false,
      loop: true,
      margin: 20,
      smartSpeed: 1500,
      autoplayTimeout: 5000,
      responsiveClass: true,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        568: {
          items: 2
        },
        600: {
          items: 3
        },
        760: {
          items: 4
        },
        900: {
          items: 5
        },
        
      }
    })

    $('#testimonial_banner_slide').owlCarousel({
      autoplay: true,
      items:3,
      autoplayHoverPause: true,
      loop: true,
      margin: 20,
      smartSpeed: 1500,
      autoplayTimeout: 5000,
      responsiveClass: true,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        568: {
          items: 2
        },
        600: {
          items: 2
        },
        900: {
          items: 3
        }
        
      }
    })

})




