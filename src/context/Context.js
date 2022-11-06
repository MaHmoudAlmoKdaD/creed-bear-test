import { createContext, useEffect, useReducer } from "react";
import users from "../FakeData";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  initial_users: users.data,
  isFetching: false,
  error: false,
  openAddUserBOx: false,
  openUpdateUserBOx: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        openAddUserBOx: state.openAddUserBOx,
        openUpdateUserBOx: state.openUpdateUserBOx,
        initial_users: state.initial_users,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
