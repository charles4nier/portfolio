$(function () {

  $(this).scrollTop(0);

  ////////////////////// le dessin du visage //////////////////////////


  let canvas  = document.querySelector("#canvas");

  let context = canvas.getContext("2d");

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
  context.moveTo(points[0][0], points[0][1]);  // 1er point (sens contraire des aiguilles d"une montre)
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
  context.strokeStyle = "#242424";
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

  let work = $(".work");

      // Section variable //

  let home = $("#home");
  let latestWork = $("#latestWork");
  let skills = $("#skills");
  let aboutMe = $("#aboutMe");
  let contact = $("#contact");
  let footer = $("#footer");

      // Link variable

  let homeLink = $("#homeLink");
  let latestWorkLink = $("#latestWorkLink");
  let skillsLink = $("#skillsLink");
  let aboutMeLink = $("#aboutMeLink");
  let contactLink = $("#contactLink");

      //Smooth scroll //

  let linkScrollButton = $(".scrollButton");

  linkScrollButton.click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 80
      },
      750,
      "easeInCubic"
    );
  });

//// fonction scroll event  qui déclenche d"autres foncitons ou anim ////

  function onScrollEvent(targetSection, funcToLaunch, verifyVar, number, optionnel) {
    $(window).scroll(function() {
        if(($(window).scrollTop() >= targetSection.offset().top - number) && (verifyVar == false)) {
          setTimeout(funcToLaunch, 50);
          verifyVar = true;
          return verifyVar;
        }
    });
  }

  function activeLink(startTargetSection, endTargetSection, linkToActive) {
    $(window).scroll(function() {
      if( ($(window).scrollTop() >= startTargetSection.offset().top - 350) &&
        ($(window).scrollTop() < endTargetSection.offset().top - 350) ) {
        if($(".activeLink")) {
          $(".activeLink").removeClass("activeLink");
        }

        linkToActive.addClass("activeLink");

      }
    });
  }

  activeLink(home, latestWork, homeLink);
  activeLink(latestWork, skills, latestWorkLink);
  activeLink(skills, aboutMe, skillsLink);
  activeLink(aboutMe, contact, aboutMeLink);
  activeLink(contact, footer, contactLink);

////// Apparition des projets /////////////////////

  let screenAtProjects = false;


  function showWork() {
    $("#latestWork h1").fadeIn().addClass("animated");
    work.fadeIn().addClass("animated");
    screenAtProjects = true;
    return screenAtProjects;
  }


  onScrollEvent(latestWork, showWork, screenAtProjects, 350);

  //////////// création des comportements qui permettent d"avoir des infos ques sur les sites créés //////////

  let linkToProjects = [
    "https://www.learn-eat.fr/",
    "http://www.ikmusic.org/",
    "https://github.com/charles4nier/site_marchand_simplon",
    "https://github.com/charles4nier/myBlog",
    "https://dzov.github.io/Act/",
    "https://charles4nier.github.io/royco/"
  ];

  $(".work").mouseenter(function() {
     let filter = $("#" + $(this).attr("id") + "workInfo");
     filter.slideDown(350,
     "easeInCubic",
     function() {
     });

     $(this).click(function() {
       let i = 0;
       for(; i < linkToProjects.length; i++) {
         let number = i + 1;
         let idComparator = number.toString()
         if(idComparator == $(this).attr("id")) {
             window.open(linkToProjects[i], true);
         }
       }
     });
  });

  $(".work").mouseleave(function() {
    let filter = $("#" + $(this).attr("id") + "workInfo");

    filter.slideUp(225,
    function() {
    });
  });
