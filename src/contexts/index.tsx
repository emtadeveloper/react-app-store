// react

import React from "react";

// theme and lang

import Theme from "../themes/theme";
import Lang from "../lang/lang";

// types

import { IContext } from "./types";

export const Context = React.createContext<IContext>({ theme: Theme, lang: Lang, themeChange: () => {}, langChange: () => {} });
