export type pallete = {
    diection: Boolean;
    dark: {
        main: { primaryColor: string; secoundryColor: string; box: string };
        text: { primary: string; secoundry: string; thirdy: string };
        fix: { green: string; red: string; white: string; black: string; blue: string };
    };
    light: {
        main: { primaryColor: string; secoundryColor: string; box: string };
        text: { primary: string; secoundry: string; thirdy: string };
        fix: { green: string; red: string; white: string; black: string; blue: string };
    };
};
