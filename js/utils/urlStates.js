import { getListings } from "../utils/api/apiListings.js";

export function getCurrentUrl() {
  const urlParams = new URLSearchParams(window.location.search);

  let limitUrl = urlParams.get("limit");
  let offsetUrl = urlParams.get("offset");
  let sortUrl = urlParams.get("sort");
  let sortOrderUrl = urlParams.get("sortOrder");

  return { limitUrl, offsetUrl, sortUrl, sortOrderUrl };
}

export function setNewUrl(limit, offset, sort, sortOrder) {
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set("sort", sort);
  urlParams.set("sortOrder", sortOrder);
  urlParams.set("limit", limit);
  urlParams.set("offset", offset);

  window.history.replaceState({}, "", `${window.location.pathname}?${urlParams}`);

  console.log(limit, offset, sort, sortOrder);

  
}