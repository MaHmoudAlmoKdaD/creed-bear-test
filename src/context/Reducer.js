const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
        initial_users: state.initial_users,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        initial_users: state.initial_users,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
        initial_users: state.initial_users,
      };
    case "TOGGLE_OPEN_CLOSE_BOX_ADD":
      return {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        openAddUserBOx: !state.openAddUserBOx,
        initial_users: state.initial_users,
      };
    case "TOGGLE_OPEN_CLOSE_BOX_UPDATE":
      return {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        openAddUserBOx: state.openAddUserBOx,
        openUpdateUserBOx: !state.openUpdateUserBOx,
        initial_users: state.initial_users,
      };
    case "INITIAL_USERS":
      return {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        openAddUserBOx: state.openAddUserBOx,
        openUpdateUserBOx: state.openUpdateUserBOx,
        initial_users: action.payload,
      };
  }
};

export default Reducer;
