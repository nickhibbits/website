import "./client/styles/header.scss";
import "./client/styles/body.scss";
import "./client/styles/mediaQueries.scss";
import "./client/styles/projects.scss";
import "./client/styles/navMobile.scss";
import "./client/styles/bio.scss";
import "./client/styles/logo.scss";

import { makeSticky, scrollToSection, showNavbarMobile } from "./client/app";

import "./assets/nick-cool.png";
import "./assets/nickFavicon.png";

const mainHeadshot = document.querySelector("#main-headshot"); // set src attribute from here?
const mobilHeadshot = document.querySelector("#mobile-headshot");

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
