import { useContext } from "react";
import { Context } from "../context/Context";

export const useGetUsers = () => {
  const { initial_users } = useContext(Context);
  const promise = () => {
    return new Promise((resolve, reject) => {
      if (!initial_users) {
        return setTimeout(() => reject(new Error("Users not found")), 2500);
      }

      return setTimeout(() => resolve(Object.values(initial_users)), 2500);
    });
  };

  return [promise];
};
