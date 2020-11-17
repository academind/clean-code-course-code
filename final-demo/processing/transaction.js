const { isOpen, isPayment, isRefund } = require('../util/validators');
const getTransactionProcessors = require('./transaction-processors');

function validateTransaction(transaction) {
  if (!isOpen(transaction)) {
    const error = new Error('Invalid transaction type.');
    throw error;
  }

  if (!isPayment(transaction) && !isRefund(transaction)) {
    const error = new Error('Invalid transaction type!');
    error.item = transaction;
    throw error;
  }
}

function processWithProcessor(transaction) {
  const processors = getTransactionProcessors(transaction);

  if (isPayment(transaction)) {
    processors.processPayment(transaction);
  } else {
    processors.processRefund(transaction);
  }
}

exports.validateTransaction = validateTransaction;
exports.processWithProcessor = processWithProcessor;
