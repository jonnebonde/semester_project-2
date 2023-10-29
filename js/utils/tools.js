/**
 * Finds the highest bid amount from an array of bids.
 *
 * @param {Array} bids - An array of bid objects.
 * @returns {number} The highest bid amount.
 */
export function findHighestBid(bids) {
  let highestBid = 0;
  bids.forEach(function (bid) {
    if (bid.amount > highestBid) {
      highestBid = bid.amount;
    }
  });

  return highestBid;
}

/**
 * Calculates the time difference between the current time and a given end time.
 * @param {string} timeUntilEnds - The end time in string format.
 * @returns {string} - A string indicating the time difference in days and hours.
 */
export function timeDifference(timeUntilEnds) {
  let timeDifference = new Date(timeUntilEnds) - new Date();

  function convertTimeToDays(timeDifference) {
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    if (days >= 1) {
      return `${days} days, ${hours} hours`;
    } else if (hours >= 1) {
      return ` ${hours} hours, ${minutes} minutes`;
    } else {
      return ` ${minutes} minutes`;
    }
  }

  return convertTimeToDays(timeDifference);
}
