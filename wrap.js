let wrap=document.querySelector('body')
let txt=""
txt+=`    <!--Nav-->
<nav class="nav">
  <div class="container nav-width">
    <div class="logo">
      <a href="#" class="js--scroll-to-home">Devro Shein</a>
    </div>
    <div id="mainListDiv" class="main_list">
      <ul class="navlinks">
        <li class="js--scroll-to-home"><a href="#">Home</a></li>
        <li class="js--scroll-to-about"><a href="#">About</a></li>
        <li class="js--scroll-to-resume"><a href="#">Resume</a></li>
        <li class="js--scroll-to-portfolio"><a href="#">Portfolio</a></li>
        <li class="js--scroll-to-contact"><a href="#">Contact</a></li>
      </ul>
    </div>
    <span class="navTrigger"> <i></i> <i></i> <i></i> </span>
  </div>
</nav>
<!--Nav End-->
<!--Home Session-->
<div id="home" class="wrap js-section-home">
  <div class="container-fluid landing">
    <div class="landing-box text-center animated fadeInUp">
      <div class="line-break"></div>
      <h2>Pyae Htet Shein</h2>
      <div class="line-break"></div>
      <p>I do not fear computers. I fear lack of them.</p>
      <div class="landing-button">
        <a class="js--scroll-to-contact"
          >Contact Me<i class="fas fa-arrow-circle-right"></i
        ></a>
      </div>
      <div class="landing-icons">
        <a href="https://github.com/DevroDev"
          ><i class="fab fa-github"></i
        ></a>
        <a><i class="fab fa-facebook"></i></a>
        <a><i class="fab fa-instagram"></i></a>
        <a><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  </div>
</div>
<!--Home Session End-->
<!--About Me-->
<div id="about">
  <div class="container js-section-about">
    <div class="col-12 text-center header">
      <p>Get to Know Me</p>
      <h2>About Me</h2>
      <div class="header-line"></div>
    </div>
    <div class="row about-section">
      <div class="col-lg-4 about-left text-center js--wp-1"></div>
      <div class="col-lg-7 about-right js--wp-2">
        <h3>Who am I ?</h3>
        <h2>
          Hello! I'm Pyae Htet Shein, a computer science student and
          freelance software engineer.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          pharetra diam sit amet nisl suscipit adipiscing bibendum est. A
          diam sollicitudin tempor id eu nisl nunc. Egestas egestas
          fringilla phasellus faucibus scelerisque. Nunc sed id semper risus
          in. Vulputate mi sit amet mauris commodo quis.
        </p>
        <div class="horizontal-line"></div>
        <div class="about-info pt-3">
          <div class="row">
            <div class="col-md-6">
              <h4 class="pr-5">Name: Pyae Htet Shein</h4>
              <h4 class="pt-3">Email: pyaehtetshein@gmail.com</h4>
            </div>
            <div class="col-md-6">
              <h4>Age: 21</h4>
              <h4 class="pt-3">From: Mandalay, Myanmar</h4>
            </div>
          </div>
        </div>
        <div class="about-icons row">
          <div class="about-button"><a>Download CV</a></div>
          <a href="https://github.com/DevroDev"
            ><i class="fab fa-github"></i
          ></a>
          <a><i class="fab fa-facebook"></i></a>
          <a><i class="fab fa-instagram"></i></a>
          <a><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
<!--About End-->
<!--Hobbies-->
<div class="hobbie container-fluid">
  <div class="col-md-12 hobbie-header text-center">
    <h3>Things I Like To Do</h3>
    <p>Jobs fill your pockets, adventures fill your soul.</p>
  </div>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-4 mt-3 hobbie-container text-center js--wp-3">
        <img class="animated wobble" src="src/icons/icon-1.png" />
        <h3>Coding</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="col-lg-4 mt-3 hobbie-container text-center js--wp-4">
        <img class="animated bounce" src="src/icons/icon-2.png" />
        <h3>Learning</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="col-lg-4 mt-3 hobbie-container text-center js--wp-5">
        <img class="animated wobble" src="src/icons/icon-3.png" />
        <h3>Traveling</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
</div>
<!--Hobbies Ends-->
<!--Resume-->
<div id="resume">
  <div class="container js-section-resume">
    <div class="col-12 text-center header">
      <p>Check out my Resume</p>
      <h2>Resume</h2>
      <div class="header-line"></div>
    </div>
    <div class="row pt-5">
      <div class="col-lg-5 resume-education ml-lg-4 js--wp-7">
        <h2 class="py-3">Education</h2>
        <div class="resume-card">
          <h3>Electronics</h3>
          <h5>TUM / 2015-present</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="resume-card">
          <h3>BE (electronics)</h3>
          <h5>TUM / 2015-present</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="resume-card">
          <h3>Computer Science</h3>
          <h5>MIT Opencourseware / 2019-present</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="col-lg-5 resume-experience ml-lg-4 js--wp-6">
        <h2 class="py-3">Experience</h2>
        <div class="resume-card">
          <h3>Frontend Developer</h3>
          <h5>Giggle / 2015-2019</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="resume-card">
          <h3>Software Engineer</h3>
          <h5>Answer Tetra / 2019-present</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="resume-card">
          <h3>Self Employed</h3>
          <h5>Giggle Tech / 2015-present</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<!--Resume End-->
<!--Portfolio-->
<div id="portfolio">
  <div class="container js-section-portfolio">
    <div class="col-12 text-center header">
      <p>Showcasing some of my best work</p>
      <h2>Latest Works</h2>
      <div class="header-line"></div>
    </div>
    <div class="row">
      <div class="col-md-6 project-container text-center js--wp-12">
        <img src="src/projects/pj1.png" />
        <h3>Shweoeain</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="col-md-6 project-container text-center js--wp-12">
        <img src="src/projects/pj2.png" />
        <h3>Giggle Shop</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="col-md-6 project-container text-center js--wp-13">
        <img src="src/projects/pj3.png" />
        <h3>Answer Tetra</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="col-md-6 project-container text-center js--wp-13">
        <img src="src/projects/pj4.png" />
        <h3>Giggle</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
</div>
<!--Portfolio Ends-->
<!--Quote-->
<div id="quote" class="container-fluid js--wp-9">
  <div class="col-12">
    <h3 class="text-center">My Favorite Quotes</h3>
    <div class="mySlides">
      <q
        >The computer was born to solve problems that did not exist
        before.</q
      >
      <p class="author">- Bill Gates</p>
    </div>
    <div class="mySlides">
      <q
        >Programs must be written for people to read, and only incidentally
        for machines to execute.</q
      >
      <p class="author">- Abelson and Sussman</p>
    </div>
    <div class="mySlides">
      <q
        >If we wish to count lines of code, we should not regard them as
        ‘lines produced’ but as ‘lines spent</q
      >
      <p class="author">- Edsger Dijkstra</p>
    </div>
    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>
    <div class="dot-container">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
  </div>
</div>
<!--Quote ends-->
<!--Contact-->
<div id="contact">
  <div class="container pt-5 js-section-contact">
    <div class="col-12 text-center py-5 header">
      <p>Feel free to contact me anytimes</p>
      <h2>Get in Touch</h2>
      <div class="header-line"></div>
    </div>
    <div class="row">
      <!--Contact left-->
      <div class="col-lg-5 contact-left-header js--wp-10">
        <h3>Contact Info</h3>
        <p>
          Always available for freelance work if the right project comes
          along, Feel free to contact me!
        </p>
        <div class="row contact-info">
          <i class="fas fa-address-card"></i>
          <div>
            <h4>Name</h4>
            <p>Pyae Htet Shein</p>
          </div>
        </div>
        <div class="row contact-info">
          <i class="fas fa-location-arrow"></i>
          <div>
            <h4>Location</h4>
            <p>Mandalay, Myanmar</p>
          </div>
        </div>
        <div class="row contact-info">
          <i class="fas fa-phone-square"></i>
          <div>
            <h4>Phone</h4>
            <p><a href="tel:+959792469504">+959 792 469 504</a></p>
          </div>
        </div>
        <div class="row contact-info">
          <i class="fas fa-envelope-open-text"></i>
          <div>
            <h4>Name</h4>
            <p><a href="mailto:">pyaehtetshein@gmail.com</a></p>
          </div>
        </div>
      </div>
      <!--Contact Left Ends-->
      <!--Contact Right-->
      <div class="col-lg-7 contact-right-header js--wp-11">
        <h3>Message Me</h3>
        <form class="contact-form">
          <input type="text" placeholder="Name" required /> <br />
          <input type="email" placeholder="Email" required /> <br />
          <input type="text" placeholder="Subject" /> <br />
          <input type="text" placeholder="Message" required />
          <button type="">Submit</button>
        </form>
      </div>
      <!--Contact Right Ends-->
    </div>
    <div class="col-12 pt-5 pb-3 footer text-center">
      <p>&copy; Pyae Htet Shein, 2020.</p>
    </div>
  </div>
</div>
<!--Contact Ends-->`
wrap.innerHTML=txt