export interface IModalCard {
    image: string;
    price: number;
    title: string;
    number: number;
    back: string;
    addCard: string;
    setModal: (value: boolean) => void;
}
