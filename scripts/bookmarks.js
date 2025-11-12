const maxLen = (arr) => Math.max(0, ...arr.map((str) => str.length));

function alignHeading(heading, entriesTitles) {
  const listLen = maxLen(entriesTitles) + 2; // account for list markers
  const indent = Math.trunc((listLen - heading.length + 1) / 2);
  return indent.toString() + "ch";
}

function generateSectionTag(title, entries) {
  const section = document.createElement("section");

  const heading = document.createElement("h2");
  heading.textContent = title;
  const entryTitles = entries.map((e) => e.title);
  heading.style.marginLeft = alignHeading(title, entryTitles);

  section.appendChild(heading);

  const ul = document.createElement("ul");
  entries.forEach((entry) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = entry.title;
    a.href = entry.url;
    li.appendChild(a);
    ul.appendChild(li);
  });

  section.appendChild(ul);

  return section;
}

function generateBookmarks(bookmarks) {
  let frag = document.createDocumentFragment();

  bookmarks.forEach((section) => {
    frag.appendChild(generateSectionTag(section.title, section.children));
  });

  document.getElementById("nav").appendChild(frag);
}
