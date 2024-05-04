document.getElementById("arrow1").onclick = function(){
	var left = document.querySelector(".scroll");
	left.scrollBy(200,0);
	console.log("hey");
}

document.getElementById("arrow").onclick = function(){
	var right = document.querySelector(".scroll");
	right.scrollBy(-200,0);
	console.log("hey");
}

const prices = {
    "12 X 12 , 300 Gauge": "Rs.18",
	"12 X 12 , 350 Gauge": "Rs.20",
    "14 X 14 , 300 Gauge": "Rs.24",
    "14 X 14 , 350 Gauge": "Rs.26",
    "16 X 16 , 300 Gauge": "Rs.27",
    "16 X 16 , 350 Gauge": "Rs.30",
    "18 X 18 , 300 Gauge": "Rs.34",
    "18 X 18 , 350 Gauge": "Rs.36",
    "20 X 20 , 300 Gauge": "Rs.42",
    "20 X 20 , 350 Gauge": "Rs.46",
	"24 X 24 , 350 Gauge": "Rs.60",
    "24 X 24 , 350 Gauge": "Rs.62"
};

function enableGauge() {
    const sizesSelect = document.getElementById("sizes");
    const gaugeSelect = document.getElementById("gauge");
    const priceLabel = document.getElementById("priceLabel");

    gaugeSelect.disabled = (sizesSelect.value === "select the size");
    priceLabel.innerHTML = ""; // Clear the price label

    if (sizesSelect.value !== "select the size" && gaugeSelect.value !== "select the gauge") {
			const size = sizesSelect.options[sizesSelect.selectedIndex].text;
			const gauge = gaugeSelect.options[gaugeSelect.selectedIndex].text;
			const key = `${size} , ${gauge}`;
			let price = prices[key];
            priceLabel.innerHTML = `${price}`;
    }
}