import { UserStructure } from "../model/user";
import { userReducer } from "./users.reducer";
import * as ac from "./users.actions.creator";

const mockUsers = [
  { id: "1", email: "Apple", password: "red", friends: [], enemies: [] },
  { id: "2", email: "pipo", password: "asdf", friends: [], enemies: [] },
];

const mockUserState = {
  users: [
    { id: "1", email: "Apple", password: "red", friends: [], enemies: [] },
    { id: "2", email: "pipo", password: "asdf", friends: [], enemies: [] },
  ],
  user: {} as UserStructure,
};

describe("Given the userReducer", () => {
  describe("When we try the default state", () => {
    test("Then it should return the initial state", () => {
      const initialState = undefined;
      const payload = { type: "" };
      const element = userReducer(initialState, payload);
      expect(element).toEqual({ user: {}, users: [] });
    });
  });
});
