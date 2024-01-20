export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type Token = { token: string };

export type LoginType = { username: string, password: string };

export type TokenPayload = {
  id: number,
  username: string,
};
