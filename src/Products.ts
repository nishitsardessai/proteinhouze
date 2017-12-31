export class products { 

    productID: number;
    productName: string;
    productType: string;
    brand: string;
    quantity: string;
    price: number;


    constructor(productID: number, productName: string, productType: string, brand: string, quantity: string, price: number) {
        this.productID = productID;
        this.productName= productName;
        this.productType = productType;
        this.brand = brand;
        this.quantity = quantity;
        this.price = price;
    }
}