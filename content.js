console.log("Extension activate");
let paragraphs = document.getElementsByTagName('p');


//console.log(url);
const url1 = chrome.extension.getURL('Dotsies.ttf');
console.log(url1);
var junction_font = new FontFace('JunctionRegular','url(chrome-extension://jnohippkdnjbmndieeboeiknopapiifh/Dotsies.ttf)');
for(ele of paragraphs){

ele.innerHTML = "Say What";

junction_font.load().then(function(loaded_face) {
document.fonts.add(loaded_face);
console.log('Fuck it');
ele.innerHTML="My name is slim shady";
//document.querySelector("#demo").innerHTML = "My name is slime shady";
//document.querySelector("#demo").style.fontFamily = '"Junction Regular", Tahoma';
ele.style.fontFamily = 'JunctionRegular';


}).catch(function(error) {
    alert(error);
  });
}





// chrome.runtime.onMessage.addListener(gotFont);
//
// function gotFont(message,sender,response){
//
// 	//var dotsies = FontFace(message);
// 	dotsies.load().then(function(loaded_face) {
// 		document.fonts.add(loaded_face);
// 	  	document.body.style.fontFamily = '"Dotsies", Arial';
//
//
//
// 	}).catch(function(error) {
// 		// error occurred
// 	});
//
// }
