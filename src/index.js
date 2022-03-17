import "./client/styles/header.scss";
import "./client/styles/body.scss";
import "./client/styles/mediaQueries.scss";
import "./client/styles/projects.scss";
import "./client/styles/navMobile.scss";
import "./client/styles/bio.scss";
import "./client/styles/logo.scss";

import { makeSticky, scrollToSection, showNavbarMobile } from "./client/app";

const header = document.getElementById("header");

window.onload = function () {
  makeSticky(header);
};

window.addEventListener("DOMContentLoaded", () => {
  scrollToSection(
    document.getElementById("nav-options-mobile").getAttribute("id")
  );
  scrollToSection(document.getElementById("nav-options").getAttribute("id"));
  showNavbarMobile();
});

export { makeSticky, scrollToSection, showNavbarMobile };
