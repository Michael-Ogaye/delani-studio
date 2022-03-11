$(window).load(function(){
    let icos= $('#proc img');
    icos.each(function(){
        $(this).click(function(){
            $('Proc div p.card-text').slideToggle(500)
        })
    })
        














})