const displayRepos = repos => {
  console.log(repos);
};

const displayUser = data => {
  console.log(data);
  getRepositories(data.name, displayRepos);
};

console.log("Before");
getUser(1)
  .then(user => getRepositories(user.name))
  .then(repos => {
    console.log(repos);
  })
  .catch(error => console.log(error));
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching results for id ${id}`);
      resolve({
        id: id,
        name: "Vivek"
      });
    }, 2000);
  });
}

function getRepositories(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching repositories for user ${name}`);
      resolve(["Repo1", "Repo2", "Repo3"]);
    }, 2000);
  });
}
