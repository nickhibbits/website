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

        if (
          navItem.getAttribute("id") == "about-nav-item" ||
          "about-nav-item-mobile"
        ) {
          console.log("about nav item");
          console.log("about nav item", navItem.getAttribute("id"));
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else if (navItem.getAttribute("id") == null) {
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
    navOptionsWrapper.classList.remove("nav-options-mobile-wrapper");
    navOptionsWrapper.classList.add("nav-options-mobile-wrapper-on");
  });
}
