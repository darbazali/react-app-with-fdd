import { apiAgent } from "@adapters/apiAgent";

interface LoginParams {
  username: string;
  password: string;
}

interface IAuthService {
  readonly login: (user: LoginParams) => Promise<void>;
  readonly logout: () => Promise<void>;
}

export class AuthService implements IAuthService {
  async login(user: LoginParams): Promise<void> {
    await apiAgent.post<LoginParams, { data: LoginParams }>("/login", {
      data: user,
    });
  }

  async logout(): Promise<void> {
    await apiAgent.post("/logout", { data: {} });
  }
}
