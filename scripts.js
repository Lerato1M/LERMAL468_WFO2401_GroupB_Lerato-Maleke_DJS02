const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  //Validation when values are missing
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }
  



  //Providing anything that is not a number should crash the program
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    console.error("Invalid input provided");
    return;
  }

  let parsedDividend = parseFloat(dividend);
  let parsedDivider = parseFloat(divider);







  // An invalid division should log an error in the console
  if (parsedDivider === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Invalid division by zero");
    return;
  }
  





  //Dividing numbers result in a decimal number
  const divisionResult = parsedDividend / parsedDivider;
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;

  } else {

    result.innerText = Math.floor(divisionResult);
    
  }
});
