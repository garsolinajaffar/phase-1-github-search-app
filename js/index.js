fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
.then((response) => response.json())
.then((data) => {
  const users = data.items;
  users.forEach((user) => {
    // display user information on the page
  });
});
userDiv.addEventListener("click", () => {
    fetch(`https://api.github.com/users/${user.login}/repos`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      const repos = data;
      repos.forEach((repo) => {
        // display repo information on the page
      });
    });
  });
  const repoDiv = document.createElement("div");
repoDiv.innerHTML = `
  <h3>${repo.name}</h3>
  <a href="${repo.html_url}">${repo.html_url}</a>
`;
let searchType = "users";

toggleButton.addEventListener("click", () => {
  if (searchType === "users") {
    searchType = "repos";
    searchInput.placeholder = "Search for repositories...";
  } else {
    searchType = "users";
    searchInput.placeholder = "Search for users...";
  }
});

let url = "";
if (searchType === "users") {
  url = `https://api.github.com/search/users?q=${searchTerm}`;
} else {
  url = `https://api.github.com/search/repositories
