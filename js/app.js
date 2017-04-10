$(function () {

  $(this).scrollTop(0);

  ////////////////////// le dessin du visage //////////////////////////


  let canvas  = document.querySelector('#canvas');

  let context = canvas.getContext('2d');

  //forme visage
  context.lineWidth = "3";
  context.strokeStyle = "#242424";
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
  context.strokeStyle = "#242424";
  context.beginPath();
  context.moveTo(478, 295);
  context.lineTo(496, 288);
  context.lineTo(508, 235);
  context.lineTo(486, 235);
  context.stroke();

  //forme cheveux
  context.lineWidth = "3";
  context.strokeStyle = "#242424";
  context.beginPath();
  context.moveTo(506, 235);
  context.lineTo(496, 140);
  context.lineTo(496, 130);
  context.lineTo(390, 75);
  context.lineTo(318, 80);
  context.lineTo(292, 124);
  context.lineTo(302, 140);
  context.lineTo(476, 190);

  context.stroke();


  //forme cheveux oreille gauche
  context.lineWidth = "3";
  context.strokeStyle = "#242424";
  context.beginPath();
  context.moveTo(292, 124);
  context.lineTo(275, 124);
  context.lineTo(254, 155);
  context.lineTo(257, 230);

  context.stroke();

  // oreille gauche
  context.lineWidth = "3";
  context.strokeStyle = '#242424';
  context.beginPath();
  context.moveTo(282, 230);
  context.lineTo(251, 229);
  context.lineTo(255, 280);
  context.lineTo(288, 298);

  context.stroke();

  //nez
  context.lineWidth = "3";
  context.strokeStyle = "#242424";
  context.beginPath();
  context.moveTo(388, 165);
  context.lineTo(390, 303);
  context.lineTo(400, 303);
  context.lineTo(390, 313);
  context.lineTo(380, 303);

  context.stroke();

  //sourcil droit
  context.lineWidth = "3";
  context.strokeStyle = "#242424";
  context.beginPath();
  context.moveTo(400, 225);
  context.lineTo(460, 227);

  context.stroke();

  //sourcil gauche
  context.lineWidth = "3";
  context.strokeStyle = "#ff5953";
  context.beginPath();
  context.moveTo(368, 225);
  context.lineTo(310, 225);

  context.stroke();

  //oeil droit
  context.lineWidth = "3";
  context.strokeStyle = "#242424";
  context.beginPath();
  context.moveTo(415, 250);
  context.lineTo(436, 235);
  context.lineTo(457, 248);
  context.closePath();
  context.stroke();

  //oeil gauche
  context.lineWidth = "3";
  context.strokeStyle = "#242424";
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
  context.strokeStyle = "#242424";
  context.beginPath();
  context.moveTo(420, 343);
  context.lineTo(390, 353);
  context.lineTo(370, 340);
  context.closePath();
  context.stroke();


///////////////////////// Les animations sur le restes du site ////////////



  let figure = $('figure');


      // Section variable //

  let home = $('#home');
  let latestWork = $('#latestWork');
  let skills = $('#skills');
  let aboutMe = $('#aboutMe');
  let contact = $('#contact');
  let footer = $('#footer');

      // Link variable

  let homeLink = $('#homeLink');
  let latestWorkLink = $('#latestWorkLink');
  let skillsLink = $('#skillsLink');
  let aboutMeLink = $('#aboutMeLink');
  let contactLink = $('#contactLink');



  //Smooth scroll //



  function scrollSpy(scrollButton) {
    scrollButton.click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top - 89
        }, 750, "easeInCubic");
    });
  }

  let linkScrollButton = $('.scrollButton');

  scrollSpy(linkScrollButton);



