var mainimage = $('.ft') .offset().top;


$( window ).scroll(function() {
  if ( $(window).scrollTop() > mainimage ) {
    $( '#header' ).addClass( 'fixed' );
  } else {
    $( '#header' ).removeClass( 'fixed' );
  }
});
