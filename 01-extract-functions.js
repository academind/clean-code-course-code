main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions) {
  if (isEmpty(transactions)) {
    showErrorMessage('No transactions provided!');
    return;
  }

  for (const transaction of transactions) {
    if (transactions.status !== 'OPEN') {
      console.log('Invalid transaction type!');
      continue;
    }
    if (transaction.type === 'PAYMENT') {
      if (transaction.method === 'CREDIT_CARD') {
        processCreditCardPayment(transaction);
      } else if (transaction.method === 'PAYPAL') {
        processPayPalPayment(transaction);
      } else if (transaction.method === 'PLAN') {
        processPlanPayment(transaction);
      }
      const TRANSACTION_TYPE = {
        PAYMENT: 'PAYMENT',
        REFUND: 'REFUND',
      };

      const TRANSACTION_STATUS = {
        OPEN: 'OPEN',
        HANDLED: 'HANDLED',
      };

      const PAYMENT_METHOD = {
        CREDIT_CARD: 'CREDIT_CARD',
        PAYPAL: 'PAYPAL',
        PLAN: 'PLAN',
      };

      // Start with a map object which contains all handler functions
      // handlers = {CREDIT_CARD: {PAYMENT: ..., REFUND: ...} ... }
      // Then move to this "OOP-like" approach
      class Transaction {
        constructor(transactionData) {
          this.status = transactionData.status;
          this.type = transactionData.type;
          this.method = transactionData.method;
          this.amount = transactionData.amount;
        }

        process() {
          if (this.status !== TRANSACTION_STATUS.OPEN) {
            throw new Error('Invalid transaction');
          }

          if (this.type === TRANSACTION_TYPE.PAYMENT) {
            this.handlePayment();
          } else {
            this.handleRefund();
          }
        }

        handlePayment() {
          throw new Error('Method not implemented.');
        }

        handleRefund() {
          throw new Error('Method not implemented.');
        }
      }

      class CreditCardTransaction extends Transaction {
        handlePayment() {
          console.log(
            'Processing credit card payment for amount: ' + this.amount
          );
        }

        handleRefund() {
          console.log(
            'Processing credit card refund for amount: ' + this.amount
          );
        }
      }

      class PayPalTransaction extends Transaction {
        handlePayment() {
          console.log('Processing PayPal payment for amount: ' + this.amount);
        }

        handleRefund() {
          console.log('Processing PayPal refund for amount: ' + this.amount);
        }
      }

      class PlanTransaction extends Transaction {
        handlePayment() {
          console.log('Processing plan payment for amount: ' + this.amount);
        }

        handleRefund() {
          console.log('Processing plan refund for amount: ' + this.amount);
        }
      }

      main();

      function main() {
        const transactions = [
          {
            id: 't1',
            type: 'PAYMENT',
            status: 'OPEN',
            method: 'CREDIT_CARD',
            amount: '23.99',
          },
          {
            id: 't2',
            type: 'PAYMENT',
            status: 'OPEN',
            method: 'PAYPAL',
            amount: '100.43',
          },
          {
            id: 't3',
            type: 'REFUND',
            status: 'OPEN',
            method: 'CREDIT_CARD',
            amount: '10.99',
          },
          {
            id: 't4',
            type: 'PAYMENT',
            status: 'CLOSED',
            method: 'PLAN',
            amount: '15.99',
          },
        ];

        try {
          processTransactions(transactions);
        } catch (error) {
          showErrorMessage(error.message);
        }
      }

      function processTransactions(transactions) {
        validateTransactions(transactions);

        for (const transaction of transactions) {
          const methodSpecificTransaction = createTransactionByMethod(
            transaction
          );
          processTransaction(methodSpecificTransaction);
        }
      }

      function validateTransactions(transactions) {
        if (isEmpty(transactions)) {
          // we could extract this into a throwError('No transactions provided!') function
          // But this would just re-phrase the task
          const error = new Error('No transactions provided!');
          throw error;
        }
      }

      function isEmpty(list) {
        return !list || list.length === 0; // we could save the null check (!list) if we would ensure that "null" is never returned
      }

      // We could discuss whether this function is actually helpful
      function processTransaction(transaction) {
        try {
          transaction.process();
        } catch (error) {
          log(error.message, transaction);
        }
      }

      // function log(message, item) {
      //   if (!item) {
      //     console.log(message);
      //   } else {
      //     console.log(message, item);
      //   }
      // }

      function log(message, item = {}) {
        // use a default parameter to save the extra check
        console.log(message, item);
      }

      function createTransactionByMethod(transaction) {
        let methodSpecificTransaction;

        const transactionData = {
          status: transaction.status,
          type: transaction.type,
          method: transaction.method,
          amount: transaction.amount,
        };

        if (usesCreditCard(transaction)) {
          methodSpecificTransaction = new CreditCardTransaction(
            transactionData
          );
        }

        if (usesPayPal(transaction)) {
          methodSpecificTransaction = new PayPalTransaction(transactionData);
        }

        if (usesPlan(transaction)) {
          methodSpecificTransaction = new PlanTransaction(transactionData);
        }

        return methodSpecificTransaction;
      }

      function usesCreditCard(transaction) {
        return transaction.method === PAYMENT_METHOD.CREDIT_CARD;
      }

      function usesPayPal(transaction) {
        return transaction.method === PAYMENT_METHOD.PAYPAL;
      }

      function usesPlan(transaction) {
        return transaction.method === PAYMENT_METHOD.PLAN;
      }

      function showErrorMessage(message) {
        console.log(message);
      }
    } else if (transaction.type === 'REFUND') {
      if (transaction.method === 'CREDIT_CARD') {
        processCreditCardRefund(transaction);
      } else if (transaction.method === 'PAYPAL') {
        processPayPalRefund(transaction);
      } else if (transaction.method === 'PLAN') {
        processPlanRefund(transaction);
      }
    } else {
      console.log('Invalid transaction type!', transaction);
    }
  }
}

function isEmpty(transactions) {
  return !transactions || transactions.length === 0;
}

function showErrorMessage(message) {
  console.log(message);
}

function processCreditCardPayment(transaction) {
  console.log(
    'Processing credit card payment for amount: ' + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    'Processing credit card refund for amount: ' + transaction.amount
  );
}

function processPayPalPayment(transaction) {
  console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}
