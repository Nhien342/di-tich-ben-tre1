// Lưu bình luận vào localStorage
document.getElementById("commentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let commentText = document.getElementById("commentText").value;
  if (commentText) {
    let commentList = document.getElementById("commentList");
    let newComment = document.createElement("p");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
    document.getElementById("commentText").value = "";
  }
});

// Xử lý chia sẻ
document.querySelector(".facebook").setAttribute("href", `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
document.querySelector(".twitter").setAttribute("href", `https://twitter.com/intent/tweet?url=${window.location.href}`);
document.querySelector(".zalo").setAttribute("href", `https://zalo.me/share?url=${window.location.href}`);