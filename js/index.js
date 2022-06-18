function containSymbol(str) //bring all the symbol
{
    const symbol = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return symbol.test(str);
}

function isUpper(str) {          //calling regex
    return /[A-Z]/.test(str);
}

function num(str){              //calling regex
    return /[0-9]/.test(str);
}

function isLower(str){
    return /[a-z]/.test(str);
}

var str = prompt("please enter your passa");

if(str == ''){
    
console.log('Fill the password');
}

else if (str.length <= 8)
{
    console.log('password is too short');
}
else if(!containSymbol(str))
{
    console.log('password must have a special char');
}
else if(!isUpper(str)){
console.log('pass need a upper case letter');
}
else if(!num(str)){
console.log('pass must contain a numerical value');
}
else if(!isLower(str)){
   console.log('pass must contain a lower case');
    }

else 
{
    console.log("passa is strong");
}