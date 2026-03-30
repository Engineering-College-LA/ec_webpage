export function truncateText(text, maxLength = 100) {
  if (typeof text !== "string") {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
}
