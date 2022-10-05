let sortAsc = true;
let transactions = [];

window.addEventListener("load", async () => {
  const dataProxy = new TransactionProxy();
  transactions = await dataProxy.getTransactions();

  console.log(transactions);

  const table = transactionTable(transactions);
  renderTable(table);

  const filter = filterSection(transactions);
  renderFilterSection(filter);
});
