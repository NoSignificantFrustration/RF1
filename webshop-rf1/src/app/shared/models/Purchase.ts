export class Purchase{
  constructor(customerId: string, date: Date,productId:string) {
    this.productId = productId;
    this.customerId = customerId;
    this.date = date;
  }

    productId!:string;
    customerId!:string;
    date!:Date;

}
