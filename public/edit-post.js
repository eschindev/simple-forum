const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();

  const response = await fetch(`/api/post/${event.target.dataset.postId}`, {
    method: "PUT",
    body: {
      title,
      body,
    },
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/post/${event.target.dataset.postId}`);
  } else {
    alert("Failed to edit post.");
  }
};

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);
