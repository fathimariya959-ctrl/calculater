function appendToDisplay(value)
{
document.getElementById("result").value += value;
//value = 7; value += value; "7" + "7"; it will join together not adding (77)
}

function clearDisplay(){
    document.getElementById("result").value = "";
}

function deleteLast(){
    let currentValue = document.getElementById("result").
    value;
    document.getElementById("result").value = currentValue.slice(0, -1);
    //slice : "remove the last character from the string"
}

function calculate(){
    let expression = document.getElementById("result").value;
    try{
        document.getElementById("result").value = eval(expression);
        //eval : used to evaluate simple mathematical expression, like "5+3*2." 
    }
    catch(error){
        document.getElementById("result").value = "Error";
    }
}