import { AuthData } from "../contexts/Auth";

function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.toLowerCase() === "maria@velty.com.br" && password === "123") {
        resolve({
          token: "fake-token",
          email: email,
          name: "Pex",
        });
      } else {
        reject(new Error("Credenciais Inválidas!"));
      }
    }, 500);
  });
}

export const authService = { signIn };
