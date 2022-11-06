import users from "../FakeData";

const getUser = (email) =>
  new Promise((resolve, reject) => {
    const user = users.data.filter((user) => {
      return user.email === email;
    });

    if (user.length < 1) {
      return setTimeout(
        () =>
          reject({
            data: {
              status: "failure",
              message: "email doesn't exist!",
            },
          }),
          2500
      );
    }

    return setTimeout(
      () => resolve({ data: { status: "success", user: { ...user[0] } } }),
      2500
    );
  });

export const getAuthUser = async (email) => {
  try {
    const result = await getUser(email);
    return result;
  } catch (error) {
    return error;
  }
};
