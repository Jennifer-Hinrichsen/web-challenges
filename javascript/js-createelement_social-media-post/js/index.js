console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const postArticle = document.createElement("article");
postArticle.classList.add("post");
document.body.append(postArticle);

const paragraph = document.createElement("p");
paragraph.classList.add("post__content");
postArticle.append(paragraph);
paragraph.textContent = "Hier steht Text, Hier steht Text";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
postArticle.append(postFooter);

const postSpanUserName = document.createElement("span");
postSpanUserName.classList.add("post__username");
postFooter.append(postSpanUserName);
postSpanUserName.innerText = "@username";

const postLikeButton = document.createElement("button");
postLikeButton.classList.add("post__button");
postFooter.append(postLikeButton);
postLikeButton.innerText = "♥ Like";

postLikeButton.addEventListener("click", handleLikeButtonClick);
