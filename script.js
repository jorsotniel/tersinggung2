$('.page-scroll').on('click', function(e){
// Ambil href 
var tujuan = $(this).attr('href'); 
// Tangkap elemen
var elemenTujuan = $(tujuan); 
// Pindahkan scroll 
$('body').animate({
    scrollTop: elemenTujuan.offset().top - 50
}, 1250, 'easeInOutExpo'); 
}); 

// Paralax
// about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul'); 
});   
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // portfolio 
    if(wScroll > $('.portfolio').offset().top - 250){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eg(i).addClass('Muncul');
            }, 300 * (i+1));       
        });
    }
});