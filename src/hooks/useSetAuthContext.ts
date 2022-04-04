import React from "react";
import { SetAuthContext } from "../contexts/SetAuthContext";

const useSetAuthContext = () => React.useContext(SetAuthContext);

export default useSetAuthContext;
