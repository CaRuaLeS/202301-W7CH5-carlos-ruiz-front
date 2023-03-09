import { PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";
import reducer, { State } from "./users.slice";

const mockUsers = [
  { id: "1", email: "juan", password: "red", friends: [], enemies: [] },
  { id: "2", email: "pipo", password: "asdf", friends: [], enemies: [] },
];

const mockUser = {
  id: "3",
  email: "pepe",
  password: "blue",
  friends: [],
  enemies: [],
};
const mockInitialState: State = {
  userLogged: {} as UserStructure,
  users: [],
};

describe("Given the userSlice", () => {
  describe("When the method register is called", () => {
    test("Then it should return in element.users the mock user on an array", () => {
      const mockRegisterAction: PayloadAction<UserStructure> = {
        type: "user/register",
        payload: mockUser,
      };
      const element = reducer(mockInitialState, mockRegisterAction);
      expect(element.users).toEqual([mockUser]);
    });
  });
  describe("When the method login is called", () => {
    test("Then it should return the mock user as an object in userLogged", () => {
      const mockRegisterAction: PayloadAction<UserStructure> = {
        type: "user/login",
        payload: mockUser,
      };
      const element = reducer(mockInitialState, mockRegisterAction);
      expect(element.userLogged).toBe(mockUser);
    });
  });
  describe("When the method loadUsers is called", () => {
    const mockPayload = [
      { id: "1", email: "juan", password: "red", friends: [], enemies: [] },
      { id: "2", email: "pipo", password: "asdf", friends: [], enemies: [] },
      { id: "3", email: "pepe", password: "blue", friends: [], enemies: [] },
    ];
    const mockState: State = {
      userLogged: {} as UserStructure,
      users: [],
    };
    test("Then it should return the mock user as an object in userLogged", () => {
      const mockLoadUsersAction: PayloadAction<UserStructure[]> = {
        type: "user/loadUsers",
        payload: mockPayload,
      };
      const element = reducer(mockState, mockLoadUsersAction);
      expect(element.users).toEqual(mockPayload);
    });
  });
  describe("When the method updateRelations is called", () => {
    const mockState: State = {
      userLogged: {} as UserStructure,
      users: mockUsers,
    };
    const mockUpdateUser = {
      id: "1",
      email: "pierre",
      password: "red",
      friends: [],
      enemies: [],
    };

    test("Then it should update the first mock user as an return all changed", () => {
      const mockUpdateAction: PayloadAction<UserStructure> = {
        type: "user/updateRelations",
        payload: mockUpdateUser,
      };
      const element = reducer(mockState, mockUpdateAction);
      expect(element.users).toEqual([
        { id: "1", email: "pierre", password: "red", friends: [], enemies: [] },
        { id: "2", email: "pipo", password: "asdf", friends: [], enemies: [] },
      ]);
    });
  });
});
