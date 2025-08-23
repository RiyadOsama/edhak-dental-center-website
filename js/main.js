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
