function getTransactionProcessors(transaction) {
  let processors = {
    processPayment: null,
    processRefund: null,
  };
  if (usesTransactionMethod(transaction, 'CREDIT_CARD')) {
    processors.processPayment = processCreditCardPayment;
    processors.processRefund = processCreditCardRefund;
  } else if (usesTransactionMethod(transaction, 'PAYPAL')) {
    processors.processPayment = processPayPalPayment;
    processors.processRefund = processPayPalRefund;
  } else if (usesTransactionMethod(transaction, 'PLAN')) {
    processors.processPayment = processPlanPayment;
    processors.processRefund = processPlanRefund;
  }
  return processors;
}

function usesTransactionMethod(transaction, method) {
  return transaction.method === method;
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

module.exports = getTransactionProcessors;
