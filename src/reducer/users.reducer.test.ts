import { UserStructure } from "../model/user";
import { userReducer, userState } from "./users.reducer";
import * as ac from "./users.actions.creator";

const mockUsers = [
  { id: "1", email: "juan", password: "red", friends: [], enemies: [] },
  { id: "2", email: "pipo", password: "asdf", friends: [], enemies: [] },
];

const mockUserState = {
  users: [
    { id: "1", email: "juan", password: "red", friends: [], enemies: [] },
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
  describe("When we call the readCreator", () => {
    test("Then it should return the initial state", () => {
      const initialState = undefined;
      const payload = ac.readCreator(mockUsers);
      const element = userReducer(initialState, payload);
      expect(element).toEqual({
        user: {},
        users: [
          {
            id: "1",
            email: "juan",
            password: "red",
            friends: [],
            enemies: [],
          },
          {
            id: "2",
            email: "pipo",
            password: "asdf",
            friends: [],
            enemies: [],
          },
        ],
      });
    });
  });
  describe("When we call the readOneCreator", () => {
    test("Then it should return the initial state", () => {
      const initialState = undefined;
      const mockOne = {
        id: "1",
        email: "juan",
        password: "red",
        friends: [],
        enemies: [],
      };
      const payload = ac.readOneCreator(mockOne);
      const element = userReducer(initialState, payload);
      expect(element).toEqual({
        user: {
          id: "1",
          email: "juan",
          password: "red",
          friends: [],
          enemies: [],
        },
        users: [],
      });
    });
  });
  describe("When we call the registerCreator", () => {
    const mockOne = {
      id: "1",
      email: "juan",
      password: "red",
      friends: [],
      enemies: [],
    };
    test("Then it should return the same state state", () => {
      const initialState = undefined;
      const payload = ac.registerCreator(mockOne);
      const element = userReducer(initialState, payload);
      expect(element).toEqual({
        user: {},
        users: [
          {
            id: "1",
            email: "juan",
            password: "red",
            friends: [],
            enemies: [],
          },
        ],
      });
    });
  });
  describe("When we call the loginCreator", () => {
    const mockOne = {
      id: "1",
      email: "juan",
      password: "red",
      friends: [],
      enemies: [],
    };
    test("Then it should return the initial state", () => {
      const initialState = undefined;

      const payload = ac.loginCreator(mockOne);
      const element = userReducer(initialState, payload);
      expect(element).toEqual({
        user: {
          id: "1",
          email: "juan",
          password: "red",
          friends: [],
          enemies: [],
        },
        users: [],
      });
    });
  });
  describe("When we call the addFriend", () => {
    const mockOne = {
      id: "1",
      email: "juan",
      password: "red",
      friends: [{ email: "asdf" }],
      enemies: [],
    } as unknown as UserStructure;
    test("Then it should return the same state state", () => {
      const payload = ac.addFriendCreator(mockOne);
      const element = userReducer(mockUserState, payload);
      expect(element).toEqual({
        user: {},
        users: [
          {
            id: "1",
            email: "juan",
            password: "red",
            friends: [{ email: "asdf" }],
            enemies: [],
          },
          {
            id: "2",
            email: "pipo",
            password: "asdf",
            friends: [],
            enemies: [],
          },
        ],
      });
    });
  });
  describe("When we call the removeFriend", () => {
    const mockUserState = {
      users: [
        {
          id: "1",
          email: "juan",
          password: "red",
          friends: [{ email: "asdf" }],
          enemies: [],
        },
      ],
      user: {},
    } as unknown as userState;
    const mockUpdated = {
      id: "1",
      email: "juan",
      password: "red",
      friends: [],
      enemies: [],
    } as unknown as UserStructure;
    test("Then it should return the same state state", () => {
      const payload = ac.removeFriendCreator(mockUpdated);
      const element = userReducer(mockUserState, payload);
      expect(element).toEqual({
        user: {},
        users: [
          {
            id: "1",
            email: "juan",
            password: "red",
            friends: [],
            enemies: [],
          },
        ],
      });
    });
  });
  describe("When we call the addEnemy", () => {
    const mockUserState = {
      users: [
        {
          id: "1",
          email: "juan",
          password: "red",
          friends: [],
          enemies: [],
        },
      ],
      user: {},
    } as unknown as userState;
    const mockUpdated = {
      id: "1",
      email: "juan",
      password: "red",
      friends: [],
      enemies: [{ email: "asdf" }],
    } as unknown as UserStructure;
    test("Then it should return the same state state", () => {
      const payload = ac.removeFriendCreator(mockUpdated);
      const element = userReducer(mockUserState, payload);
      expect(element).toEqual({
        user: {},
        users: [
          {
            id: "1",
            email: "juan",
            password: "red",
            friends: [],
            enemies: [{ email: "asdf" }],
          },
        ],
      });
    });
  });
  describe("When we call the removeEnemy", () => {
    const mockUserState = {
      users: [
        {
          id: "1",
          email: "juan",
          password: "red",
          friends: [],
          enemies: [{ email: "asdf" }],
        },
      ],
      user: {},
    } as unknown as userState;
    const mockUpdated = {
      id: "1",
      email: "juan",
      password: "red",
      friends: [],
      enemies: [],
    } as unknown as UserStructure;
    test("Then it should return the same state state", () => {
      const payload = ac.removeFriendCreator(mockUpdated);
      const element = userReducer(mockUserState, payload);
      expect(element).toEqual({
        user: {},
        users: [
          {
            id: "1",
            email: "juan",
            password: "red",
            friends: [],
            enemies: [],
          },
        ],
      });
    });
  });
});
