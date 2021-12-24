import "./client/styles/header.scss";
import "./client/styles/body.scss";

import { styleSocialHover } from "./client/app";

const instaIcon = document.getElementById("instagram");
const linkdeinIcon = document.getElementById("linkedin");
const githubIcon = document.getElementById("github");
const emailIcon = document.getElementById("email");

const icons = [instaIcon, linkdeinIcon, githubIcon, emailIcon];

console.log("icons", icons);

styleSocialHover(icons);

export { styleSocialHover };
