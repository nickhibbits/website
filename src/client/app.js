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
