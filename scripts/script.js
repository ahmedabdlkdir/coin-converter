
function calculateChange() {
    /*
    a function that takes an id parameter and uses it 
    to get element 
    */
    const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
    };

    //declare variables
    let displayAmount = getElement("amount");
    let displayQuaters = getElement("quaters");
    let displayDimes = getElement("dimes");
    let displayNickles = getElement("nickels");
    let displayDPennies = getElement("pennies");
    let btncalculate = getElement('btncalculate');

    /*this function converts dollar amount to change
    and display result in the respective input fields
    */
    function convertChange() {
        displayQuaters.value = displayAmount.value / .25;
        displayDimes.value = displayAmount.value * 10;
        displayNickles.value = displayAmount.value / 0.05;
        displayDPennies.value = displayAmount.value / 0.01; 
    }

    //checks if button is clicked then call convert
    btncalucate.addEventListener('click', convertChange);
}

calculateChange();


