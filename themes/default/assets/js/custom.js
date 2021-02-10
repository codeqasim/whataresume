$(function () {
    var url = window.location.pathname; //sets the variable "url" to the pathname of the current window
    var activePage = url.substring(url.lastIndexOf('/') + 1); //sets the variable "activePage" as the substring after the last "/" in the "url" variable
        $('.head_top ul li a').each(function () { //looks in each link item within the primary-nav list
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); //sets the variable "linkPage" as the substring of the url path in each &lt;a&gt;
 
            if (activePage == linkPage) { //compares the path of the current window to the path of the linked page in the nav item
                $(this).parent().addClass('active'); //if the above is true, add the "active" class to the parent of the &lt;a&gt; which is the &lt;li&gt; in the nav list
            }
        });
})




 $('.client_logos_slides').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows: false,
    speed: 2000,
    margin:5,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          margin:0,
          slidesToScroll: 1
        }
      }
    ]
  });


$(document).ready(function(e) {
  //Create a var to store the index of red element
  
  

$(".core-details").click(function(e) {
        
        //Remove the class and add it to the new target
       
       if($(this).find("h2").html() == "Chronological"){
        $('.bg_circle img').attr('src','images/resume/resume_1.jpg');
        $(".core-details").removeClass('red');
         $(this).addClass('red');

        
        }
        if($(this).find("h2").html() == "Functional"){
         $('.bg_circle img').attr('src','images/resume/resume_2.jpg');
          $(".core-details").removeClass('red');
          $(this).addClass('red');
       
        }
        if($(this).find("h2").html() == "Combination"){
           $('.bg_circle img').attr('src','images/resume/resume_3.jpg');
            $(".core-details").removeClass('red');
            $(this).addClass('red');
          
        }
        if($(this).find("h2").html() == "Targeted"){
           $('.bg_circle img').attr('src','images/resume/resume_4.jpg');
            $(".core-details").removeClass('red');
            $(this).addClass('red');
        
        }
        if($(this).find("h2").html() == "Mini-Resume"){
            $('.bg_circle img').attr('src','images/resume/resume_5.jpg');
             $(".core-details").removeClass('red');
             $(this).addClass('red');
         
        }
        if($(this).find("h2").html() == "Infographic Resume"){
           $('.bg_circle img').attr('src','images/resume/resume_6.jpg');
            $(".core-details").removeClass('red');
            $(this).addClass('red');
       
        }
});


var count = -1;
function AddRedClass() {
  var boxes = $('.core-details');
  var boxLength = boxes.length - 1;
  //Check if the actual item isn't more than the length then add 1 otherway restart to 0
  count < boxLength ? count++ : count=0;
  //Remove the class and add it to the new target
 boxes.removeClass('red').eq(count).addClass('red');
 if(boxes.eq(count).find("h2").html() == "Chronological"){
  $('.bg_circle img').attr('src','images/resume/resume_1.jpg');
  }
  if(boxes.eq(count).find("h2").html() == "Functional"){
   $('.bg_circle img').attr('src','images/resume/resume_2.jpg');
  }
  if(boxes.eq(count).find("h2").html() == "Combination"){
     $('.bg_circle img').attr('src','images/resume/resume_3.jpg');
  }
  if(boxes.eq(count).find("h2").html() == "Targeted"){
     $('.bg_circle img').attr('src','images/resume/resume_4.jpg');
  }
  if(boxes.eq(count).find("h2").html() == "Mini-Resume"){
      $('.bg_circle img').attr('src','images/resume/resume_5.jpg');
  }
  if(boxes.eq(count).find("h2").html() == "Infographic Resume"){
     $('.bg_circle img').attr('src','images/resume/resume_6.jpg');
  }
}
setInterval(AddRedClass, 4000);
});

// $('.job_profiling_slider').slick({
//   dots: true,
//   infinite: true,
//   autoplay:true,
//   autoplaySpeed:2000,
//   arrows: false,
//   speed: 2000,
//   margin:5,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows: false,
    speed: 2000,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    asNavFor: '.slider-for',
    dots: true,
    speed: 2000,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$('.resume_samples_slider').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  autoplaySpeed:2000,
  arrows: true,
  speed: 2000,
  margin:5,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        margin:0,
        slidesToScroll: 1
      }
    }
  ]
});




