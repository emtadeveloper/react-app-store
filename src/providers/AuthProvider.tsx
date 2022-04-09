// react

import React, { FC, useState } from "react";

// context

import { AuthContext } from "../contexts/AuthContext";
import { SetAuthContext } from "../contexts/SetAuthContext";

// types

import { AuthType } from "../types";

const AuthProvider: FC<React.ReactNode> = ({ children }) => {
    const token = !!localStorage.getItem("token") ? localStorage.getItem("token") : null;
    const [authTokens, setAuthTokens] = useState<AuthType["Token"]>(token);
    return (
        <AuthContext.Provider value={authTokens}>
            <SetAuthContext.Provider value={setAuthTokens}>{children}</SetAuthContext.Provider>
        </AuthContext.Provider>
    );
};
export default AuthProvider;
