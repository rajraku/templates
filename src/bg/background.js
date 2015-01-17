// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);  	
    sendResponse();
  });


// chrome.tabs.onActivated.addListener(
// 	function(activeInfo) { 
// 		chrome.pageAction.show(activeInfo.tabId);
// });

chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		if(changeInfo.status == "loading" && tab.url && tab.url.indexOf('exg5.exghost.com') >=0) {
			chrome.pageAction.show(tabId);
	}
});