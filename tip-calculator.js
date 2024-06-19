function calculateTip() {
  let bill;
  let percent = 0.20;
  let tip;

  bill = prompt("What is your bill?");
  billNumber = Number(bill);
  tip = billNumber * percent;

  billParagraph.innerHTML = `Your bill is ${bill}`
  tipParagraph.innerHTML = `Your tip should be: ${tip}`;
}

tipButton.onclick = calculateTip;