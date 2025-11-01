const bookmarks = [
  {
    title: "socials",
    children: [
      { title: "gmail", url: "https://google.com/mail" },
      { title: "teams", url: "https://teams.microsoft.com" },
    ],
  },
  {
    title: "reddit",
    children: [
      { title: "r/unixporn", url: "https://reddit.com/r/unixporn" },
      { title: "r/startpages", url: "https://reddit.com/r/startpages" },
      { title: "r/linux", url: "https://www.reddit.com/r/linux" },
    ],
  },
  {
    title: "math",
    children: [
      { title: "desmos", url: "https://www.desmos.com/calculator" },
      { title: "wolfram", url: "https://www.wolframalpha.com" },
    ],
  },
  {
    title: "coding",
    children: [
      { title: "github", url: "https://github.com" },
      { title: "stack overflow", url: "https://stackoverflow.com" },
      { title: "chatgpt", url: "https://chatgpt.com" },
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
