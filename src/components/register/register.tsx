import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { UserStructure } from "../../model/user";
import { UsersRepo } from "../../services/user.api.repo";

export default function Register() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { registerUser } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formUser = event.currentTarget;

    const userRegister: Partial<UserStructure> = {
      email: (formUser[0] as HTMLFormElement).value,
      password: (formUser[1] as HTMLFormElement).value,
    };

    registerUser(userRegister);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
