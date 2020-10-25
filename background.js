console.log("bruh");

chrome.browserAction.onClicked.addListener(PopUp);

function PopUp(tab){
	let msg = {
		txt: "hi nice guy, u cute af"
	} 
	chrome.tabs.sendMessage(tab.id, msg);
}

	
