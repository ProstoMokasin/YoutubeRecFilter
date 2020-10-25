console.log("waddup nice guys");

chrome.runtime.onMessage.addListener(MessageGot);

function MessageGot(msg, sender, sendResponse){
	console.log(msg.txt);
}