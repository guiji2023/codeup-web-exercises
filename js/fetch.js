import { keys } from "./keys.js";

const getUserLastCommit = async (username, key) => {
  const url = `https://api.github.com/users/${username}/events`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  try {
    const response = await fetch(url, options);
    const list = await response.json();
    const event = list.find((value) => {
      return value.type === "PushEvent";
    });
    const lastCommit = event.created_at;
    return new Date(lastCommit);
  } catch (error) {
    return console.log(error);
  }
};

(async () => {
  const key = keys.github;
  const username = "guiji2023";
  console.log(await getUserLastCommit(username, key));
})();
