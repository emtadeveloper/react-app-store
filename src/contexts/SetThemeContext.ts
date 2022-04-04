import React from "react";

import { SetModeType } from "./types";

export const SetThemeContext = React.createContext<SetModeType["theme"]>((theme: string) => {});
