function calculateLoan() {
  let loanAmountValue = document.getElementById("loanAmount").value;
  let interestRateValue = document.getElementById("interestRate").value;
  let monthsToPayValue = document.getElementById("monthsToPay").value;
  let paymentText = document.getElementById("payment");
  let interestRate =
    (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

  let monthlyPaymentValue = (
    loanAmountValue / monthsToPayValue +
    interestRate
  ).toFixed(2);
  paymentText.innerHTML = `Monthly Payment: ${monthlyPaymentValue}`;
}

calculateLoan();
