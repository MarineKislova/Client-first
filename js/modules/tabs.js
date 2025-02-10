function tabs({
  selectorTab,
  selectorContent,
  selectorHeader,
  selectorParent,
  activeClass,
}) {
  const urlParams = new URLSearchParams(window.location.search);
  const tabId = urlParams.get("tab");

  const tabs = document.querySelectorAll(selectorTab);
  const tabsContent = document.querySelectorAll(selectorContent);
  const tabsHeader = document.querySelectorAll(selectorHeader);
  const tabsParent = document.querySelector(selectorParent);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabsHeader.forEach((item) => {
      item.style.display = "none";
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
      if (!item.classList.contains(activeClass)) {
        item.style.color = "#696969";
        // item.style.textDecoration = "none";
        item.style.border = " 1.5px solid rgb(193, 193, 195)";
        item.style.background = "#ffffff";
      }
    });
  }

  function showTabContent(i) {
    tabsContent[i].style.display = "block";
    tabsHeader[i].style.display = "block";
    tabs[i].classList.add(activeClass);
    if (tabs[i].classList.contains(activeClass)) {
      tabs[i].style.color = "#696969";
      // tabs[i].style.textDecoration = "underline";
      tabs[i].style.border = "2px solid rgb(255, 208, 102, 0.7)";
      tabs[i].style.background = "rgb(255, 208, 80)";
    }
  }

  hideTabContent();
  showTabContent(0);

  tabs.forEach((item, i) => {
    item.addEventListener("click", () => {
      hideTabContent();
      showTabContent(i);
      console.log("clicked tab:", i);
    });
  });

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains(tabs)) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
          // console.log('clicked tab:', i);
        }
      });
    }
  });
}

export default tabs;
