import { createAction } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";
import { userActions } from "./users.actions";

export const readCreator = createAction<UserStructure[]>(userActions.readAll);
export const readOneCreator = createAction<UserStructure>(userActions.readOne);
export const registerCreator = createAction<UserStructure>(
  userActions.register
);
export const loginCreator = createAction<UserStructure>(userActions.login);

// Puede que los creator tengan que ser => ['id']
export const addFriendCreator = createAction<UserStructure>(
  userActions.addFriend
);
export const removeFriendCreator = createAction<UserStructure>(
  userActions.removeFriend
);
export const addEnemyCreator = createAction<UserStructure>(
  userActions.addEnemy
);
export const removeEnemyCreator = createAction<UserStructure>(
  userActions.removeEnemy
);
