var eventText = [
  'The Research Laboratory of Computer Systems, Security and Networks (SYAD) of Alexandreio TEI of Thessaloniki and the IEEE Student Branch at Alexander TEI of Thessaloniki co-organize the Winter School entitled "Internet of Things: Security, Communication & Application Challenges" on Friday 15 and Saturday 16 December (10: 00-18: 00) at ATEITH (Filippos Hall, main corridor)...',
  "Members of the IEEE student branch of the TEI of Thessaloniki use the need to update the branch page, to get in touch with the react.js framework and nodejs. We will try to make the most of the development in meetups, which will be open to everyone. This Saturday there will be a review of what we have done so far and...",
  "<strong>IEEE DAY 2017</strong> <br> Let's meet! <br> On Wednesday 11/10 at 12:15 (Room 109) the group of students of the branch of the IEEE of our TEI organizes an event of acquaintance and presentation of action! We are waiting for you! <br> Detailed program: <br> –Presentation of the IEEE organization...",
];
var eventTextExpand = [
  'The Research Laboratory of Computer Systems, Security and Networks (SYAD) of Alexandreio TEI of Thessaloniki and the IEEE Student Branch at Alexander TEI of Thessaloniki co-organize the Winter School entitled "Internet of Things: Security, Communication & Application Challenges" on Friday 15 and Saturday 16 December (10: 00-18: 00) at ATEITH (Filippos Hall, main corridor). <br> The Winter School program is available at https://goo.gl/JAkK9y <br> Admission is free but mandatory registration at https://goo.gl/xC6wSL <br> Participants will be awarded attendance certificates (provided they attend the entire Winter School).',
  "Members of the IEEE student branch of the TEI of Thessaloniki use the need to update the branch page, to get in touch with react.js <br> framework and nodejs.We will try to do most of the development in meetups, which will are open to everyone. <br> This Saturday we will review what we have done so far and discuss the development process. <br> On Friday, December 22 we will implement react-router routing and design the database.",
  "<strong> IEEE DAY 2017 </strong> <br> Let's meet! <br> On Wednesday 11/10 at 12:15 (Room 109) the group of students of the IEEE branch of our TEI organizes an event of acquaintance and presentation of We are waiting for you! <br> Detailed program: <br> - Presentation of the organization of IEEE <br> - Presentation of the student branch. How students participate and what responsibilities they can have <br> - Presentation of IEEEXtreme (global programming competition) <br> - Actions of our branch <br> - Presentation of the electric car and its programming by the team of Electrical Engineers and computer engineers of the university - Meeting members and discussion.",
];
jQuery(document).ready(function () {
  "use strict";
  $(".slider").ripples({
    dropRadius: 11,
    perturbance: 0.01,
  });

  $(".text").typed({
    strings: [
      "<strong>we love</strong><strong class='primary'> coding</strong>",
      "<strong>and to</strong><strong class='primary'> help!!</strong>",
    ],
    typespeed: 1,
    loop: true,
  });

  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
      $("nav").addClass("secondary");
    } else if ($("nav").hasClass("secondary")) {
      $("nav").removeClass("secondary");
    }
  });

  $(".work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },

      768: {
        items: 3,
      },
    },
  });
  $(".counter").counterUp({
    delay: 10,
    time: 4000,
  });

  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    var section = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - -2,
      },
      1250,
      "easeInOutExpo"
    );
  });
  new WOW().init();
});

function eventChanger(num) {
  //minimizing all the events with an unorthodox way, plase don't judge me i am a good guy
  for (var i = 0; i < 3; i++) {
    if (num != i) {
      document.getElementById("btn" + i).innerText = "Show more...";
      document.getElementById(i).innerHTML = eventText[i];
    }
  }
  if (num != 4) {
    if (document.getElementById("btn" + num).innerText == "Show more...") {
      document.getElementById("btn" + num).innerText = "Snow less";
      document.getElementById(num).innerHTML = eventTextExpand[num];
    } else {
      document.getElementById("btn" + num).innerText = "Snow more...";
      document.getElementById(num).innerHTML = eventText[num];
    }
  }
}
