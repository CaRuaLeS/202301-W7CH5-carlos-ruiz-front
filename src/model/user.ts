export type UserStructure = {
  id: string;
  email: string;
  password: string;
  token?: string;
  friends: Partial<UserStructure[]>;
  enemies: Partial<UserStructure[]>;
};

export type ServerType = {
  results: UserStructure[];
};

export class User implements UserStructure {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public friends: UserStructure[],
    public enemies: UserStructure[]
  ) {}
}
