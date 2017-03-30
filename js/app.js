$(document).ready(function () {
  function multipleProgressBar(elemToAnim,elemWidth) {
    var width = 1;
    var value;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == elemWidth) {
          clearInterval(id);
      } else {
          width++;
          value =  (width * 3) + 'px';
          elemToAnim.css("width", value);
          elemToAnim.text(width + '%');
          elemToAnim.css(
            "backgroundColor",
            "#ed6a5a"
          );
      }
    }
  }

  var i = 0;

  for (i = 0  ; i <= 100; i+=5) {
      multipleProgressBar($(".w" + i), i);
  }
});

var canvas  = document.querySelector('#canvas');

var context = canvas.getContext('2d');

context.lineWidth = "3";
context.strokeStyle = "black";
context.strokeRect(300, 100, 200, 300);
