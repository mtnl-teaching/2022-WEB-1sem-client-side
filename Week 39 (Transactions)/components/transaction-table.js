/**
 * Our component, needs to accept an Array,
 * And return the html table
 */
function transactionTable(transactions) {
  // Needs to create the table
  // Creating all the elements
  const table = document.createElement("table");

  const tr = document.createElement("tr");
  const thName = document.createElement("th");
  const thPrice = document.createElement("th");
  const thDate = dateTableHeader();

  // Adding header titles
  thName.textContent = "Name";
  thPrice.textContent = "Price";

  // Collect the pieces
  table.appendChild(tr);

  tr.appendChild(thName);
  tr.appendChild(thPrice);
  tr.appendChild(thDate);

  // And handle the looping
  const rows = transactions.map((transaction) => {
    return transactionRow(transaction);
  });

  table.append(...rows);

  return table;
}

// ------------- Bootstrap Icons -----------------
const sortDown = document.createElement("i");
sortDown.classList.add("bi", "bi-arrow-down");

const sortUp = document.createElement("i");
sortUp.classList.add("bi", "bi-arrow-up");
// -----------------------------------------------

function dateTableHeader() {
  const thDate = document.createElement("th");
  thDate.classList.add("clickable-header");
  thDate.addEventListener("click", switchSort);

  const div = document.createElement("div");
  div.classList.add("temp");
  div.textContent = "Transaction date";

  const iconSpan = document.createElement("span");
  iconSpan.id = "date-table-header-icon";
  div.appendChild(iconSpan);
  thDate.appendChild(div);
  return thDate;
}

// SORTING FUNCTION
function switchSort() {
  sortAsc = !sortAsc;
  const iconSpan = document.querySelector("#date-table-header-icon");
  if (sortAsc) {
    iconSpan.replaceChildren(sortDown);
    transactions.sort((a, b) => {
      // TODO: Correct sorting
      return 0;
    });
    // Use renderTable function
  } else {
    iconSpan.replaceChildren(sortUp);
    transactions.sort((a, b) => {
      // TODO: Correct sorting
      return 0;
    });
  }
}
