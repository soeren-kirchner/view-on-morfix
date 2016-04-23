// Set up Event Listener
chrome.runtime.onInstalled.addListener(onInstallHandler);
chrome.contextMenus.onClicked.addListener(onClickContextMenuHandler);
chrome.browserAction.onClicked.addListener(onClickBrowserActionHandler);

// Set up context menu on installation of the extension
function onInstallHandler() {
	var context = "selection";
	var title = "ViewOnMorfix";
	var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": "context" + context});  
};

// executed on click on context menu entry
function onClickContextMenuHandler(info, tab) {
  	var selectedText = info.selectionText.trim();
  	if(selectedText.length>1) {
  		var url = "http://www.morfix.co.il/"+selectedText+"/";
  		window.open(url, '_blank');
	}
};

// Injection and execution of popup.js which contains same functionality as onClickContextMenuHandler
function onClickBrowserActionHandler(tab) {
	chrome.tabs.executeScript(null, {file: "popup.js"});
}