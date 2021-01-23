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
  $(".js--scroll-to-service").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-service").offset().top },
      2000
    );
  });
  $(".js--scroll-to-project").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-project").offset().top },
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
      $(".js--wp-8").addClass("animated fadeInLeft");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-9").waypoint(
    function (direction) {
      $(".js--wp-9").addClass("animated fadeInUp");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-10").waypoint(
    function (direction) {
      $(".js--wp-10").addClass("animated fadeInRight");
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
      $(".js--wp-13").addClass("animated bounceIn");
    },
    {
      offset: "70%",
    }
  );
  $(".js--wp-14").waypoint(
    function (direction) {
      $(".js--wp-14").addClass("animated bounceIn");
    },
    {
      offset: "70%",
    }
  );
});

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
//canvas
//canvas

let resizeReset = function() {
	w = canvasBody.width = window.innerWidth;
	h = canvasBody.height = window.innerHeight;
}

const opts = { 
	particleColor: "rgb(82,225,159)",
	lineColor: "rgb(200,200,200)",
	particleAmount: 30,
	defaultSpeed: 2,
	variantSpeed: 2,
	defaultRadius: 2,
	variantRadius: 2,
	linkRadius: 200,
};

window.addEventListener("resize", function(){
	deBouncer();
});

let deBouncer = function() {
    clearTimeout(tid);
    tid = setTimeout(function() {
        resizeReset();
    }, delay);
};

let checkDistance = function(x1, y1, x2, y2){ 
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function(point1, hubs){ 
	for (let i = 0; i < hubs.length; i++) {
		let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
		let opacity = 1 - distance / opts.linkRadius;
		if (opacity > 0) { 
			drawArea.lineWidth = 0.5;
			drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
			drawArea.beginPath();
			drawArea.moveTo(point1.x, point1.y);
			drawArea.lineTo(hubs[i].x, hubs[i].y);
			drawArea.closePath();
			drawArea.stroke();
		}
	}
}

Particle = function(xPos, yPos){ 
	this.x = Math.random() * w; 
	this.y = Math.random() * h;
	this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
	this.directionAngle = Math.floor(Math.random() * 360); 
	this.color = opts.particleColor;
	this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
	this.vector = {
		x: Math.cos(this.directionAngle) * this.speed,
		y: Math.sin(this.directionAngle) * this.speed
	};
	this.update = function(){ 
		this.border(); 
		this.x += this.vector.x; 
		this.y += this.vector.y; 
	};
	this.border = function(){ 
		if (this.x >= w || this.x <= 0) { 
			this.vector.x *= -1;
		}
		if (this.y >= h || this.y <= 0) {
			this.vector.y *= -1;
		}
		if (this.x > w) this.x = w;
		if (this.y > h) this.y = h;
		if (this.x < 0) this.x = 0;
		if (this.y < 0) this.y = 0;	
	};
	this.draw = function(){ 
		drawArea.beginPath();
		drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		drawArea.closePath();
		drawArea.fillStyle = this.color;
		drawArea.fill();
	};
};

function setup(){ 
	particles = [];
	resizeReset();
	for (let i = 0; i < opts.particleAmount; i++){
		particles.push( new Particle() );
	}
	window.requestAnimationFrame(loop);
}

function loop(){ 
	window.requestAnimationFrame(loop);
	drawArea.clearRect(0,0,w,h);
	for (let i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].draw();
	}
	for (let i = 0; i < particles.length; i++){
		linkPoints(particles[i], particles);
	}
}

const canvasBody = document.getElementById("canvas"),
drawArea = canvasBody.getContext("2d");
let delay = 200, tid,
rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();