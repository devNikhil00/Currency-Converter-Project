const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Ensure countryList (from codes.js) is available
if (typeof countryList === "undefined") {
  console.error("Error: countryList is not loaded. Check codes.js file!");
}

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}${fromCurr.value}`;

  try {
    let response = await fetch(URL);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    let data = await response.json();
    console.log("API Response:", data); // Debugging: check API response

    if (!data.rates || !data.rates[toCurr.value]) {
      throw new Error(`Exchange rate for ${toCurr.value} not found!`);
    }

    let rate = data.rates[toCurr.value];
    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate. Try again later.";
    console.error("Error:", error.message);
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];

  if (!countryCode) {
    console.error(`Country code not found for ${currCode}`);
    return;
  }

  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
