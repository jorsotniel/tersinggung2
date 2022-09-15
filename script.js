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