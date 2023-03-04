window.addEventListener("scroll", function() {
  var backToTopBtn = document.getElementById("back-to-top-btn");
  if (window.pageYOffset > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

document.getElementById("back-to-top-btn").addEventListener("click", function() {
  window.scrollTo(0, 0);
});
