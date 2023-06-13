###Caesar Cipher Encryption


This project is a Caesar Cipher encryption method made with JavaScript. It shifts the letters according to the input number and shows the new characters. If the character is not a latin letter, it's added to the result as it is. The result is an encrypted text, where all letters have been shifted by the given number.
To use it just type in a text, a number in the other box and click "encrypt". You will see the encrypted output under the button.

#####A short explaination of the JavaScript code:

The caesarCipher function takes in a text and a shift number according to the user input. It then goes through each input in the text. If the character is a letter, it shifts it by the input number and adds the new character to the result string. 

The verschluesseln function is used for taking user input from the text-boxes, using the caesarCipher function to encrypt the input text, and displaying the result on the page.


Interface made with HTML and styled with CSS. Styled for easy use.

