import tabs from "./modules/tabs.js";
import testimonialAuthor from "./modules/testimonial.js";
import addAuthor from "./modules/authors.js";
// import { deleteAuthor } from "./modules/authors.js";
import { author } from "./modules/authorsData.js";
import slider from "./modules/slider.js";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  function deleteAuthor() {
    author.splice(4, 7); // remove the first 5 authors from the array to prevent duplicate authors from appearing on the second page
  }

  if (document.querySelector(".authors__list") !== null) {
    addAuthor(author, ".authors__list");
  }

  if (document.querySelector(".testimonial__line")) {
    testimonialAuthor(author, ".testimonial__line");
  }

  if (document.querySelector(".testimonial__right")) {
    slider({
      lineSelector: ".testimonial__line",
      wrapperSelector: ".testimonial__right",
      itemSelector: ".testimonial__author",
      arrowNextSelector: ".testimonial__pagination-next",
      arrowPrevSelector: ".testimonial__pagination-prev",
    });
  }

  if (document.querySelector(".authors__lists") !== null) {
    addAuthor(author, ".authors__lists", deleteAuthor());
  }

  if (document.querySelector(".testimonial__author") !== null) {
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

  if (document.querySelector(".all-posts__container")) {
    slider({
      lineSelector: ".all-posts__posts",
      wrapperSelector: ".all-posts__container",
      itemSelector: ".all-posts__block",
      arrowNextSelector: ".all-post__next",
      arrowPrevSelector: ".all-post__prev",
    });
  }
});
