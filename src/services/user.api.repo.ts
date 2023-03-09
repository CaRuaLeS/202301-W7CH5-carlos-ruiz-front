import { ServerType, UserStructure } from "../model/user";
import { Repo } from "./user.api.repo.interface";

export class UsersRepo implements Repo<ServerType> {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/users";
  }

  async readAll(token: string): Promise<ServerType> {
    const resp = await fetch(this.url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);

    const data = (await resp.json()) as ServerType;
    return data;
  }

  async create(
    userInfo: Partial<UserStructure>,
    urlExtraPath: string
  ): Promise<ServerType> {
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
  ): Promise<ServerType> {
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
