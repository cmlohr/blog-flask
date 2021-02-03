$("html").mousemove(function(event) {
  var blobEye = $(".blob-eye");
  var x = (blobEye.offset().left) + (blobEye.width() / 1);
  var y = (blobEye.offset().top) + (blobEye.height() / 1);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  blobEye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});