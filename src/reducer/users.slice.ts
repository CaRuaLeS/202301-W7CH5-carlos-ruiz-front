import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";

// register -> nada en el estado
// logged -> userLogged{ token, ..., ...}
// Lista de usuario

type State = {
  // No hace falta un boolean paara comprobar si está logged, con el null sabemos que no está logged
  userLogged: {
    token: string;
    user: UserStructure;
    // Can add role: string
  } | null;
  users: UserStructure[];
};

const initialState: State = {
  userLogged: null,
  users: [],
};
export type LoginData = {
  token: string;
  user: UserStructure;
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<UserStructure>) {
      state.users = [...state.users, action.payload];
    },
    login(state, action: PayloadAction<LoginData>) {
      state.userLogged = {
        token: action.payload.token,
        user: action.payload.user,
      };
    },

    loadUsers(state, action: PayloadAction<UserStructure>) {
      state.users = [...state.users, action.payload];
    },
    updateRelations(state, action: PayloadAction<UserStructure>) {
      state.users = state.users.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
  },
  extraReducers(builder) {
    // builder.addCase(asyncLoadUsers.pending, (state) => {
    //   state.loadingUsersStatus = "loading";
    // });
    // builder.addCase(asyncLoadUsers.fulfilled, (state, action) => {
    //   state.users = action.payload;
    //   state.loadingUsersStatus = "idle";
    // });
    // builder.addCase(asyncLoadUsers.rejected, (state) => {
    //   state.userLoginStatus = "error";
    // });
    // builder.addCase(asyncLogin.pending, (state) => {
    //   state.userLoginStatus = "loading";
    // });
    // builder.addCase(asyncLogin.fulfilled, (state, action) => {
    //   state.userLogged = {
    //     token: action.payload.token,
    //     user: action.payload.user,
    //   };
    // });
    // builder.addCase(asyncLogin.rejected, (state) => {
    //   state.userLoginStatus = "error";
    // });
  },
});

export const { register, login, loadUsers, updateRelations } = slice.actions;
export default slice.reducer;
