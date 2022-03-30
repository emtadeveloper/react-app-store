import { JsxElement } from "typescript";

export interface ILayout {
    children: JsxElement;
    footer: { news: { title: string; description: string; send: string; email: string }; description: string; number: string; email: string; copy: string; map: string };
}
