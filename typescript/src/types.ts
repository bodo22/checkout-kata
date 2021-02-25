export interface ICheckout {
    scan(item: string): void;
    total(): number;
}