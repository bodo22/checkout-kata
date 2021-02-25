import { ICheckout  } from './types'

export default class Checkout implements ICheckout {
    scan(item: string): void {
    }

    total(): number {
        return 0;
    }

}