//
//   let previousX = 0;
//   let vectorX = 0;
//   let xComparator = 0;
//
//   let previousY = 0;
//   let vectorY = 0;
//   let yComparator = 0;
//
//   let textInfo = $(".textInfo");
//
// //Animation d'entrée des informations
//   function filterIn(elem, animation) {
//     elem.removeClass()
//         .addClass("figureInfo")
//         .addClass(animation)
//   }
//
//   $(document).mousemove(function(e) {
//     let x = e.clientX;
//     let y = e.clientY;
//
//     vectorX = x - previousX;
//     previousX = x;
//     // permet de rendre positif un nombre négatif //
//     xComparator = (vectorX * vectorX);
//
//     vectorY = y - previousY;
//     previousY = y;
//     // permet de rendre positif un nombre négatif //
//     yComparator = (vectorY * vectorY);
//
//     $("figure").mouseenter(function() {
//
//       $(this).click(function() {
//         let i = 0;
//         for(; i < linkToProjects.length; i++) {
//           let number = i + 1;
//           let idComparator = number.toString()
//           if(idComparator == $(this).attr("id")) {
//               window.open(linkToProjects[i], true);
//           }
//         }
//       });
//
//       let filter = $("#" + $(this).attr("id") + "FigureInfo");
//
//       //Animation de sorties des informations
//         function filterOut(elem, animation) {
//           elem.removeClass()
//               .addClass('figureInfo')
//               .addClass(animation);
//         }
//
//
//       if(yComparator > xComparator) {
//
//         if(vectorY > 0) {
//
//           filterIn(filter, "animeInFilter filterInDown");
//
//         } else {
//
//           filterIn(filter, "animeInFilter filterInUp");
//         }
//
//       } else {
//
//         if(vectorX > 0) {
//
//           filterIn(filter, "animeInFilter filterInLeft");
//
//         } else {
//
//           filterIn(filter, "animeInFilter filterInRight");
//
//         }
//       }
//
//       $('figure').mouseleave(function() {
//         // filter.removeClass()
//         //       .addClass('figureInfo')
//         //       .addClass("animeOutFilter filterOutDown");
//
//         if(yComparator > xComparator) {
//
//           if(vectorY > 0) {
//
//             filterIn(filter, "animeOutFilter filterOutDown");
//
//           } else {
//
//             filterIn(filter, "animeOutFilter filterOutUp");
//           }
//
//         } else {
//
//           if(vectorX > 0) {
//
//             filterIn(filter, "animeOutFilter filterOutLeft");
//
//           } else {
//
//             filterIn(filter, "animeOutFilter filterOutRight");
//
//           }
//         }
//       });
//
//     });
//
//   });


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
        value =  (width * 3) + "px";
        elemToAnim.css("width", value);
        elemToAnim.text(width + "%");
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
    $("#skills h1").fadeIn().addClass("animated");
    $("#skills div").fadeIn().addClass("animated");
    setTimeout(launchMultipleProgressBar,150);
  }

  onScrollEvent(skills,showSkills, screenAtSkills, 350);

///////// Apparition aboutMe //////////////////////////

  let screenAtAboutMe = false;

  function showAboutMe() {
    $("#aboutMe h1, #aboutMe section").fadeIn().addClass("animated");
  }

  onScrollEvent(aboutMe, showAboutMe, screenAtAboutMe, 250);

///////// Apparition du formulaire ////////////////////

  let screenAtContact = false;
  let formContainer = $(".formContainer");
  let contactContainer = $(".contactContainer");

  function showForm() {
    formContainer.animate(
      {
        width: "400px"
      },
      1000,
      "easeInCubic",
      function() {
        $(".form").fadeIn();
        $(".closeFormContainer").fadeIn();
        $(".formContainer h3").fadeIn();
        $('.submit').fadeIn();
      });

    function showContact() {
      contactContainer.animate(
      {
        "height": "150px"
      },
      150,
      function() {
        contactContainer.animate(
        {
          "width":"375px"
        },
        1000,
        "easeOutBack", function () {
          $(".contactContainer p, .contactContainer a").fadeIn();
          });
      });
    }

    setTimeout(showContact, 1050);

    screenAtContact = true;
    return screenAtContact;
  }

  onScrollEvent(contact, showForm, screenAtContact, 350);

  // Envoi des données du formulaires et comprotement du formulaire


  $('input.submit').click(function() {
    $(".form").fadeOut(100);
    // $('').fadeOut(100);
    // $('.form input, .form textarea').fadeOut(100);
    setTimeout(function() {
      $('.formContainer').load('../view/sentOk.html', function() {
        $('.closeFormContainer').addClass("changeBar");
        $('.buttonCloseForm').css('cursor', 'pointer');
      });
    },
     100);
  });

  $('.buttonCloseForm').click(function() {
    $(".formContainer p").fadeOut(100);
    setTimeout(function() {
      $(".form").fadeIn();
      $('.closeFormContainer').removeClass("changeBar");
      $('.buttonCloseForm').css('cursor', 'default');
      $('.formContainer').load('../view/inputElt.html', function() {
      });
    }, 150);
  });

  //fermeture de la fonction jquery

});
