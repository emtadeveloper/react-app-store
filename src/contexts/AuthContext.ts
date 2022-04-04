import React from "react";

import { AuthType } from "./../types";

export const AuthContext = React.createContext<AuthType["Token"]>(null);
