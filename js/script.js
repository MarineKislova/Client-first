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

  // переход на таб другой страницы
  const urlParams = new URLSearchParams(window.location.search);
  const tabId = urlParams.get("tab"); //контейнер с табами
  const tabLink = document.querySelectorAll(".category-tab__tab"); //ссылки на табы внутри контейнера с табами
  const tabContent = document.querySelectorAll(".category-content__content"); //контейнеры с контентом табов
  const contentHeader = document.querySelectorAll(".category-content__header"); //заголовок контента таба

  if (tabId) {
    // Деактивируем все табы и контент
    tabLink.forEach((tab) => {
      tab.classList.remove("active");
      // tab.style.display = "none";
    });
    tabContent.forEach((content) => {
      // content.classList.remove("active");
      content.style.display = "none";
    });
    contentHeader.forEach((header) => {
      // header.classList.remove("active");
      header.style.display = "none";
    });

    // Активируем нужный таб и соответствующий контент
    const selectedTab = document.querySelector(
      `.category-tab__tab[data-tab="${tabId}"]`
    );

    const selectedContent = document.querySelector(
      `.category-content__content[data-tab="${tabId}"]`
    );

    const selectedContentHeader = document.querySelector(
      `.category-content__header[data-tab="${tabId}"]`
    );

    console.log(selectedTab, selectedContent, selectedContentHeader);

    if (selectedTab && selectedContent && selectedContentHeader) {
      selectedTab.classList.add("active");
      // selectedTab.style.display = "block";
      selectedTab.style.backgroundColor = "yellow";
      selectedContent.classList.add("active");
      selectedContent.style.display = "block";
      selectedContentHeader.classList.add("active");
      selectedContentHeader.style.display = "block";
    }
  } else if (document.querySelectorAll(".category-content__conent")) {
    tabs({
      selectorTab: ".category-tab__tab",
      selectorContent: ".category-content__content",
      selectorHeader: ".category-content__header",
      selectorParent: ".category-section",
      // activeClass: "active",
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
