import { createReducer } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";
import * as ac from "./users.actions.creator";

export type userState = {
  users: UserStructure[];
  user: UserStructure;
};
const initialState: userState = {
  users: [],
  user: {} as UserStructure,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.readCreator, (state, { payload }) => ({
    ...state,
    users: payload,
  }));
  builder.addCase(ac.readOneCreator, (state, { payload }) => ({
    ...state,
    user: payload,
  }));
  builder.addCase(ac.registerCreator, (state, { payload }) => ({
    ...state,
    users: [...state.users, payload],
  }));
  builder.addCase(ac.loginCreator, (state, { payload }) => ({
    ...state,
    user: payload,
  }));

  builder.addCase(ac.addFriendCreator, (state, { payload }) => ({
    ...state,
    users: state.users.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    ),
  }));
  builder.addCase(ac.removeFriendCreator, (state, { payload }) => ({
    ...state,
    users: state.users.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    ),
  }));
  builder.addCase(ac.addEnemyCreator, (state, { payload }) => ({
    ...state,
    users: state.users.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    ),
  }));
  builder.addCase(ac.removeEnemyCreator, (state, { payload }) => ({
    ...state,
    users: state.users.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    ),
  }));

  builder.addDefaultCase((state) => state);
});
