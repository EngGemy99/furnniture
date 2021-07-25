$(document).ready(function(){


  // for buragr menu
  $('.burgar').on('click',function(){

       $(this).toggleClass('toggle1');
     
  });

  // mix it up
  var mixer = mixitup('.gallery');

  $('.protfolio ul li ').click(function (){

        $(this).addClass('active').siblings().removeClass('active');

  })


  // fancy box
  $('.fancy').fancybox({
            selector : '.imglist a:visible',
            thumbs   : {
                autoStart : true
            }
  });



  // for navbar
  $('nav li a').on('click' , function(){

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');


    $('html , body').animate({

      scrollTop:$('#' + $(this).data('scroll')).offset().top-80
    },1500)

  })


   // for navbar

   $(window).scroll(function(){
    if($(window).scrollTop()>=140)
    {
        $('nav').css
        (
            {
                'background':'rgba(0, 0, 0, 0.8)',
                'padding':'10px 0',
                'box-shadow': '-4px 10px 14px -12px rgba(0,0,0,0.75)'
            }
        );
    }
    else
    {
        $('nav').css
        (
            {
                "background":'transparent',
                'paddingTop':'15px',
                'box-shadow': 'none'
            }
        );
    }


   });

   if($(window).scrollTop()>=140)
   {
       $('nav').css
       (
           {
            'background':'rgba(0, 0, 0, 0.8)',
            'padding':'10px 0',
            'box-shadow': '-4px 10px 14px -12px rgba(0,0,0,0.75)'
           }
       );
   }
   else
   {
       $('nav').css
       (
           {
            "background":'transparent',
            'paddingTop':'15px',
            'box-shadow': 'none'
           }
       );
   }






  $(window).scroll(function(){

    $('section , header').each(function(){
        if($(window).scrollTop()+100 >= $(this).offset().top)
        {
            var secID =$(this).attr('id');
            $('ul li a').removeClass('active');
            $('ul li a[data-scroll="' + secID +'"]').addClass('active')
        }
    });
});


  // button up

  $(window).scroll(function(){

          if($(window).scrollTop() >=550)
          {
              $('.up').fadeIn(1000);
          }
          else
          {
              $('.up').fadeOut(1000);
          }
  })

  if($(window).scrollTop() >=550)
  {
      $('.up').fadeIn(1000);
  }
  else
  {
      $('.up').fadeOut(1000);
  }
 

  // up button click

  $('.up button').click(function(){
    $('html , body').animate({
        scrollTop:0
    },500)

  });






});
  

