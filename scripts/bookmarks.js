const bookmarks = [
  {
    title: "socials",
    children: [
      { title: "Github", url: "https://github.com" },
      { title: "Gmail", url: "https://google.com/mail" },
      { title: "MS Teams", url: "https://teams.microsoft.com" },
    ],
  },
  {
    title: "reddit",
    children: [
      { title: "Unixporn", url: "https://reddit.com/r/unixporn" },
      { title: "Startpages", url: "https://reddit.com/r/startpages" },
    ],
  },
  {
    title: "math",
    children: [
      { title: "Desmos", url: "https://www.desmos.com/calculator" },
      { title: "Wolfram Alpha", url: "https://www.wolframalpha.com/" },
    ],
  },
];

let frag = document.createDocumentFragment();

function generateSectionTag(title, entries) {
  const section = document.createElement("section");

  const heading = document.createElement("h2");
  heading.textContent = title;
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

bookmarks.forEach((section) => {
  frag.appendChild(generateSectionTag(section.title, section.children));
});

document.getElementById("nav").appendChild(frag);
