// authors


function addAuthor(author, selectorList) {
  const authorsList = document.querySelector(selectorList);
  authorsList.style.display = "grid";
  authorsList.style.gridTemplateColumns =
    "repeat(auto-fill, minmax(275px, 1fr))";
  authorsList.style.gridTemplateRows = "auto";
  authorsList.style.gap = 10 + "px";

  // create authors
  author.forEach((item) => {
    // const authorList = document.querySelector(".authors__list");
    // create author item
    const authorItem = document.createElement("div");
    authorItem.classList.add("authors__item");

    const authorImage = document.createElement("img");
    const authorName = document.createElement("h4");
    const authorLink = document.createElement("a");
    const authorTittle = document.createElement("p");
    const authorBio = document.createElement("p");
    //social media
    const authorSocialMedia = document.createElement("div");
    const socialMediaItem = document.createElement("a");
    const socialMediaIcon = document.createElement("img");
    authorLink.href = item.link;
    authorLink.target = "_blank";
    authorImage.src = item.image;
    authorImage.alt = item.alt;
    authorName.textContent = item.name;
    authorTittle.textContent = item.tittle;

    authorBio.textContent = item.bio;
    authorSocialMedia.classList.add("authors__social-media");
    authorSocialMedia.style.display = "flex";
    authorSocialMedia.style.justifyContent = "center";
    authorSocialMedia.style.gap = 10 + "px";

    item.socialMedia.forEach((social) => {
      socialMediaItem.href = social.link;
      socialMediaItem.alt = social.name;
      socialMediaIcon.src = social.icon;
      socialMediaItem.appendChild(socialMediaIcon);

      socialMediaIcon.style.width = 30 + "px";
      socialMediaIcon.style.height = 35 + "px";
      socialMediaIcon.style.objectFit = "fill";

      let offsetWidth = window.innerWidth; // get current window width to adjust social media icon size based on screen width

      authorSocialMedia.appendChild(socialMediaItem.cloneNode(true)); // clone social media item for each social media item to add to social media div to avoid creating duplicate elements in the DOM
    });

    authorItem.appendChild(authorImage);
    authorItem.appendChild(authorLink);
    authorLink.appendChild(authorName);
    authorItem.appendChild(authorTittle);
    // authorItem.appendChild(authorBio);
    authorItem.appendChild(authorSocialMedia);

    authorsList.appendChild(authorItem);
    // authorsList.forEach((list) => {
    //   list.appendChild(authorItem);
    // });
  });
}



export default addAuthor;

