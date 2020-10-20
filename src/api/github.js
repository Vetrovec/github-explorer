export async function fetchUser(username) {
  const response = await fetch("https://api.github.com/users/" + username);
  const user = await response.json();
  if (response.status >= 300) {
    throw Error(user.message);
  }
  return user;
}

export async function fetchUserRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const repos = await response.json();
  if (response.status >= 300) {
    throw Error(repos.message);
  }
  return repos;
}

export async function fetchRepo(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const repos = await response.json();
  if (response.status >= 300) {
    throw Error(repos.message);
  }
  return repos;
}
