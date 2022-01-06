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
  sections = Array.from(sections).map((section) => section.id);
  let sectionIds = sections.filter(
    (section) => section === "section1" || "section2" || "section3"
  );
  console.log("sectionIds", sectionIds);

  document.querySelectorAll("li").forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector;
    });
  });
}
