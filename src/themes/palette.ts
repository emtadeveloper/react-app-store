// types

import { pallete } from "./types";

const Theme: pallete = {
    //
    diection: !!localStorage.getItem("EN"),

    dark: {
        main: { primaryColor: "#2B3249", secoundryColor: "#FFFFFF", box: " #464d63" },

        text: { primary: "#FFFFFF", secoundry: "#707070", thirdy: "#FFFFFF" },

        fix: { green: "#4AC580 ", red: "#F86D70", white: "#FFFF", black: "#707070", blue: "#2B3249" },
    },

    light: {
        main: { primaryColor: "#FFFFFF", secoundryColor: "#2B3249", box: "#F7F2F9" },

        text: { primary: "#707070", secoundry: "#FFFF", thirdy: "#f1f1f1" },

        fix: { green: "#4AC580 ", red: "#F86D70", white: "#FFFF", black: "#707070", blue: "#2B3249" },
    },
};
export default Theme;
