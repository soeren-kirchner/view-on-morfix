var selectedText = window.getSelection().toString().trim();
if(selectedText.length>1) {
	var url = "http://www.morfix.co.il/"+selectedText+"/";
  	window.open(url, '_blank');
}