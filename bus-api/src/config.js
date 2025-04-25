import dotenv from "dotenv";
import * as bus from "bus-promise";

dotenv.config();

// Variável que será atualizada após autenticação
let auth = null;

// Inicia o processo de autenticação
bus.auth(process.env.SPTRANS_API).then((busAuth) => {
  auth = busAuth;
});

export function authenticate() {
  return bus.auth(process.env.SPTRANS_API).then((busAuth) => {
    auth = busAuth;
    return auth;
  });
}

// Exportamos o módulo bus e a variável auth diretamente
export { bus, auth };
