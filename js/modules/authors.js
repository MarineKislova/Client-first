// authors
const author = [
  {
    name: "Floyd Miles",
    tittle: "Content Writer @Company",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in nunc viverra pharetra. Donec auctor, purus vitae viverra luctus, mauris mauris gravida neque, id lobortis metus nunc nec neque. Sed et ligula vel ex facilisis posuere. Donec libero massa, suscipit vel neque vitae, faucibus bibendum dui. ",
    image: "img/authors/Floyd_Miles.svg",
    alt: "Floyd Miles",
    socialMedia: [
      {
        name: "Facebook",
        link: "#",
        icon: "icons/facebook.svg",
      },

      {
        name: "Twitter",
        link: "#",
        icon: "icons/twitter.svg",
      },

      {
        name: "Instagram",
        link: "#",
        icon: "icons/instagram.svg",
      },

      {
        name: "LinkedIn",
        link: "#",
        icon: "icons/linkedin.svg",
      },
    ],
  },

  {
    name: "Dianne Russell",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in nunc viverra pharetra. Donec auctor, purus vitae viverra",
    tittle: "Content Writer @Company",
    image: "img/authors/Dianne_Russell.svg",
    alt: "Dianne Russell",
    socialMedia: [
      {
        name: "Facebook",
        link: "#",
        icon: "icons/facebook.svg",
      },

      {
        name: "Twitter",
        link: "#",
        icon: "icons/twitter.svg",
      },

      {
        name: "Instagram",
        link: "#",
        icon: "icons/instagram.svg",
      },

      {
        name: "LinkedIn",
        link: "#",
        icon: "icons/linkedin.svg",
      },
    ],
  },

  {
    name: "Jenny Wilson",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in nunc viverra pharetra. Donec auctor, purus vitae viverra",
    tittle: "Content Writer @Company",
    image: "img/authors/Jenny_Wilson.svg",
    alt: "Jenny Wilson",
    socialMedia: [
      {
        name: "Facebook",
        link: "#",
        icon: "icons/facebook.svg",
      },

      {
        name: "Twitter",
        link: "#",
        icon: "icons/twitter.svg",
      },

      {
        name: "Instagram",
        link: "#",
        icon: "icons/instagram.svg",
      },

      {
        name: "LinkedIn",
        link: "#",
        icon: "icons/linkedin.svg",
      },
    ],
  },

  {
    name: "Leslie Alexander",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in nunc viverra pharetra. Donec auctor, purus vitae viverra",
    tittle: "Content Writer @Company",
    image: "img/authors/Leslie_Alexander.svg",
    alt: "Leslie Alexander",
    socialMedia: [
      {
        name: "Facebook",
        link: "#",
        icon: "icons/facebook.svg",
      },

      {
        name: "Twitter",
        link: "#",
        icon: "icons/twitter.svg",
      },

      {
        name: "Instagram",
        link: "#",
        icon: "icons/instagram.svg",
      },

      {
        name: "LinkedIn",
        link: "#",
        icon: "icons/linkedin.svg",
      },
    ],
  },

  {
    name: "Guy Hawkins",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in nunc viverra pharetra. Donec auctor, purus vitae viverra",
    tittle: "Content Writer @Company",
    image: "img/authors/Guy_Hawkins.svg",
    alt: "Guy Hawkins",
    socialMedia: [
      {
        name: "Facebook",
        link: "#",
        icon: "icons/facebook.svg",
      },

      {
        name: "Twitter",
        link: "#",
        icon: "icons/twitter.svg",
      },

      {
        name: "Instagram",
        link: "#",
        icon: "icons/instagram.svg",
      },

      {
        name: "LinkedIn",
        link: "#",
        icon: "icons/linkedin.svg",
      },
    ],
  },

  {
    name: "Eleanor Pena",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in nunc viverra pharetra. Donec auctor, purus vitae viverra",
    tittle: "Content Writer @Company",
    image: "img/authors/Eleanor_Pena.svg",
    alt: "Eleanor Pena",
    socialMedia: [
      {
        name: "Facebook",
        link: "#",
        icon: "icons/facebook.svg",
      },

      {
        name: "Twitter",
        link: "#",
        icon: "icons/twitter.svg",
      },

      {
        name: "Instagram",
        link: "#",
        icon: "icons/instagram.svg",
      },

      {
        name: "LinkedIn",
        link: "#",
        icon: "icons/linkedin.svg",
      },
    ],
  },

  {
    name: "Robert Fox",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in nunc viverra pharetra. Donec auctor, purus vitae viverra",
    tittle: "Content Writer @Company",
    image: "img/authors/Robert_Fox.svg",
    alt: "Robert Fox",
    socialMedia: [
      {
        name: "Facebook",
        link: "#",
        icon: "icons/facebook.svg",
      },

      {
        name: "Twitter",
        link: "#",
        icon: "icons/twitter.svg",
      },

      {
        name: "Instagram",
        link: "#",
        icon: "icons/instagram.svg",
      },

      {
        name: "LinkedIn",
        link: "#",
        icon: "icons/linkedin.svg",
      },
    ],
  },

  {
    name: "Jacob Jones",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in nunc viverra pharetra. Donec auctor, purus vitae viverra",
    tittle: "Content Writer @Company",
    image: "img/authors/Jacob_Jones.svg",
    alt: "Jacob Jones",
    socialMedia: [
      {
        name: "Facebook",
        link: "#",
        icon: "icons/facebook.svg",
      },

      {
        name: "Twitter",
        link: "#",
        icon: "icons/twitter.svg",
      },

      {
        name: "Instagram",
        link: "#",
        icon: "icons/instagram.svg",
      },

      {
        name: "LinkedIn",
        link: "#",
        icon: "icons/linkedin.svg",
      },
    ],
  },
];

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
    const authorTittle = document.createElement("p");
    const authorBio = document.createElement("p");
    //social media
    const authorSocialMedia = document.createElement("div");
    const socialMediaItem = document.createElement("a");
    const socialMediaIcon = document.createElement("img");
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
    authorItem.appendChild(authorName);
    authorItem.appendChild(authorTittle);
    // authorItem.appendChild(authorBio);
    authorItem.appendChild(authorSocialMedia);

    authorsList.appendChild(authorItem);
    // authorsList.forEach((list) => {
    //   list.appendChild(authorItem);
    // });
  });
}

function deleteAuthor() {
  author.splice(4, 5); // remove the first 5 authors from the array to prevent duplicate authors from appearing on the second page
}

export { deleteAuthor };
export default addAuthor;
export { author };
