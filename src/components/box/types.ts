export interface IBoxs {
    box: Array<{ id: number; title: string; description: string }>;
    box_image: Array<{ id: number; image: string; alt: string }>;
}

export interface IModeBox {
    id: number;
    title: string;
    description: string;
}
