const deleteHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/post/${event.target.dataset.postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to delete post.");
  }
};

document.querySelector("#delete-post").addEventListener("click", deleteHandler);
