import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}


import "./scripts/hamburger-menu";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/parallax";
import "./scripts/scroll";