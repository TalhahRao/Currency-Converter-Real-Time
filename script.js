const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const formCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateExchnageRate = async () =>{
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal <= 0) {
    amtVal = 1;
    amount.value = "1";
  }

  const BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${formCurr.value.toLowerCase()}.json`;

  try {
    let response = await fetch(BASE_URL);
    let data = await response.json();
    let rate = data[formCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${formCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Kuch ghalti hogayi, please try again.";
    console.error(error);
  }
}
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchnageRate();
});

window.addEventListener("load", ()=>{
  updateExchnageRate();
});
