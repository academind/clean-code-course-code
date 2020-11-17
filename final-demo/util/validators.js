function isEmpty(transactions) {
  return !transactions || transactions.length === 0;
}

function isOpen(transaction) {
  return transaction.status === 'OPEN';
}

function isPayment(transaction) {
  return transaction.type === 'PAYMENT';
}

function isRefund(transaction) {
  return transaction.type === 'REFUND';
}

exports.isEmpty = isEmpty;
exports.isOpen = isOpen;
exports.isPayment = isPayment;
exports.isRefund = isRefund;
