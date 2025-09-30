const searchUrl = "https://duckduckgo.com/?q=%s";

const searchbox = document.getElementById("searchbox");

function search(event) {
  event.preventDefault();
  const query = searchbox.value.trim();

  if (query)
    window.location.href = searchUrl.replace("%s", encodeURIComponent(query));
}

searchbox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    search(event);
  }
});

window.onload = function () {
  searchbox.focus();
};