$('.resume_inner').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay:true,
  autoplaySpeed:2000,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.resume_inner1').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay:true,
  autoplaySpeed:2000,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});



$('.top_services_slider').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 3000,
  autoplay:true,
  autoplaySpeed:3000,
  slidesToShow: 1,
  fade:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.testimonials_box_l').slick({
  dots: true,
  infinite: false,
  arrows: false,
  autoplay:true,
  autoplaySpeed:2000,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


 $(document).ready(function() {

    $(".fancybox").fancybox();

});

//   $(document).ready(function() {

//     $(".dropdown")hover();
//     $(".dropdown-menu")slideDown();
// });

$(document).ready(function() {  
    
    $(".head_top_2.dropdown").mouseover(function() {
      $(".dropdown-menu").stop().slideDown("2000");
    });
    $(".head_top_2.dropdown").mouseout(function() {
      $(".dropdown-menu").slideUp("2000");
    });
    

});



  $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

//   $(document).ready(function(){
//     $(".nav_bbar .dropdown").hover(function(){
//         var dropdownMenu = $(this).children(".dropdown-menu");
//         if(dropdownMenu.is(":visible")){
//             dropdownMenu.parent().toggleClass("open");
//         }
//     });
// }); 
  
// $(".dropdown-menu li a").click(function () {

 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();


  $(".resume_samples_types_slider").owlCarousel({
    loop:true,
    nav:false,
    slideSpeed : 2000,
    dots: true,
    dotsSpeed: 2000,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed:  2000,
    rtl:true,
    margin:30,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },            
      960:{
        items:3
      },
      1200:{
        items:6
      }
    }
  });



  $(".moreBox").slice(0, 9).show();
    if ($(".blogBox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 9).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });

  

  //  $(".resume_samples_types_slider").owlCarousel({
  //     loop:true,
  //     navigation : false,
  //     slideSpeed : 500,
  //     paginationSpeed : 800,
  //     rewindSpeed : 1000,
  //     margin:15,
  //     autoPlay : true,
  //     stopOnHover : true
  //     responsive:[
  //     0:{
  //       items:1
  //     },
  //     600:{
  //       items:2
  //     },            
  //     960:{
  //       items:3
  //     },
  //     1200:{
  //       items:6
  //     }
  //   ]
  // });


 var owl = $('#our_product .owl-carousel');
	owl.owlCarousel({
		loop:true,
		nav:true,
		slideSpeed : 2000,
		dots: false,
		dotsSpeed: 2000,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed:  800,
		margin:30,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},            
			960:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

$('#carousel').carousel();

$(document).ready(function() {

    /***Fancy Box POPUP***/

    $('.video_vimeo').fancybox();

    $('.get_quote_form').fancybox();

});




// $(document).ready(function(t) {
//     t('[data-toggle="tooltip"]').tooltip(), t('[data-toggle="popover"]').popover()
// });

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});





$(".image-hotspot").append('<span class="ring"></span>').append('<span class="circle"></span>'), function (e) {
    e("body[data-plugin-page-transition]").get(0) && (e(window).on("beforeunload", function () {
      e("body").addClass("page-transition-active")
    }), window.onpageshow = function (t) {
      t.persisted && e("html").hasClass("safari") && window.location.reload()
    })
  }($)




  // $(document).ready(function(){
  //   $('.image-hotspot4').tooltip({
  //     customClass: 'image-hotspot4'
  //   });
  // });

// $('.image-hotspot-primary5').popover({
//   customClass:'image-hotspot5'
// });
$(document).ready(function(){
    $('.image-hotspot_5').popover();
    $('.image-hotspot_4').popover({
        customClass: 'popover-custom'
    });
    $('.btn-custom-alt').popover({
        customClass: 'popover-custom-alt'
    });
});