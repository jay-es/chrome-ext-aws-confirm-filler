// @ts-check

const menuId = chrome.contextMenus.create({
  id: "awsConfirmFiller",
  title: "fill with placeholder",
  contexts: ["editable"],
  documentUrlPatterns: ["https://*.console.aws.amazon.com/*"],
  // Unchecked runtime.lastError: Extensions using event pages or Service Workers cannot pass an onclick parameter to chrome.contextMenus.create. Instead, use the chrome.contextMenus.onClicked event.
  // onclick(info, tab) {
  //   chrome.tabs.sendMessage(tab.id ?? 0, "awsConfirmFiller");
  // },
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === menuId) {
    chrome.tabs.sendMessage(tab?.id ?? 0, "awsConfirmFiller");
  }
});
