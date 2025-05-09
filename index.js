let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const data = lowerAlphabet + upperAlphabet + numeric + symbols
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }    
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    setTimeout(() => {
    alert('Password has been generated!');
}, 600);
}



const savePassword = () => {
    const blob = new Blob([`my password is: ${password.value}`], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    saveButton.setAttribute('href', url);
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt');
    setTimeout(() => {
        alert('Password has been saved!');
    }, 600);
}