chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){

  var dotsies = new FontFace('Dotsies', 'url(Dotsies.ttf)');

  chrome.tabs.sendMessage(tab.id,dotsies);

  console.log("Loaded");


}
