// extra components and delivery cost class
const optionsCost = document.getElementsByClassName("option-cost");

// all components option button class
const allOptions = document.getElementsByClassName("option-btn");

// get all elemets using their corresponding ID
function getElementUsingId(id) {
  return document.getElementById(id);
}

// update price after choosing extra components
function updateValue(id, value) {
  getElementUsingId(id).innerText = value;
}

// calculating total price
function updateTotalCost() {
  let totalPrice = 1299;
  for (const option of optionsCost) {
    totalPrice += parseInt(option.innerText);
  }
  updateValue("total-price", totalPrice);
  updateValue("total-price-coupon", totalPrice);
  return totalPrice;
}

// update price of corresponding components after choosing extra components
for (const option of allOptions) {
  option.addEventListener("click", (event) => {
    if (event.target.id.includes("memory")) {
      updateValue("memory-cost", event.target.value);
      updateTotalCost();
    } else if (event.target.id.includes("storage")) {
      updateValue("storage-cost", event.target.value);
      updateTotalCost();
    } else if (event.target.id.includes("delivery")) {
      updateValue("delivery-cost", event.target.value);
      updateTotalCost();
    }
  });
}

//  apply coupon code to cut 20% price
function applyCuoponButton() {
  totalPrice = updateTotalCost();
  if (getElementUsingId("coupon-code").value == "stevekaku") {
    updateValue("total-price-coupon", totalPrice - totalPrice / 5);
  }
  getElementUsingId("coupon-code").value = "";
}
