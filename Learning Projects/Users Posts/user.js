const postListElem = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);
}

async function renderPosts(id) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const postsData = await posts.json();
  postListElem.innerHTML = postsData.map((post) => postHTML(post)).join("");
}

function postHTML(post) {
  return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`;
}

renderPosts(id);
