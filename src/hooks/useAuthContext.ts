import React from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () => React.useContext(AuthContext);
