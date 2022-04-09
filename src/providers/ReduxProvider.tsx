// react

import { FC } from "react";

// redux

import { Provider } from "react-redux";
import store from "../redux/store";

const ReduxProvider: FC<React.ReactNode> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
