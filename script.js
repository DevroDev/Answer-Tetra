//Navbar
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  //console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    //console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

/*Animation*/
$(document).ready(function () {
  $(".js--scroll-to-about").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-about").offset().top },
      2000
    );
  });
  $(".js--scroll-to-resume").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-resume").offset().top },
      2000
    );
  });
  $(".js--scroll-to-portfolio").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-portfolio").offset().top },
      2000
    );
  });
  $(".js--scroll-to-contact").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-contact").offset().top },
      2000
    );
  });
  $(".js--scroll-to-home").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-home").offset().top },
      3000
    );
  });

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeInLeft");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInRight");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeInLeft");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated fadeInUp");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-5").waypoint(
    function (direction) {
      $(".js--wp-5").addClass("animated fadeInRight");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-6").waypoint(
    function (direction) {
      $(".js--wp-6").addClass("animated fadeInRight");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-7").waypoint(
    function (direction) {
      $(".js--wp-7").addClass("animated fadeInLeft");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-8").waypoint(
    function (direction) {
      $(".js--wp-8").addClass("animated fadeInRight");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-9").waypoint(
    function (direction) {
      $(".js--wp-9").addClass("animated fadeInLeft");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-10").waypoint(
    function (direction) {
      $(".js--wp-10").addClass("animated fadeInLeft");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-11").waypoint(
    function (direction) {
      $(".js--wp-11").addClass("animated fadeInRight");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-12").waypoint(
    function (direction) {
      $(".js--wp-12").addClass("animated fadeInLeft");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-13").waypoint(
    function (direction) {
      $(".js--wp-13").addClass("animated fadeInRight");
    },
    {
      offset: "70%",
    }
  );
});
