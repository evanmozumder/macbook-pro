// const memoryCostElement = document.getElementById("memory-cost");
// const storageCostElement = document.getElementById("storage-cost");
// const deliveryChargeElement = document.getElementById("delivery-cost");
// const totalPriceElement = document.getElementById("total-price");
// const totalPriceCouponElement = document.getElementById("total-price-coupon");
// const couponCodeElement = document.getElementById("coupon-code");
const optionsCost = document.getElementsByClassName("option-cost");

function getElementUsingId(id) {
	return document.getElementById(id);
}

function updateOptionPrice(optionId, price) {
	document.getElementById(optionId).innerText = price;
	updateTotalCost();
}

function updateValue(id, value) {
	getElementUsingId(id).innerText = value;
}

function updateTotalCost() {
	/* totalPrice =
		1299 +
		parseInt(memoryCostElement.innerText) +
		parseInt(storageCostElement.innerText) +
		parseInt(deliveryChargeElement.innerText); */

	let totalPrice = 1299;
	for (const option of optionsCost) {
		// console.log(option.innerText);
		// debugger;
		totalPrice += parseInt(option.innerText);
	}
	// console.log(totalPrice);
	/* totalPriceElement.innerText = totalPrice;
	totalPriceCouponElement.innerText = totalPrice; */
	/* getElementUsingId("total-price").innerText = totalPrice;
	getElementUsingId("total-price-coupon").innerText = totalPrice; */
	updateValue("total-price", totalPrice);
	updateValue("total-price-coupon", totalPrice);
	return totalPrice;
}

/* document.getElementById("16gb-memory").addEventListener("click", () => {
	// memoryCostElement.innerText = 180;
	updateOptionPrice("memory-cost", 180);
	// updateCost();
});

document.getElementById("8gb-memory").addEventListener("click", () => {
	// memoryCostElement.innerText = 0;
	updateOptionPrice("memory-cost", 0);
	// updateCost();
});

document.getElementById("256gb-storage").addEventListener("click", () => {
	// storageCostElement.innerText = 0;
	updateOptionPrice("storage-cost", 0);
	// updateCost();
});

document.getElementById("512gb-storage").addEventListener("click", () => {
	// storageCostElement.innerText = 100;
	updateOptionPrice("storage-cost", 100);
	// updateCost();
});

document.getElementById("1tb-storage").addEventListener("click", () => {
	// storageCostElement.innerText = 180;
	updateOptionPrice("storage-cost", 180);
	// updateCost();
});

document.getElementById("delivery-free").addEventListener("click", () => {
	// deliveryChargeElement.innerText = 0;
	updateOptionPrice("delivery-cost", 0);
	// updateCost();
});

document.getElementById("delivery-charge").addEventListener("click", () => {
	// deliveryChargeElement.innerText = 20;
	updateOptionPrice("delivery-cost", 20);
	// updateCost();
}); */

const allOptions = document.getElementsByClassName("option-btn");
for (const option of allOptions) {
	option.addEventListener("click", (event) => {
		// console.log(event.target.value);
		if (event.target.id.includes("memory")) {
			updateOptionPrice("memory-cost", event.target.value);
		} else if (event.target.id.includes("storage")) {
			updateOptionPrice("storage-cost", event.target.value);
		} else if (event.target.id.includes("delivery")) {
			updateOptionPrice("delivery-cost", event.target.value);
		}
	});
}

document.getElementById("coupon-btn").addEventListener("click", () => {
	totalPrice = updateTotalCost();
	// console.log(totalPrice);
	if (getElementUsingId("coupon-code").value == "stevekaku") {
		// getElementUsingId("total-price-coupon").innerText = totalPrice - totalPrice / 5;
		updateValue("total-price-coupon", totalPrice - totalPrice / 5);
		// updateOptionPrice("total-price-coupon", totalPrice - totalPrice / 5);
	}
	getElementUsingId("coupon-code").value = "";
});
