import { Product } from "./Product";

export class CartItem{
    constructor(product: Product){
        this.tool = product;
    }
    cardId: number = 1;
    tool: Product;
    quantity: number = 1;

    get price():number{
        return this.tool.price * this.quantity;
    }

}
