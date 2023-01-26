// Get input from user
// ask the user for the first number
var num1 = parseFloat(prompt("Enter a number:"));
// ask the user for the operator
var operator = prompt("Enter an operator (+, -, *, /):");
// ask the user for the second number
var num2 = parseFloat(prompt("Enter another number:"));


//Function to calculate integer operations
function calaculate(num1, operator, num2) {
    switch(operator) {
        
        //calculate sum
        case "+" :
        sum = num1 + num2;
        result = sum;
        break;

        //calculate the subtraction
        case "-" :
            sub = num1 - num2;
            result = sub;
            break;

        //calculate the multiplication
         case "*" :
            multiplication = num1 * num2;
            result = multiplication;
            break;

        //calculate the division
         case "/" :
            division = num1 / num2;
            result = division;
            break ;
        
        //default case
         default:
            result = "NaN";
        }
        return result;
    }

alert(calaculate(num1, operator, num2));


