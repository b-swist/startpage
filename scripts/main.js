(async () => {
  const config = await loadConfig();
  generateBookmarks(config.bookmarks);
  initSearchbox(config.searchUrl);
})();
