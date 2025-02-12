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
  const tabLink = document.querySelectorAll(".tab__item"); //ссылки на табы внутри контейнера с табами
  const tabContent = document.querySelectorAll(".section-content__container"); //контейнеры с контентом табов

  const contentHeader = document.querySelectorAll(".header__container"); //заголовок контента таба

  if (tabId) {
    // Деактивируем все табы и контент
    tabLink.forEach((tab) => {
      tab.classList.remove("active");
      // tab.style.display = "none";
    });
    tabContent.forEach((content) => {
      content.classList.remove("active");
      content.style.display = "none";
    });
    contentHeader.forEach((header) => {
      header.classList.remove("active");
      header.style.display = "none";
    });

    // Активируем нужный таб и соответствующий контент
    const selectedTab = document.querySelector(
      `.tab__item[data-tab="${tabId}"]`
    );

    const selectedContent = document.querySelector(
      `.section-content__container[data-tab="${tabId}"]`
    );

    const selectedContentHeader = document.querySelector(
      `.header__container[data-tab="${tabId}"]`
    );

    console.log(selectedTab, selectedContent);

    if (selectedTab && selectedContent) {
      selectedTab.classList.add("active");
      // selectedTab.style.backgroundColor = "lemon";
      // selectedTab.style.display = "block";
      selectedTab.style.backgroundColor = "rgb(255, 208, 80)";
      selectedTab.style.border = "rgb(255, 208, 80)";
      // selectedContent.classList.add("active");
      selectedContent.style.display = "block";
      // selectedContentHeader.classList.add("active");
      selectedContentHeader.style.display = "block";
    }
  } else if (document.querySelector(".section-content__container")) {
    tabs({
      selectorTab: ".tab__item",
      // selectorLink: ".tab__link",
      selectorContent: ".section-content__container",
      selectorHeader: ".header__container",
      selectorParent: ".section-content",
      activeClass: "active",
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

  // Burger Menu
  const btnBurger = document.querySelector(".menu-burger__btn");
  btnBurger.addEventListener("click", function () {
    this.classList.toggle("active");
    if (btnBurger.classList.contains("active")) {
      btnBurger.style.backgroundColor = "#5d5656";
      btnBurger.style.color = "#efa8a8";
      btnBurger.style.maxWidth = 100 + "px";
      btnBurger.style.borderTopLeftRadius = 10 + "px";
      btnBurger.style.borderBottomLeftRadius = 10 + "px";
    
    } else if (!btnBurger.classList.contains("active")){
      btnBurger.style.backgroundColor  = "inherit";
      btnBurger.style.color = "inherit";
    }
    document.querySelector(".menu-burger__list").classList.toggle("open");
  });
});
