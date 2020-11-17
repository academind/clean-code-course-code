const dummyTransactions = require('./data/dummy-transactions');

const { showErrorMessage } = require('./util/error-handling');
const { validateTransactions } = require('./processing/transactions');
const { processWithProcessor, validateTransaction } = require('./processing/transaction');

main();

function main() {
  try {
    const transactions = dummyTransactions;
    processTransactions(transactions);
  } catch (error) {
    showErrorMessage(error.message);
  }
}

function processTransactions(transactions) {
  validateTransactions(transactions);

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function processTransaction(transaction) {
  try {
    validateTransaction(transaction);
    processWithProcessor(transaction);
  } catch (error) {
    showErrorMessage(error.message, error.item);
  }
}
