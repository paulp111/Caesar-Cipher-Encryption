// Funktion nimmt txt und nr 
const caesarCipher = (text, nr) => {
// Leerer string speichert verschlüsseltes erg.
  let verStr = '';

// Schleife geht durch jeden Buchstaben
  for (let i = 0; i < text.length; i++) {
// Holt ascii-code von Buchstaben
    const letter = text[i];
    const letterCode = text.charCodeAt(i);
    let verCode;

    if (letterCode >= 97 && letterCode <= 122) { // gr
      verCode = (letterCode - 97 + nr) % 26 + 97;
    } else if (letterCode >= 65 && letterCode <= 90) { // kl
      verCode = (letterCode - 65 + nr) % 26 + 65;
    } else {
// Fügt auch andere Zeichen hinzu
      verStr += letter;
      continue;
    }
// ascii zu Buchstabe
    verStr += String.fromCharCode(verCode);
  }
// Returned das verschlüsselte erg.
  return verStr;
};

// Funktion um Text zu holen und verschlüsseln
function verschluesseln() {
  const inputText = document.getElementById('inputText').value;
  const inputVers = parseInt(document.getElementById('inputVers').value);
  const encryptText = caesarCipher(inputText, inputVers);
  document.getElementById('encryptText').innerText = encryptText;
}
