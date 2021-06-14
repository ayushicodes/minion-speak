var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);

}

function clickHandler() {
    var txtarea = document.querySelector("#txt-input");
    var outputDiv = document.querySelector("#output");

    var inputText = txtarea.value

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            console.log('json', json);
            var translatedText = json.contents.translated;
            outputDiv.innerHTML = translatedText
        })
        .catch(errorHandler)
}

window.onload = function () {
    var btntranslate = document.querySelector("#btn-translate");

    if (btntranslate) {
        btntranslate.addEventListener("click", clickHandler);
    }

}
