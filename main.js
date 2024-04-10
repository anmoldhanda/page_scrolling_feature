const arrowUp = document.getElementById("arrow_up_svg");
const arrowDown = document.getElementById("arrow_down_svg");

document.addEventListener("DOMContentLoaded", function () {
  // ============================================= Initially, show the arrow_up_svg =============================================
  arrowDown.style.display = "block";
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrolled >= 100 && scrolled + windowHeight < docHeight) {
      // ================================== If scrolled more than 100px and not at the bottom ==================================
      arrowDown.style.display = "block";
      arrowUp.style.display = "block";
    } else if (scrolled + windowHeight >= docHeight) {
      // ============================================ If at the bottom of the page ============================================
      arrowDown.style.display = "none";
    } else {
      // ============================================== If at the top of the page ==============================================
      arrowUp.style.display = "none";
      arrowDown.style.display = "block";
    }
  });
});

arrowDown.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight || document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
