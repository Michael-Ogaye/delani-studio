$(document).ready(function(){
    let icos= $('.card');
    icos.click(function(){
    
 $(this).find('p.card-text').slideToggle(500).closest('.card').find('.card-img-top').slideToggle(500);

   



    })
    

    //flipping the cards
let flipas=$('.panels li');
flipas.hover(function(){
    $(this).find('.top').toggle().closest('li').find('.bot').show();
})



})