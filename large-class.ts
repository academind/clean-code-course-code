class OnlineShop {
  private orders: any;
  private offeredProducts: any;
  private customers: any;

  public addProduct(title: string, price: number) {}

  public updateProduct(productId: string, title: string, price: number) {}

  public removeProduct(productId: string) {}

  public getAvailableItems(productId: string) {}

  public restockProduct(productId: string) {}

  public createCustomer(email: string, password: string) {}

  public loginCustomer(email: string, password: string) {}

  public makePurchase(customerId: string, productId: string) {}

  public addOrder(customerId: string, productId: string, quantity: number) {}

  public refund(orderId: string) {}

  public updateCustomerProfile(customerId: string, name: string) {}

  // ...
}
