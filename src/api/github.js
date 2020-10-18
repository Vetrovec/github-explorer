export async function fetchUser(username) {
  const response = await fetch("https://api.github.com/users/" + username);
  const user = await response.json();
  if (response.status >= 300) {
    throw Error(user.message);
  }
  return user;
}
