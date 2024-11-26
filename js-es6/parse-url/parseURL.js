function parseURL(urlString) {
  // Tu codigo acá
  return urlString
    .slice(1)
    .split('/')
}

const segmentsArray = parseURL(`/en-US/docs/Web/API/URL/pathname`);
console.log(segmentsArray) // ["en-US", "docs", "Web", "API", "URL", "pathname"]
