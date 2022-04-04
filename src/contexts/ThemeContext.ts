import React from "react";

import { ModeType } from "./types";

export const ThemeContext = React.createContext<ModeType["theme"]>("light");
