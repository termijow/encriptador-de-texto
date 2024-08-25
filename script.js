function elementSelector(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function elementSelectorById(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function encryptFunction() {
    const userText = textAreaInput()
    let newText = "";
    for (let i = 0; i < userText.length; i++) {
        if (userText[i] === 'a') {
            newText += 'ai';
        }   else if (userText[i] === 'e') {
            newText += 'enter';
        }  else if (userText[i] === 'i') {
            newText += 'imes'
        }  else if (userText[i] === 'o') {
            newText += 'ober'
        } else if (userText[i] === 'u') {
            newText += 'ufat'
        } else {
            newText += userText[i]; 
        }
    }
    elementSelector('h2', newText);
}

function desencryptFunction() {
    const userText = textAreaInput();
    let modifiedText = userText;

    modifiedText = modifiedText.replace(/ufat/g, 'u');
    modifiedText = modifiedText.replace(/ober/g, 'o');
    modifiedText = modifiedText.replace(/imes/g, 'i');
    modifiedText = modifiedText.replace(/enter/g, 'e');
    modifiedText = modifiedText.replace(/ai/g, 'a');

    console.log(modifiedText);
    elementSelector('h2', modifiedText);
}

function textAreaInput() {
    let textareaElement = document.getElementById('encryptorTextarea');
    let userText = textareaElement.value;
    return userText;
}
