//$('body').hide().fadeIn(3000);
//$('img').hide();
$('h1').click(hidesection);
function hidesection(){
    $(this).text("Hiding......");
    $('body').children('p').slideToggle();
}
$('img').click(hidePicture);
function hidePicture(){
    $(this).text("Hiding......");
    $('body').children('p').slideToggle();
}


$('a').each(change);
function change(){
    var link = $(this).attr('href');
    console.log(links);
    $(this).attr('href','https://www.google.com')
}