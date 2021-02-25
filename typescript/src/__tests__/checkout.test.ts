import Checkout from "../checkout";
import {ICheckout} from '../types';

describe('blank checkout', () => {
    it('should return total 0 ', () => {
        const checkout: ICheckout = new Checkout();
        expect(checkout.total()).toEqual(0);
    });
});