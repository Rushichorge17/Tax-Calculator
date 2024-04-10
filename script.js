// window.onload = function() {
//   document.getElementById('tax-form').reset();
//   document.getElementById('age-group').selectedIndex = -1; 
// }

// document.getElementById('tax-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const grossIncome = parseFloat(document.getElementById('gross-income').value);
//   const extraIncome = parseFloat(document.getElementById('extra-income').value);
//   const ageGroup = parseInt(document.getElementById('age-group').value);
//   const deductions = parseFloat(document.getElementById('deductions').value);

//   let taxRate = 0;
//   let totalIncome = grossIncome + extraIncome - deductions;

//   if (totalIncome <= 50000) {
//     taxRate = 0.1;
//   } else if (totalIncome <= 100000) {
//     taxRate = 0.2;
//   } else {
//     taxRate = 0.3;
//   }

//   const tax = totalIncome * taxRate;
//   const overallIncome = totalIncome - tax;

//   const modal = document.getElementById("myModal");
//   const overallIncomeText = document.getElementById("overall-income");
//   overallIncomeText.innerHTML = `Your overall income will be <br> ${overallIncome.toFixed(2)}<br> after tax deduction`;
//   modal.style.display = "block";
// });

// document.getElementById("closeBtn").addEventListener("click", function() {
//   document.getElementById("myModal").style.display = "none";
// });

// window.onclick = function(event) {
//   if (event.target == document.getElementById("myModal")) {
//     document.getElementById("myModal").style.display = "none";
//   }
// };
window.onload = function() {
  document.getElementById('tax-form').reset();
  document.getElementById('age-group').selectedIndex = -1; 
}

document.getElementById('tax-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve input values
  const grossIncome = parseFloat(document.getElementById('gross-income').value);
  const extraIncome = parseFloat(document.getElementById('extra-income').value) || 0;
  const ageGroup = parseInt(document.getElementById('age-group').value);
  const deductions = parseFloat(document.getElementById('deductions').value);

  // Calculate overall income
  const overallIncome = grossIncome + extraIncome - deductions;

  // Determine tax rate based on age group
  let taxRate;
  if (ageGroup === 1) {
    taxRate = 0.3;
  } else if (ageGroup === 2) {
    taxRate = 0.4;
  } else if (ageGroup === 3) {
    taxRate = 0.1;
  }

  // Calculate tax
  let tax = 0;
  if (overallIncome > 800000) {
    tax = taxRate * (overallIncome - 800000);
  }

  // Display result in modal
  const modal = document.getElementById("myModal");
  const overallIncomeText = document.getElementById("overall-income");
  overallIncomeText.innerHTML = `Your overall income will be <br> ${tax.toFixed(2)}<br> after tax deduction`;
  // overallIncomeText.innerHTML = `Tax Amount: ${tax.toFixed(2)} Lakhs`;
  modal.style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};
