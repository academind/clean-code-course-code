class OnlineShop {
  private orders: any;
  private offeredProducts: any;
  private customers: any;

  public addProduct(title: string, price: number) {} // offeredProducts

  public updateProduct(productId: string, title: string, price: number) {} // offeredProducts

  public removeProduct(productId: string) {} // offeredProducts

  public getAvailableItems(productId: string) {} // offeredProducts

  public restockProduct(productId: string) {} // offeredProducts

  public createCustomer(email: string, password: string) {} // customers

  public loginCustomer(email: string, password: string) {} // customers

  public makePurchase(customerId: string, productId: string) {} // customers, orders, offeredProducts

  public addOrder(customerId: string, productId: string, quantity: number) {} // customers, orders, offeredProducts

  public refund(orderId: string) {} // customers, orders

  public updateCustomerProfile(customerId: string, name: string) {} // customers

  // ...
}
