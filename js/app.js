$(function () {


  ////////////////////// le dessin du visage //////////////////////////


  let canvas  = document.querySelector('#canvas');

  let context = canvas.getContext('2d');

  //forme visage
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.lineJoin = "bevel";

  let points = [
    [302, 140],
    [280, 180],
    [290, 320],
    [340, 380],
    [390, 400],
    [470, 340],
    [488, 210],
    [476, 190],
    [302, 140]
  ];

  context.beginPath();
  context.moveTo(points[0][0], points[0][1]);  // 1er point (sens contraire des aiguilles d'une montre)
  for(let i = 1; i < points.length; ++i)
  {
    context.lineTo(points[i][0], points[i][1]);
  }
  // context.closePath();
  context.stroke();


  //forme oreille droite
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(478, 295);
  context.lineTo(496, 288);
  context.lineTo(508, 235);
  context.lineTo(486, 235);
  context.stroke();

  //forme cheveux
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(506, 235);
  context.lineTo(496, 140);
  context.lineTo(496, 130);
  context.lineTo(390, 75);
  context.lineTo(318, 80);
  context.lineTo(292, 124);
  context.lineTo(302, 140);

  context.stroke();


  //forme cheveux oreille gauche
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(292, 124);
  context.lineTo(275, 124);
  context.lineTo(254, 155);
  context.lineTo(257, 230);

  context.stroke();

  // oreille gauche
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(282, 230);
  context.lineTo(251, 229);
  context.lineTo(255, 280);
  context.lineTo(288, 298);

  context.stroke();

  //nez
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(388, 165);
  context.lineTo(390, 303);
  context.lineTo(400, 303);
  context.lineTo(390, 313);
  context.lineTo(380, 303);

  context.stroke();

  //sourcil droit
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(400, 225);
  context.lineTo(460, 227);

  context.stroke();

  //sourcil gauche
  context.lineWidth = "3";
  context.strokeStyle = "#2ac1ad";
  context.beginPath();
  context.moveTo(368, 225);
  context.lineTo(310, 225);

  context.stroke();

  //oeil droit
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(415, 250);
  context.lineTo(436, 235);
  context.lineTo(457, 248);
  context.closePath();
  context.stroke();

  //oeil gauche
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(355, 250);
  context.lineTo(336, 235);
  context.lineTo(317, 248);
  context.closePath();
  context.stroke();

  //bouche
  function drawMouth() {
    context.save();
  }
  context.lineWidth = "3";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(420, 343);
  context.lineTo(390, 353);
  context.lineTo(370, 340);
  context.closePath();
  context.stroke();


///////////////////////// Les animations sur le restes du site ////////////

//Smooth scroll //

  function scrollSpy(scrollButton) {
    scrollButton.click(function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000, "easeOutQuart", function(){
          window.location.hash = hash;
          });
    });
  }

scrollSpy($('.scrollButton'));

// Animations des progress bar dans la partie Compétences //////

  function multipleProgressBar(elemToAnim,elemWidth) {
    let width = 1;
    let value;
    let id = setInterval(frame, 10);
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

  let scrollPositionAtSkills = false;

// lancement de la fonction quand la position de l'écran est bonne

  $(window).scroll(function() {

    if(($(window).scrollTop() >= $('#skills').offset().top - 350) && (scrollPositionAtSkills == false)) {
      let i = 0;
      for (i = 0  ; i <= 100; i+=5) {
          multipleProgressBar($(".w" + i), i);
        }
      scrollPositionAtSkills = true;
      return scrollPositionAtSkills;
    }
  });

//fermeture de la fonciton jquery
  
});
