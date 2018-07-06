$(function(){ 
    $('.tab-a').click(function(){  
      $(".tab").removeClass('tab-active');
      $(`.tab[data-id='${$(this).attr('data-id')}']`).addClass("tab-active");
      $(".tab-a").removeClass('active-a');
      $(this).addClass('active-a');
     });
});