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

// FAQs
const btns = document.querySelectorAll(".item button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".item");
    const answer = item.querySelector(".answer");
    const isActive = item.classList.contains("item-active");

    // Step 1: Close all items
    document.querySelectorAll(".item").forEach((el) => {
      const otherAnswer = el.querySelector(".answer");
      const otherBtn = el.querySelector("button");

      el.classList.remove("item-active");

      if (otherAnswer) {
        otherAnswer.style.maxHeight = null;
      }
      if (otherBtn) {
        otherBtn.textContent = "+";
      }
    });

    // Step 2: If the clicked item was not active, open it
    if (!isActive && answer) {
      item.classList.add("item-active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      btn.textContent = "–";
    }
  });
});
