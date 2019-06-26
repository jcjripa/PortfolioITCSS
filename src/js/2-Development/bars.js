// animacion a los skills

const Bar1 = document.getElementById("Bar1"),
      Bar2 = document.getElementById("Bar2"),
      Bar3 = document.getElementById("Bar3"),
      Bar4 = document.getElementById("Bar4"),
      Bar5 = document.getElementById("Bar5")

function animateBar(e, mw) {
  const smallBP = matchMedia("(max-width:991px)");
  const desktopBP = matchMedia("(min-width:992px)");
  if (scrollY >= 816 && smallBP.matches) {
    e.style.animation = "AnimateBar 2s ease-in-out";
    e.style.maxWidth = mw;
  } else if (scrollY >= 372 && desktopBP.matches) {
    e.style.animation = "AnimateBar 2s ease-in-out";
    e.style.maxWidth = mw;
  } else {
    e.style.animation = "none";
    e.style.maxWidth = mw;
  }
}

addEventListener("scroll", () => animateBar(Bar1, Bar1.textContent));
addEventListener("scroll", () => animateBar(Bar2, Bar2.textContent));
addEventListener("scroll", () => animateBar(Bar3, Bar3.textContent));
addEventListener("scroll", () => animateBar(Bar4, Bar4.textContent));
addEventListener("scroll", () => animateBar(Bar5, Bar5.textContent));
