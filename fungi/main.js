const navToggle = document.querySelector("[aria-controls=main-nav]");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  const navOpen = navToggle.getAttribute("aria-expanded");

  if (navOpen === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }

  console.log("fuck me");
});
