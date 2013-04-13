chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.method == "getLocalStorageKey") {
		// Return a specific key
		sendResponse({data: localStorage[request.key]});
	} else if (request.method == "getLocalStorage") {
		// Return the whole localStorage object
		sendResponse({data: localStorage});
	} else {
		// Invalid request
		sendResponse({});
	}
});

chrome.browserAction.onClicked.addListener(function(tab) {
	// Check if currently enabled or disabled
	var is_enabled = localStorage["enabled"] == "true";

	// Toggle enabled / disabled
	localStorage["enabled"] = !is_enabled;

	if(is_enabled) {
		// It's enabled, disable it
		chrome.browserAction.setIcon({path:"icon_disabled.png"});
		
	} else {
		// It's disabled
		chrome.browserAction.setIcon({path:"icon.png"});
	}
})