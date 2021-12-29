export function styleSocialHover(icons) {
  console.log("here");

  icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.setAttribute("color", "danger");
    });
  });
  icons.forEach((icon) => {
    icon.addEventListener("mouseout", () => {
      icon.setAttribute("color", "dark");
    });
  });
}

export function makeSticky(navbar) {
  console.log("navbar", navbar);
  const sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
