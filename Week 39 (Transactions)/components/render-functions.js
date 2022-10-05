function renderTable(table) {
  const container = document.querySelector(".transactions");
  container.replaceChildren(table);
}

function renderFilterSection(filter) {
  document.querySelector(".sidebar").replaceChildren(filter);
}
