$(document).ready(function() {

    // Tabs
    $('.tabsList__tabs a').on('click', function (event) {
        event.preventDefault();
        const num = $(this).attr('href');
        console.log(num);
        $('.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');
        $(num).slideDown().siblings().slideUp();
    });


    // Slick slider for Categories 

    $('.slider__wrap').slick({
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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

});