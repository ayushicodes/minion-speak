var btntranslate = document.querySelector("#btn-translate");
var txtarea = document.querySelector("#txt-input");
console.log(txtarea);
function clickHandler() {
    console.log("clicked");
    console.log("input", txtarea.value);
}
btntranslate.addEventListener("click", clickHandler);