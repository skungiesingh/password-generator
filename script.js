    // Assignment code here
    var length = Number(prompt("How many charactors would you like your password?"));

    while (length < 8 || length > 128) {
        length = prompt("How many charactors would you like the password?");
    }

    var uppercase = confirm("Would you like to use uppercase letters?");
    var lowercase = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use symbols?");

    while (!(uppercase || lowercase || numbers || symbols)) {
        alert("You must select at least one of the charactor types available!");
        uppercase = confirm("Would you like to use uppercase letters?");
        lowercase = confirm("Would you like to use lowercase letters?");
        numbers = confirm("Would you like to use numbers?");
        symbols = confirm("Would you like to use symbols?");
    }

    const resultEl = document.getElementById('password')

    document.getElementById('generate').addEventListener('click', () => {
        resultEl.value = generatePassword(uppercase, lowercase, numbers, symbols, length);
    });

    document.getElementById('password').addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        const password = resultEl.value;

        if (!password) {
            return;
        }

        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password copied to clipboard');
    });

    const randomFunc = {
        upper: getRandomUpper,
        lower: getRandomLower,
        number: getRandomNumber,
        symbols: getRandomSymbols,
    };

    function generatePassword(upper, lower, number, symbols, length) {
        let generatePassword = '';
        const typesCount = upper + lower + number + symbols;
        const typesArr = [{
            upper
        }, {
            lower
        }, {
            number
        }, {
            symbols
        }].filter(item => Object.values(item)[0]);

        for (let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                generatePassword += randomFunc[funcName]();
            })
        }
    
        const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    return rando("qwertyuiopasdfghjklzxcvbnm")
}

function getRandomUpper() {
    return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
}

function getRandomNumber() {
    return rando(9);
}

function getRandomSymbols() {
    return rando('!@#$%^&*(){}[]=<>/,.');
}

    // Get references to the #generate element
    var generateBtn = document.getElementById("#generate");

    // Write password to the #password input
    function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword)

    click();

