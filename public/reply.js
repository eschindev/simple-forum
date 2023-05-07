const replyFormHandler = async (event) => {
  event.preventDefault();

  const body = document.querySelector("#reply-input").value.trim();
  const post_id = document.querySelector(".post").dataset.postId;
  const user_id = document.querySelector(".reply-form").dataset.currentUserId;
  const created_on = new Date();

  if (replyInput) {
    const response = await fetch("/api/reply", {
      method: "POST",
      body: JSON.stringify({ body, created_on, post_id, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to add reply");
    }
  }
};

document
  .querySelector(".reply-form")
  .addEventListener("submit", replyFormHandler);
