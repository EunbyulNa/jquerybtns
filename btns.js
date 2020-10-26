$(function () {
 var nn = 300;
  $('button:nth-child(-n+4)').on('mouseover',function(){

    $(this).animate({'background-color':'#ffe6e6','color':'#e60000'},nn);
  })
   .on('mouseout',function(){

    $(this).animate({'background-color':'#ffcccc','color':'#fff'},nn);
  });

  $('button.se').on('mouseover',function() {
    $(this).animate({'border-width':'10px', color:'#e60000'})
  })
  .on('mouseout',function(){

   $(this).animate({'border-width':'5px', color:'fff'});
 });

 $('button.thr').on('mouseenter',function(){
   $(this).find('p').stop().animate({'width':'100%'},nn);
 })
 .on('mouseleave',function(){

  $(this).find('p').stop().animate({'width':'0%'},nn);
});

});
