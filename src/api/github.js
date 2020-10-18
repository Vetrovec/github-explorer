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
  if (response.status >= 300) {
    throw Error(user.message);
  }
  const repos = await response.json();
  return repos;
}
