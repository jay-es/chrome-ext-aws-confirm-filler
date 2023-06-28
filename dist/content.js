// @ts-check

console.log("message");

chrome.runtime.onMessage.addListener((message) => {
  if (message !== "awsConfirmFiller") return;

  const el = /** @type {HTMLInputElement | null} */ (document.activeElement);

  if (!el) {
    alert("no element");
    return;
  }
  if (!el.placeholder) {
    alert("no placeholder");
    return;
  }

  if (el.value && !confirm("has value. continue anyway?")) {
    return;
  }

  // https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js
  // Object.getOwnPropertyDescriptor(
  //   window.HTMLInputElement.prototype,
  //   "value"
  // )?.set?.call(el, el.placeholder);
  el.value = el.placeholder; // こっちでもOK？
  el.dispatchEvent(new Event("input", { bubbles: true }));
});
