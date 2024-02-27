// import React, { useEffect, useState } from "react";
// import Keycloak, { KeycloakConfig } from "keycloak-js";

// interface Props extends KeycloakConfig {
//   url: string | undefined;
//   realm: string;
//   clientID: string;
// }

// export const useAuth = () => {
//   const [isLogin, setLogin] = useState(false);

//   useEffect(() => {
//     const client = new Keycloak<Props>({
//       url: "http://127.0.0.1:4000/",
//       realm: "myrealm",
//       clientID: "myclient",
//     });
//   }, []);

//   return isLogin;
// };
