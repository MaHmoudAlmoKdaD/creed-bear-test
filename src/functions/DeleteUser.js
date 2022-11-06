export const deleteUser = (id, data) =>
  new Promise(async (resolve, reject) => {
    let mainUsers = data;
    if (!mainUsers.some((user) => user.id === id)) {
      return setTimeout(
        () =>
          reject({
            data: {
              status: "failure",
              message: "user doesn't exist!",
            },
          }),
        2500
      );
    }

    const newUsers = await mainUsers.filter((user) => user.id !== id);
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
