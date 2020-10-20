const baseUrl = "https://api.github.com";

async function apiFetch(url, options) {
  const response = await fetch(baseUrl + url, options);
  const data = await response.json();
  if (response.status >= 300) {
    throw Error(data.message);
  }
  return data;
}

export function fetchUser(username) {
  return apiFetch(`/users/${username}`);
}

export function fetchUserRepos(username) {
  return apiFetch(`/users/${username}/repos`);
}

export function fetchRepo(owner, repo) {
  return apiFetch(`/repos/${owner}/${repo}`);
}
