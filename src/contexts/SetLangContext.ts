import React from "react";

import { SetModeType } from "./types";

export const SetLangContext = React.createContext<SetModeType["lang"]>((lang: string) => {});
