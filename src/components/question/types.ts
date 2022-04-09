import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IQuestion {
    fag: Array<{ title: string; description: string; icon: IconProp }>;
    tabs: Array<{ title: string; description: string }>;
}
