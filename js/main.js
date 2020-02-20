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
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      });


      // Slick slider for products
      
      $('.spotlight__wrap').slick({
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      });

      // Slick slider for reviews

      $('.reviews__wrap').slick({
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      });

      // Slick slider for clients

      $('.clients__wrap').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
               dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      });

      // Slick slider for featured

      $('.featured__wrap').slick({
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 300,
        responsive: [
          {
            breakpoint:576,
            settings: {
              dots: false
            }
          }
        ]
      });

      // Sticky on scroll

      window.onscroll = function() {
        toggleSticky();
      }

      const navbar = document.querySelector('.header__nav');

      const sticky = navbar.offsetTop;

      function toggleSticky() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }

});