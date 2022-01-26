export function makeSticky(navbar) {
  const sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

export function scrollToSection(elementId) {
  console.log("elementId", elementId);
  Array.from(document.querySelector(`#${elementId}`).children).forEach(
    (navItem) => {
      navItem.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(navItem);

        if (navItem.getAttribute("href") == "#section1") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          console.log("other nav item");
          document.querySelector(navItem.getAttribute("href")).scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        }
      });
    }
  );
}

export function showNavbarMobile() {
  const burger = document.getElementById("burger");
  const navOptionsWrapper = document.getElementById(
    "nav-options-mobile-wrapper"
  );

  burger.addEventListener("click", () => {
    if (navOptionsWrapper.classList.contains("nav-options-mobile-wrapper-on")) {
      navOptionsWrapper.classList.remove("nav-options-mobile-wrapper-on");
      navOptionsWrapper.classList.add("nav-options-mobile-wrapper");
    } else {
      navOptionsWrapper.classList.remove("nav-options-mobile-wrapper");
      navOptionsWrapper.classList.add("nav-options-mobile-wrapper-on");
    }
  });
}
