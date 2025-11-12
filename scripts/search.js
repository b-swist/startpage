const searchbox = document.getElementById("searchbox");

function search(url) {
  const query = searchbox.value.trim();

  if (query)
    window.location.href = url.replace("%s", encodeURIComponent(query));
}

function initSearchbox(url) {
  searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      search(url);
    } else if (event.key === "Escape") searchbox.blur();
  });
}

document.addEventListener("keydown", (event) => {
  if (document.activeElement === searchbox) return;
  if (event.key === "/") {
    event.preventDefault();
    searchbox.focus();
    // if (searchbox.value === "") return;
    searchbox.select();
  }
});

window.addEventListener("load", () => searchbox.focus());
