console.log("pr-start.js");

// Event Listener
safari.self.addEventListener('message', handleMessage, false);
//document.addEventListener("selectionchange", handleSelectionChange, false);


/*
if (document.body) {
    document.body.addEventListener("click", function() {
        rightclicked_item = null;
        console.log("click");
    });
}
*/

function handleMessage(msg) {
    if (msg.name === 'getSelection') {
        var sel = window.getSelection()+'';
        safari.self.tab.dispatchMessage('theSelection', sel);
    }
}

/*
function handleSelectionChange(event) {
	console.log("text change");
}
*/

