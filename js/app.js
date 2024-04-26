// jquery

  $(function(){
    
// Related Product

$('.relatedProduct').slick({
  slidesToShow: 4,
  prevArrow: '<span class="priv-arrow"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 992,
       settings: {
          slidesToShow: 3
        }
      },
     {
          breakpoint: 577,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 402,
          settings: {
            slidesToShow: 1
          }
        }

    ]

});



// Quantity section
var i = 1

$('.plus').click(function(){
  i=parseInt($('.num').val());
  i=i+1;
  $('.num').val(i);
})

$('.minus').click(function(){
  i=parseInt($('.num').val());
  i=i-1;
  if(i==-1){
    i=0;
  }
  $('.num').val(i);
})



// Leather Jackets 
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  prevArrow: '<span class="priv-arrow"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
  centerMode: true,
  focusOnSelect: true
});




// home banner slider
      $('.bannerSlider').slick({
          arrows: false,
          dots: true,
          dotsClass: 'bannerDots container',
          autoplay: true,
          autoplaySpeed: 2000
      });

      $('.bannerSliderSm').slick({
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
   
      });
// Bootstrap tooltip
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// product slider
      $('.productCnt').slick({
          slidesToShow: 4,
          prevArrow: '<span class="priv-arrow"><i class="fa-solid fa-angle-left"></i></span>',
          nextArrow: '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
          responsive: [
              {
                breakpoint: 992,
               settings: {
                  slidesToShow: 3
                }
              },
             {
                  breakpoint: 577,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 402,
                  settings: {
                    slidesToShow: 1
                  }
                }
       
            ]
      });
 // see all product
     $('.BothSliderCnt').slick({
        arrows: false,
        slidesToShow: 2,
        dots: true,
        dotsClass: 'productDots container',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1
            }
          },
    
      
        ]

      });
// final countdown
        $('.timer').countdown('2024/08/01', function(event) {
    
          $('.day').html(event.strftime('%D'));
          $('.hour').html(event.strftime('%H'));
          $('.min').html(event.strftime('%M'));
          $('.sec').html(event.strftime('%S'));
  
        });
 // latest

        $('.lastestSlide').slick({
          slidesToShow: 4,
          arrows: false,
          dots: true,
          dotsClass: 'latestDots container',
          responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                  breakpoint: 577,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 402,
                  settings: {
                    slidesToShow: 1
                  }
                }
       
            ]
      });


      // Counter section
      $('.counter').counterUp({
        delay: 10,
        time: 1000,
       });



// leadership section
       
      $('.leadershipCnt').slick({
        slidesToShow: 4,
        prevArrow: '<span class="leaderPre-arrow"><i class="fa-solid fa-play"></i></span>',
        nextArrow: '<span class="leaderNxt-arrow"><i class="fa-solid fa-play"></i></span>',
        responsive: [
            {
              breakpoint: 992,
             settings: {
                slidesToShow: 3
              }
            },
           {
                breakpoint: 577,
                settings: {
                  slidesToShow: 2
                }
              }
             
          ]
    });

// customer section 
          
      $('.customerCnt').slick({
        slidesToShow: 1,
        arrows: false,
          dots: true,
          dotsClass: 'customerDots container',
      
    });



      // instagram section
$('.instagramCnt').slick({
  slidesToShow: 6,
  arrows: false,
    dots: true,
    dotsClass: 'instaDots container',
    responsive: [
      {
        breakpoint: 992,
       settings: {
          slidesToShow: 3
        }
      },
     {
          breakpoint: 577,
          settings: {
            slidesToShow: 2
          }
        }

    ]

});

// Beauty inspired section


})





 


new VenoBox({
  selector: '.venobox',
});
