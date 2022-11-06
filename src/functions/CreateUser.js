import { useContext } from "react";
import { Context } from "../context/Context";
import { v4 as generateId } from "uuid";
import { FakerGenerationImg } from "../faker-generation/FakerGenerationImg";

export const useCreateUser = () => {
  const { initial_users } = useContext(Context);
  const promise = (data) => {
    return new Promise((resolve, reject) => {
      if (!data.first_name || !data.last_name || !data.email) {
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

      //if email exist return an error

      if (initial_users.some((user) => user.email === data.email)) {
        return setTimeout(
          () =>
            reject({
              data: {
                status: "failure",
                message: "choose another email",
              },
            }),
          2500
        );
      }
      // generate random Id for new Object
      const id = generateId();
      // generate random avatar for new user
      const { avatar } = FakerGenerationImg();
      const newUser = { id, avatar, ...data };
      const users = initial_users.map(user=> user)
      users.push(newUser)
      // const users = {...initial_users, newUser}

      return setTimeout(
        () =>
          resolve({
            data: {
              status: "success",
              users: users,
            },
          }),
        250
      );
    });
  };

  return [promise];
};
