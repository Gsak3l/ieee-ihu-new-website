 var eventTextExpand = ["Το Ερευνητικό Εργαστήριο Συστημάτων Υπολογιστών, Ασφάλειας και Δικτύων (ΣΥΑΔ) του Αλεξάνδρειου ΤΕΙ Θεσσαλονίκης και το IEEE Student Branch at Alexander TEI of Thessaloniki συνδιοργανώνουν το Winter School με τίτλο “Internet of Things: Security, Communication & Application Challenges” την Παρασκευή 15 και Σάββατο 16 Δεκεμβρίου (10:00-18:00) στο ΑΤΕΙΘ (Αίθουσα Φίλιππος, κεντρικός διάδρομος).<br>Το πρόγραμμα του Winter School είναι διαθέσιμο στο https://goo.gl/JAkK9y<br>Η είσοδος είναι ελεύθερη αλλά είναι υποχρεωτική η εγγραφή στο https://goo.gl/xC6wSL<br>Στους συμμετέχοντες θα απονεμηθούν πιστοποιητικά παρακολούθησης (με την προϋπόθεση ότι θα παρακολουθήσουν το σύνολο του Winter School).", 
 "Μέλη του IEEE student branch του ΤΕΙ Θεσσαλονίκης χρησιμοποιούν την ανάγκη ανανέωσης της σελίδας του branch, για να έρθουν σε επαφή με το react.js<br> framework και το nodejs.Θα πρσπαθήσουμε το μεγαλύτερο μέρος της ανάπτυξης να γίνει στα meetups, τα οποία θα είναι ανοιχτά για όλους.<br>Αυτό το Σάββατο θα γίνει review σε ότι έχουμε κάνει μέχρι τώρα και θα συζητήσουμε την πορεία της ανάπτυξης.<br>Την Παρασκευή 22 Δεκεμβρίου θα υλοποιήσαμε routing με react-router και θα σχεδιάσαμε την βάση δεδομένων.",
 "<strong>IEEE DAY 2017</strong><br>Ελάτε να γνωριστούμε!<br>Την Τετάρτη 11/10 στις 12:15 (Αίθουσα 109) η ομαδα φοιτητών του παραρτήματος της ΙΕΕΕ του ΤΕΙ μας διοργανώνει μια εκδήλωση γνωριμίας και παρουσίασης της δράσης του!<br>Σας περιμένουμε!<br>Αναλυτικά το πρόγραμμα:<br>–Παρουσίαση του οργανισμού της ΙΕΕΕ<br>–Παρουσίαση του φοιτητικού παραρτήμαρτος. Πως οι φοιτητές συμμετέχουν και τι αρμοδιότητες μπορούν να έχουν<br>–Παρουσιάση του ΙΕΕΕΧtreme (παγκόσμιος διαγωνισμός προγραμματισμού)<br>–Δράσεις του δικού μας παραρτήματος<br>–Παρουσίαση του ηλεκτροκίνητου μονοθεσίου αυτοκινήτου και του προγραμματισμού του από την ομάδα των Ηλεκτρολόγων μηχανικών και μηχανικών η/υ του απθ<br>–Γνωριμία μελών και συζήτηση."]
 var eventText = ["Το Ερευνητικό Εργαστήριο Συστημάτων Υπολογιστών, Ασφάλειας και Δικτύων (ΣΥΑΔ)                                         του Αλεξάνδρειου ΤΕΙ Θεσσαλονίκης και το IEEE Student Branch at Alexander TEI                                         of Thessaloniki συνδιοργανώνουν το Winter School με τίτλο “Internet of Things:                                         Security, Communication & Application Challenges” την Παρασκευή 15 και Σάββατο                                         16 Δεκεμβρίου (10:00-18:00) στο ΑΤΕΙΘ (Αίθουσα Φίλιππος, κεντρικός                                         διάδρομος)...", 
"Μέλη του IEEE student branch του ΤΕΙ Θεσσαλονίκης χρησιμοποιούν την ανάγκη                                         ανανέωσης της σελίδας του branch, για να έρθουν σε επαφή με το react.js                                         framework και το nodejs.                                         Θα πρσπαθήσουμε το μεγαλύτερο μέρος της ανάπτυξης να γίνει στα meetups, τα                                         οποία θα είναι ανοιχτά για όλους.                                         Αυτό το Σάββατο θα γίνει review σε ότι έχουμε κάνει μέχρι τώρα και...",
"<strong>IEEE DAY 2017</strong><br>                                         Ελάτε να γνωριστούμε!<br>                                         Την Τετάρτη 11/10 στις 12:15 ( Αίθουσα 109) η ομαδα φοιτητών του παραρτήματος                                         της ΙΕΕΕ του ΤΕΙ μας διοργανώνει μια εκδήλωση γνωριμίας και παρουσίασης της                                         δράσης του!                                         Σας περιμένουμε!<br>                                         Αναλυτικά το πρόγραμμα:<br>                                         –Παρουσίαση του οργανισμού της ΙΕΕΕ<br>                                         –Παρουσίαση του φοιτητικού παραρτήμαρτος..."];
 jQuery(document).ready(function () {

   "use strict"
   $('.slider').ripples({
     dropRadius: 11,
     perturbance: 0.01,

   });

   $(".text").typed({
     strings: ["<strong>we love</strong><strong class='primary'> coding</strong>", "<strong>and to</strong><strong class='primary'> help!!</strong>"],
     typespeed: 0,
     loop: true

   });

   $(window).scroll(function () {

     var top = $(window).scrollTop();
     if (top >= 60) {
       $("nav").addClass('secondary');
     } else
     if ($("nav").hasClass('secondary')) {
       $("nav").removeClass('secondary');
     }
   });

   $('.work').magnificPopup({
     delegate: 'a', // child items selector, by clicking on it popup will open
     type: 'image',
     gallery: {
       enabled: true
     }

   });

   $("#team-members").owlCarousel({
     items: 3,
     autoplay: true,
     smartSpeed: 700,
     loop: true,
     autoplayHoverPause: true,
     responsive: {
       0: {

         items: 1
       },
       480: {

         items: 2
       },

       768: {

         items: 3
       }
     }


   });
   $('.counter').counterUp({
     delay: 10,
     time: 4000
   });

   $("a.smooth-scroll").click(function (event) {

     event.preventDefault();

     var section = $(this).attr("href");

     $('html, body').animate({
       scrollTop: $(section).offset().top - -2
     }, 1250, "easeInOutExpo");
   });
   new WOW().init();

 });
function eventChanger(num)
{
  if(num === 0)
  {
    if(document.getElementById('btn0').innerText === "Show more...")
    {
      document.getElementById(num).innerHTML = eventTextExpand[num];
      document.getElementById('btn0').innerText = "Show less";
    }
    else
    {
      document.getElementById(num).innerHTML = eventText[num];
      document.getElementById('btn0').innerText = "Show more...";
    }
  }
  if(num === 1)
  {
    if(document.getElementById('btn1').innerText === "Show more...")
    {
      document.getElementById(num).innerHTML = eventTextExpand[num];
      document.getElementById('btn1').innerText = "Show less";
    }
    else
    {
      document.getElementById(num).innerHTML = eventText[num];
      document.getElementById('btn1').innerText = "Show more...";
    }
  }
  if(num === 2)
  {
    if(document.getElementById('btn2').innerText === "Show more...")
    {
      document.getElementById(num).innerHTML = eventTextExpand[num];
      document.getElementById('btn2').innerText = "Show less";
    }
    else
    {
      document.getElementById(num).innerHTML = eventText[num];
      document.getElementById('btn2').innerText = "Show more...";
    }
  }
}