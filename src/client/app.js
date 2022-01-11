export function makeSticky(navbar) {
  const sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

export function scrollToSection() {
  Array.from(document.querySelector("ul").children).forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(navItem);

      if (navItem.getAttribute("id") == "about-nav-item") {
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        document.querySelector(navItem.getAttribute("href")).scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    });
  });
}
