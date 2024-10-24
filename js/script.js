import tabs from "./modules/tabs.js";
import addAuthor from "./modules/authors.js";
import { deleteAuthor } from "./modules/authors.js";
import { author } from "./modules/authors.js";
import slider from "./modules/slider.js";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";


  if (document.querySelector(".authors__list") !== null) {
    addAuthor(author, ".authors__list");
  }

  if (document.querySelector(".authors__lists") !== null) {
    addAuthor(author, ".authors__lists", deleteAuthor());
  }

  if (document.querySelector(".category-content") !== null) {
    tabs({
      selectorContent: ".category-content",
      selectorHeader: ".category-content__header",
      selectorTab: ".category-tab__tab",
      // tabsLink: ".category__link",
      selectorParent: ".category-section",
      activeClass: ".category-tab__tab-active",
    });
  }

  if (document.querySelector(".all-posts__container")!== null) {
    slider({
      lineSelector: ".all-posts__posts",
      wrapperSelector: ".all-posts__container",
      itemSelector: ".all-posts__block",
      arrowNextSelector: ".all-post__next",
      arrowPrevSelector: ".all-post__prev",
    });
  }

  
});
