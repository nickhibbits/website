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
          document.querySelector(navItem.getAttribute("href")).scrollIntoView({
            block: "center",
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
  const burger = document.querySelector("#burger");
  const navOptionsMobileContainer = document.querySelector(
    "#nav-options-mobile-container"
  );
  const headerMobile = document.querySelector("#header");

  burger.addEventListener("click", () => {
    console.log("click");
    if (
      navOptionsMobileContainer.classList.contains(
        "nav-options-mobile-container-on"
      )
    ) {
      navOptionsMobileContainer.classList.remove(
        "nav-options-mobile-container-on"
      );
      navOptionsMobileContainer.classList.add("nav-options-mobile-container");
      headerMobile.classList.add("header-mobile");
    } else {
      navOptionsMobileContainer.classList.add(
        "nav-options-mobile-container-on"
      );
      navOptionsMobileContainer.classList.remove(
        "nav-options-mobile-container"
      );
      headerMobile.classList.remove("header-mobile");
    }
  });
}
