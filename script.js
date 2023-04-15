function calculator () {
    //get the first value  (because the first value will be used again make it a variable)

    let firstValue=document.getElementById("firstValue").value //without".value" it will return the whole element
    

    //get the second value
    let secondValue=document.getElementById("secondValue").value
    
    //get the value of which dropdown option was selected
    let dropdown=document.getElementById("dropdown").value

    let result=null

    //if plus was selected add first and second value //how to write multiple if statements in javascript use if else or switch statement
    //otherwise if subtraction was selected subtract first and second value
    //otherwise if multiplication was selected multiply first and second value
    //otherwise if division was selected divide first and second value 
    switch(dropdown) {
        case "addition":
            result=Number(firstValue) + Number(secondValue)
            break;
        case "subtraction":
            result=firstValue - secondValue
            break;
        case "multiplication":
            result=firstValue * secondValue
            break;
        case "division": //case must be the exact same as value
        result=firstValue / secondValue
            break;
        default:  //leave /null if none are true  -it will return ex:null, blank space 

    }
    //then display the result
    answer.innerHTML=result 


}
