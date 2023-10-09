export function findHighestBid(bids) {
  let highestBid = 0;
  bids.forEach(function (bid) {
    if (bid.amount > highestBid) {
      highestBid = bid.amount;
    }
  });

  return highestBid;
}

export function timeDifference(timeUntilEnds) {
  let timeDifference = new Date(timeUntilEnds) - new Date();

  function convertTimeToDays(timeDifference) {
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return "Ends in " + days + " days and " + hours + " hours";
  }

  return convertTimeToDays(timeDifference);
}
