export type UserStructure = {
  id: string;
  email: string;
  password: string;
  friends: UserStructure[];
  enemies: UserStructure[];
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
