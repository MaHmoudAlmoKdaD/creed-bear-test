export const LoginStart = () => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const openAddUserBox = () => ({
  type: "TOGGLE_OPEN_CLOSE_BOX_ADD",
});

export const openUpdateUserBox = () => ({
  type: "TOGGLE_OPEN_CLOSE_BOX_UPDATE",
});

export const initialUsers = (users) => ({
  type: "INITIAL_USERS",
  payload: users,
});
