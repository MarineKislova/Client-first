const testimonials = document.querySelector(".testimonial__line")

function testimonialAuthor(author, selectorContainer) {
    const container = document.querySelector(selectorContainer);


    author.forEach((item) => {
      const authorBlock = document.createElement("div");
      authorBlock.classList.add("testimonial__author");
      const authorBio = document.createElement("p");
      authorBio.classList.add("testimonial__author-bio");
      const authorImage = document.createElement("div");
      authorImage.classList.add("testimonial__author-image");
      const imgIcon = document.createElement("img");

      const authorLink = document.createElement("a");
      authorLink.classList.add("testimonial__author-link");
      const authorName = document.createElement("h3");
      authorName.classList.add("testimonial__author-name");
      const authorResidense = document.createElement("p");
      authorResidense.classList.add("testimonial__author-residence");

      authorBio.textContent = item.bio;
      imgIcon.src = item.image;
      imgIcon.alt = item.alt;
      authorResidense.textContent = item.residence;
      authorLink.href = item.link;
      authorName.textContent = item.name;
      authorLink.target = "_blank";
      container.appendChild(authorBlock);
      authorBlock.appendChild(authorBio);
      authorBlock.appendChild(authorImage);
      authorImage.appendChild(imgIcon);
      authorBlock.appendChild(authorLink);
      authorLink.appendChild(authorName);
      authorBlock.appendChild(authorResidense);

        authorImage.style.alignSelf = "center";
        imgIcon.style.borderRadius = "50%";
        imgIcon.style.width = 100 + "px";
        // authorBio.style.alignSelf = "center";
        // authorBio.style.maxWidth = 300 +"px";

    });
  }
 

  export default testimonialAuthor;