import { UserStructure } from "../model/user";
import { Repo } from "./user.api.repo.interface";

export class UserApi {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/users";
  }

  async loadUsers(token: string) {
    const response = await fetch(this.url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) throw new Error("Error http: ");
  }
}

export class UsersRepo implements Repo<UserStructure> {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/users";
  }

  async readAll(token: string): Promise<UserStructure> {
    const resp = await fetch(this.url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);

    const data = await resp.json();
    return data;
  }

  async create(
    userInfo: Partial<UserStructure>,
    urlExtraPath: string
  ): Promise<UserStructure> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async update(
    userInfo: Partial<UserStructure>,
    urlExtraPath: string,
    token: string
  ): Promise<UserStructure> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(userInfo),
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);
    const data = await resp.json();
    return data;
  }
}
