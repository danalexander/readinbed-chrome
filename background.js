var storage = chrome.storage.local;

// Detect when settings are changed
chrome.storage.onChanged.addListener(function(changes, namespace) {
	for (key in changes) {
		var changedObject = changes[key];
		
		// Key name: 	key
		// Old value: 	changedObject.oldValue
		// New value: 	changedObject.newValue
		
		switch(key) {
			case "enabled":
				setEnabled(changedObject.newValue);
				break;
		}
	}
});

/*
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
*/

// Handle clicking of browser button
chrome.browserAction.onClicked.addListener(function(tab) {
	// Toggle enabled / disabled
	chrome.storage.local.get('enabled', function(data) {
		chrome.storage.local.set({enabled: !data.enabled}); 
	});
});

function setEnabled(is_enabled) {
	// Set the appropriate icon
	var icon_path = is_enabled ? "icon48.png" : "icon48_disabled.png";
	
	// Update the browser icon
	chrome.browserAction.setIcon({path: icon_path});
}






// Check if initialized
chrome.storage.local.get('initialized', function(data) {

	if(!data.initialized) {
		
		// Enable the plugin by default (on install)?
		var init_enabled = true;

		// Set defaults
		chrome.storage.local.set({
			initialized: 	true,
			enabled: 		init_enabled,
			angle: 			"270"
		});
	}
});