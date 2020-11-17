class Order {
  public refund() {}
}

class Customer {
  private orders: Order[];

  constructor(email: string, password: string) {}

  public login(email: string, password: string) {}

  public updateProfile(name: string) {}

  public makePurchase(productId: string) {}
}

class Product {
  constructor(title: string, price: number) {}

  public update(Id: string, title: string, price: number) {}

  public remove(Id: string) {}
}

class Inventory {
  private products: Product;

  public getAvailableItems(productId: string) {}

  public restockProduct(productId: string) {}
}
