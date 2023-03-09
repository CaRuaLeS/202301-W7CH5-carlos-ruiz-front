import { useDispatch, useSelector } from "react-redux";
import { UserStructure } from "../model/user";
import { userSlice } from "../reducer/users.slice";
import { UsersRepo } from "../services/user.api.repo";
import { AppDispatch, RootState } from "../store/store";

const { register, login, loadUsers, updateRelations } = userSlice.actions;

export function useUsers(repo: UsersRepo) {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const registerUser = async (info: Partial<UserStructure>) => {
    try {
      const data = await repo.create(info, "register");
      dispatch(register(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const loginUSer = async (info: UserStructure) => {
    try {
      const data = await repo.create(info, "login");
      dispatch(login(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const readAllUsers = async () => {
    try {
      if (!users.userLogged!.token) throw new Error("Not authorized");

      const info = await repo.readAll(users.userLogged!.token);

      dispatch(loadUsers(info.results));
    } catch (error) {}
  };

  const updateUsers = async (
    userInfo: Partial<UserStructure>,
    action: string
  ) => {
    try {
      if (!users.userLogged.token) throw new Error("Not authorized");

      const info = await repo.update(userInfo, action, users.userLogged.token);

      dispatch(updateRelations(info.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    users,
    registerUser,
    loginUSer,
    readAllUsers,
    updateUsers,
  };
}
