const users = {
  1: { name: "Sveta" },
  2: { name: "Sasha" },
  3: { name: "Oleg" },
  4: { name: "Vasia" },
  5: { name: "Kolia" },
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr("/users/".length), 10);
    process.nextTick(() =>
      users[userID]
        ? resolve(users[userID])
        : reject({
            error: "User with " + userID + " not found.",
          })
    );
  });
}
