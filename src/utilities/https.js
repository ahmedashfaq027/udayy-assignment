// Adds Https to the url and returns
export function completeUrl(url) {
  const fullUrl = url.split(":");
  if (fullUrl.length === 1) {
    const searchQuery = url.split(".");

    if (searchQuery.length === 1) {
      const searchTerms = url.split(" ").join("+");
      return `https://www.bing.com/search?q=${searchTerms}`;
    } else {
      return "https://" + fullUrl[0];
    }
  } else if (fullUrl.length === 2) {
    const searchQuery = fullUrl[1].replace("//", "").split(".");

    if (searchQuery.length === 1) {
      const searchTerms = url.split(" ").join("+");
      return `https://www.bing.com/search?q=${searchTerms}`;
    } else {
      return "https://" + fullUrl[1].replace("//", "");
    }
  } else {
    return url;
  }
}
