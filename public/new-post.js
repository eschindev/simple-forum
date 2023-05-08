const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();
  const created_on = new Date();
  const user_id = event.target.dataset.userId;

  const response = await fetch(`/api/post`, {
    method: "POST",
    body: {
      title,
      body,
      created_on,
      user_id,
    },
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/post/${event.target.dataset.postId}`);
  } else {
    alert("Failed to create post.");
  }
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostFormHandler);
