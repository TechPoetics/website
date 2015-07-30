$(document).ready(function() {
  var header = $('header');
  var pattern = Trianglify({
    cell_size: 40,
    width: header.outerWidth(),
    height: header.outerHeight()
  });

  header.prepend(pattern.canvas());
  $('header canvas').addClass('background');
});