//// fonction scroll event  qui déclenche d'autres foncitons ou anim ////



  function onScrollEvent(targetSection, funcToLaunch, verifyVar, number, optionnel) {
    $(window).scroll(function() {
        if(($(window).scrollTop() >= targetSection.offset().top - number) && (verifyVar == false)) {
          setTimeout(funcToLaunch, 50);
          verifyVar = true;
          return verifyVar;
        }
    });
  }




  // let sections = [
  //   "home",
  //   "latestWork",
  //   "skills",
  //   "aboutMe",
  //   "contact",
  //   "footer"
  // ];
  //
  // $(window).scroll(function() {
  //   for(let i = 0; i < sections.length - 1; ++i)
  //   {
  //     let startTargetSection = $("#" + sections[i]);
  //     let endTargetSection = $("#" + sections[i+1]);
  //     let linkToActive = $("#" + sections[i] + "Link");
  //
  //     if(
  //       ($(window).scrollTop() >= startTargetSection.offset().top - 350) &&
  //       ($(window).scrollTop() < endTargetSection.offset().top - 350)
  //     ) {
  //       if($('.activeLink')) {
  //         $('.activeLink').removeClass('activeLink');
  //       }
  //       linkToActive.addClass('activeLink');
  //     }
  //   }
  // });
  //
  function activeLink(startTargetSection, endTargetSection, linkToActive) {
    $(window).scroll(function() {
      if( ($(window).scrollTop() >= startTargetSection.offset().top - 350) &&
        ($(window).scrollTop() < endTargetSection.offset().top - 350) ) {
        if($('.activeLink')) {
          $('.activeLink').removeClass('activeLink');
        }

        linkToActive.addClass('activeLink');

      }
    });
  }

  activeLink(home, latestWork, homeLink);
  activeLink(latestWork, skills, latestWorkLink);
  activeLink(skills, aboutMe, skillsLink);
  activeLink(aboutMe, contact, aboutMeLink);
  activeLink(contact, footer, contactLink);

  // $('.scrollButton').click(function(e) {
  //   if($('.activeLink')) {
  //     $('.activeLink').removeClass('activeLink');
  //   }
  //   $(this).addClass('activeLink');
  // });



/////// menu qui remonte au scroll /////////////////

// let test = false;
//
// function hideHeader() {
//   $('header').animate({
//     opacity: 0,
//     height: "100px"
//   }, 800);
// }
//
// onScrollEvent($('#latestWork'), hideHeader, test, 600);

////// Apparition des projets /////////////////////



  let screenAtProjects = false;


  function showFigure() {
    $('#latestWork h1').fadeIn().addClass('animated');
    figure.fadeIn().addClass('animated');
    screenAtProjects = true;
    return screenAtProjects;
  }


  onScrollEvent(latestWork, showFigure, screenAtProjects, 350);



////// Animations des progress bar dans la partie Compétences //////



  let screenAtSkills = false;

  function multipleProgressBar(elemToAnim,elemWidth, valueSpan) {

  let width = 1;
  let value;
  let id = setInterval(frame, 18);

  function frame() {
      if (width == elemWidth) {
        clearInterval(id);
      } else {
        width++;
        value =  (width * 3) + 'px';
        elemToAnim.css("width", value);
        elemToAnim.text(width + '%');
        elemToAnim.css(
          "backgroundColor" ,
          "#242424");
      }
    }
  }

  function launchMultipleProgressBar() {
    let i = 0;
    for (i = 0  ; i <= 100; i+=5) {
        multipleProgressBar($(".w" + i), i);
      }
  }

  function showSkills() {
    $('#skills h1').fadeIn().addClass('animated');
    $('#skills div').fadeIn().addClass('animated');
    setTimeout(launchMultipleProgressBar,150);
  }



  onScrollEvent(skills,showSkills, screenAtSkills, 350);



///////// Apparition aboutMe //////////////////////////



  let screenAtAboutMe = false;

  function showAboutMe() {
    $('#aboutMe h1, #aboutMe div').fadeIn().addClass('animated');
  }

  onScrollEvent(aboutMe, showAboutMe, screenAtAboutMe, 250);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }



///////// Apparition du formulaire ////////////////////



  let screenAtContact = false;
  let formContainer = $('.formContainer');
  let contactContainer = $('.contactContainer');

  function showForm() {
    formContainer.animate({
    width: "400px"
    }, 1000, "easeInCubic", function() {
    $('.form').fadeIn();
    $('.closeFormContainer').fadeIn();
    $('.formContainer h3').fadeIn();
  });

  function showContact() {
    contactContainer.animate({
    height: "150px"
    }, 150, function() {
      contactContainer.animate({
        width:"375px"
      }, 1000,  "easeOutBack", function () {
        $('.contactContainer p, .contactContainer a').fadeIn();
        });
      });
    }

    setTimeout(showContact, 1050);

    screenAtContact = true;
    return screenAtContact;
  }

  onScrollEvent(contact, showForm, screenAtContact, 350);



  //fermeture de la fonction jquery

});
