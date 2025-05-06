document.addEventListener("keydown", function (event) {
  if (
    (event.metaKey || event.ctrlKey) &&
    event.shiftKey &&
    event.key.toLowerCase() === "c"
  ) {
    event.preventDefault();
    navigator.clipboard.writeText(window.location.href);
  }
});
