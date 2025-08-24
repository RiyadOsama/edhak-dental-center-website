// Import Navbar to All Pages
fetch("_navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

// Import Footer to All Pages
fetch("_footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;

    // Back To Top
    const backToTop = document.getElementById("backToTop");
    backToTop.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  });

// Owl Carousel
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 30,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Spinner
let spinner = document.querySelector(".spinner");
setTimeout(() => {
  spinner.style.opacity = "0";
  spinner.style.zIndex = "-1";
}, 1000);
