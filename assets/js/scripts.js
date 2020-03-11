$(document).ready(function() {
  $('#hamburguer').sidr({
    name: 'sidr-mobile',
    source: '#main-nav',
    side: 'right'
  });
  $('#hamburguer').on('click',function() {
    $('#nav').toggleClass( "cambiaPosicion" );
  });
});