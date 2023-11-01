import { formatTimeAndData } from "../../../utils/tools.js";

// used chatgpt to generate const names and setup of table.

export function renderListingBidsTable(data) {
  const listingTableLoader = document.querySelector(".listing-bid-history-container .loader");
  listingTableLoader.classList.add("d-none");

  const listingBidTableContainer = document.querySelector(".listing-bid-table-container");
  listingBidTableContainer.innerHTML = "";

  const listingBidTable = document.createElement("table");
  listingBidTable.classList.add("table", "table-sm", "table-bordered", "mx-auto");

  const listingBidTableHead = document.createElement("thead");
  listingBidTableHead.classList.add("table");

  const listingBidTableHeadRow = document.createElement("tr");

  const listingBidTableHeadRowHeader2 = document.createElement("th");
  listingBidTableHeadRowHeader2.setAttribute("scope", "col");
  listingBidTableHeadRowHeader2.textContent = "Bidder";

  const listingBidTableHeadRowHeader3 = document.createElement("th");
  listingBidTableHeadRowHeader3.setAttribute("scope", "col");
  listingBidTableHeadRowHeader3.textContent = "Amount";

  const listingBidTableHeadRowHeader4 = document.createElement("th");
  listingBidTableHeadRowHeader4.setAttribute("scope", "col");
  listingBidTableHeadRowHeader4.textContent = "Date";

  listingBidTableHeadRow.appendChild(listingBidTableHeadRowHeader2);
  listingBidTableHeadRow.appendChild(listingBidTableHeadRowHeader3);
  listingBidTableHeadRow.appendChild(listingBidTableHeadRowHeader4);

  listingBidTableHead.appendChild(listingBidTableHeadRow);

  const listingBidTableBody = document.createElement("tbody");

  data.bids.sort((a, b) => b.amount - a.amount); // sort bids in descending order based on amount

  data.bids.forEach((bid) => {
    const listingBidTableBodyRow = document.createElement("tr");

    const listingBidTableBodyRowData2 = document.createElement("td");
    listingBidTableBodyRowData2.textContent = bid.bidderName;

    const listingBidTableBodyRowData3 = document.createElement("td");
    listingBidTableBodyRowData3.textContent = bid.amount;

    const listingBidTableBodyRowData4 = document.createElement("td", );
    listingBidTableBodyRowData4.textContent = formatTimeAndData(bid.created);
    listingBidTableBodyRowData4.style.fontSize = "0.8rem";

    listingBidTableBodyRow.appendChild(listingBidTableBodyRowData2);
    listingBidTableBodyRow.appendChild(listingBidTableBodyRowData3);
    listingBidTableBodyRow.appendChild(listingBidTableBodyRowData4);

    listingBidTableBody.appendChild(listingBidTableBodyRow);
  });

  listingBidTable.appendChild(listingBidTableHead);
  listingBidTable.appendChild(listingBidTableBody);

  listingBidTableContainer.appendChild(listingBidTable);
}
