let firstnumber=""
let secondnumber=""
let operator="";

function appendnumber(num){
    if(operator===""){
        firstnumber+=num;
        document.getElementById("result").value=firstnumber;
    }
    else{
        secondnumber+=num;
        document.getElementById("result").value=firstnumber+""+operator+""+ secondnumber;
    }
}
function setoperator(op){
    operator=op;
    document.getElementById("result").value=firstnumber+""+operator+""+secondnumber;


}

function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseFloat(firstnumber)+parseFloat(secondnumber);
            break;
        case '-':
            result=parseFloat(firstnumber)-parseFloat(secondnumber);
               break;     
        case '*':
            result=parseFloat(firstnumber)*parseFloat(secondnumber);
              break;              
        case '/':
            result=parseFloat(firstnumber)/parseFloat(secondnumber); 
            break;
        case '%':
            result=parseFloat(firstnumber)%parseFloat(secondnumber); 
            break;               
    }

    document.getElementById("result").value=result;
}
function clearresult(){
firstnumber="";
secondnumber="";
operator="";
document.getElementById("result").value="";
}
function fraction() {
    if (operator === "") {
        // If no operator is set, update the first number as a fraction
        if (!firstnumber.includes('.')) {
            firstnumber += '.';  // Add a decimal point if not already present
        }
        document.getElementById("result").value = firstnumber;
    } else {
        // If an operator is set, update the second number as a fraction
        if (!secondnumber.includes('.')) {
            secondnumber += '.';  // Add a decimal point if not already present
        }
        document.getElementById("result").value = firstnumber + operator + secondnumber;
    }
}

function clearnumber() {
    if (secondnumber !== "") {
        secondnumber = secondnumber.slice(0, -1);
        document.getElementById("result").value = firstnumber + operator + secondnumber;
    } else if (operator !== "") {
        operator = "";
        document.getElementById("result").value = firstnumber;
    } else if (firstnumber !== "") {
        firstnumber = firstnumber.slice(0, -1);
        document.getElementById("result").value = firstnumber;
    }
}




