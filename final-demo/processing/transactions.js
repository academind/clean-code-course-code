const { isEmpty } = require('../util/validators');

function validateTransactions(transactions) {
  if (isEmpty(transactions)) {
    const error = new Error('No transactions provided!');
    error.code = 1;
    throw error;
  }
}

exports.validateTransactions = validateTransactions;
