import { PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";
import { userSlice } from "./users.slice";

const mockUsers = [
  { id: "1", email: "juan", password: "red", friends: [], enemies: [] },
  { id: "2", email: "pipo", password: "asdf", friends: [], enemies: [] },
];
const mockUserState = {
  users: [
    { id: "1", email: "juan", password: "red", friends: [], enemies: [] },
    { id: "2", email: "pipo", password: "asdf", friends: [], enemies: [] },
  ],
  userLogged: {} as UserStructure,
};
describe("Given the userSlice", () => {
  const { register, login, loadUsers, updateRelations } = userSlice.actions;

  describe("When the method register is called", () => {
    test("Then it should return the initial state", () => {
      const initialState = undefined;
      const action = {
        payload: "",
        type: "",
      } as unknown as PayloadAction;
      const payload = { type: "" };

      const element = "a";
      expect(element).toEqual({ user: {}, users: [] });
    });
  });
});
