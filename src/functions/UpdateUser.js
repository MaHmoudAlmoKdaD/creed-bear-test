export const updateUser = (users, id, data) => {
  return new Promise((resolve, reject) => {
    if (data === undefined) {
      return setTimeout(
        () =>
          reject({
            data: {
              status: "failure",
            },
          }),
          2500
      );
    }

    const newUsers = users.map((user) => {
      if (user.id === id) {
        user.first_name = data.first_name;
        user.last_name = data.last_name;
        user.email = data.email;
        return user;
      } else {
        return user;
      }
    });
    return setTimeout(
      () =>
        resolve({
          data: {
            status: "success",
            users: newUsers,
          },
        }),
        2500
    );
  });
};
