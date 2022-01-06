import "./client/styles/header.scss";
import "./client/styles/body.scss";
import "./client/styles/mediaQueries.scss";
import "./client/styles/projects.scss";

import { makeSticky, scrollToSection } from "./client/app";

const header = document.getElementById("header");

window.onscroll = function () {
  makeSticky(header);
};

window.DOMContentLoaded(scrollToSection());

export { makeSticky, scrollToSection };
