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
    let timeString = "";

    console.log(timeDifference, days, hours, minutes)

    // If the time difference is less than 1 minute, return "less than 1 minute" author: @mariusbjoroy/copilot
    switch (true) {
      case days >= 1:
        timeString = `${days} days, ${hours} hours`;
        break;
      case hours >= 1:
        timeString = `${hours} hours, ${minutes} minutes`;
        break;
      case timeDifference < 60000:
        timeString = "Ended";
        break;
      default:
        timeString = `${minutes} minutes`;
        break;
    }

    console.log(timeString);

    return timeString;
  }

  return convertTimeToDays(timeDifference);
}

export function formatTimeAndData(date) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  const formattedTimeAndDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return formattedTimeAndDate;
}

// filter profile bids on listings with help from chatGPT
export function filterProfileBiddings(profileBidsOnListings) {
  const filteredProfileBidsOnListings = [];

  profileBidsOnListings.forEach(function (listing) {
    const existingListing = filteredProfileBidsOnListings.find(function (filteredListing) {
      return filteredListing.listing.id === listing.listing.id;
    });

    if (existingListing) {
      if (existingListing.bid < listing.bid) {
        existingListing.bid = listing.bid;
      }
    } else {
      filteredProfileBidsOnListings.push(listing);
    }

    return filteredProfileBidsOnListings;
  });

  const filteredProfileBidsOnListingsNewList = filteredProfileBidsOnListings.map(function (listing) {
    const filteredListing = {
      bids: [{ amount: listing.amount }],
      id: listing.listing.id,
      title: listing.listing.title,
      description: listing.listing.description,
      media: listing.listing.media,
      tags: listing.listing.tags,
      created: listing.listing.created,
      updated: listing.listing.updated,
      endsAt: listing.listing.endsAt,
    };

    return filteredListing;
  });

  return filteredProfileBidsOnListingsNewList;
}

export function findProfileListingsWon(profileListingsBiddings, profileInfo) {
  return profileListingsBiddings.filter(function (listing) {
    return profileInfo.wins.includes(listing.id);
  });
}
