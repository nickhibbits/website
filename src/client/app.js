export function makeSticky(navbar) {
  const sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

export function scrollToSection() {
  console.log("here");
  let sections = document.querySelectorAll("section");
  console.log("sections", sections);
  let sectionIds = Array.from(sections).map((section) => section.id);
  console.log("sectionIds", sectionIds);

  Array.from(document.querySelector("ul").children).forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(navItem.getAttribute("href")).scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
  });
}
