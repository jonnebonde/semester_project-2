import { formatTimeAndData } from "../../../utils/tools.js";

export function renderListingBidsTable(data) {

  const listingTableLoader = document.querySelector(".listing-bid-history-container .loader");
  listingTableLoader.classList.add("d-none");

  const listingBidTableContainer = document.querySelector(".listing-bid-table-container");

  listingBidTableContainer.innerHTML = "";

  const listingBidTable = document.createElement("table");
  listingBidTable.classList.add("table", "table-sm", "table-bordered","w-75", "mx-auto");

  const listingBidTableHead = document.createElement("thead");
  listingBidTableHead.classList.add("table");

  const listingBidTableHeadRow = document.createElement("tr");

  const listingBidTableHeadRowHeader1 = document.createElement("th");
  listingBidTableHeadRowHeader1.setAttribute("scope", "col");
  listingBidTableHeadRowHeader1.textContent = "Bidder";

  const listingBidTableHeadRowHeader2 = document.createElement("th");
  listingBidTableHeadRowHeader2.setAttribute("scope", "col");
  listingBidTableHeadRowHeader2.textContent = "Bid";

  const listingBidTableHeadRowHeader3 = document.createElement("th");
  listingBidTableHeadRowHeader3.setAttribute("scope", "col");
  listingBidTableHeadRowHeader3.textContent = "Date";

  listingBidTableHeadRow.appendChild(listingBidTableHeadRowHeader1);
  listingBidTableHeadRow.appendChild(listingBidTableHeadRowHeader2);
  listingBidTableHeadRow.appendChild(listingBidTableHeadRowHeader3);

  listingBidTableHead.appendChild(listingBidTableHeadRow);

  const listingBidTableBody = document.createElement("tbody");

  data.bids.forEach((bid) => {
    const listingBidTableBodyRow = document.createElement("tr");

    const listingBidTableBodyRowData1 = document.createElement("td");
    listingBidTableBodyRowData1.textContent = bid.bidderName;

    const listingBidTableBodyRowData2 = document.createElement("td");
    listingBidTableBodyRowData2.textContent = bid.amount;

    const listingBidTableBodyRowData3 = document.createElement("td");
    listingBidTableBodyRowData3.textContent = formatTimeAndData(bid.created);

    listingBidTableBodyRow.appendChild(listingBidTableBodyRowData1);
    listingBidTableBodyRow.appendChild(listingBidTableBodyRowData2);
    listingBidTableBodyRow.appendChild(listingBidTableBodyRowData3);

    listingBidTableBody.appendChild(listingBidTableBodyRow);
  });

  listingBidTable.appendChild(listingBidTableHead);
  listingBidTable.appendChild(listingBidTableBody);

  listingBidTableContainer.appendChild(listingBidTable);
}
