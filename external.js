let cardName = document.querySelector(".name");
let cardHolderName = document.querySelector("#fullName");
let cardHolderNameClass = cardHolderName.classList;

let cardNum = document.querySelector(".getCardNum");
let cNum = document.querySelector("#cardNumber");
let cNumClass = cNum.classList;

let cardCvc = document.querySelector(".cvc");
let cardCvcNumber = document.querySelector("#cvcNumber");
let displayCvcNumber = document.querySelector(".getCvc");
let cardCvcNumberClass = cardCvcNumber.classList;

let expDate = document.querySelector(".cvc");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let d = new Date();
let monthInput = document.querySelector("#month");
let monthInputClass = monthInput.classList;
let month = d.getMonth() + 1;
let monthFormat = `0${month}`;
let yearInput = document.querySelector("#year");
let yearInputClass = yearInput.classList;
let yearFormat = d.getFullYear().toString().substr(-2);

let button = document.querySelector("#btn");
let form = document.querySelector("form");

let regex = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;

let nameError = document.querySelector(".error1");
let nameErrorClass = nameError.classList;

let cardError = document.querySelector(".error2");
let cardErrorClass = cardError.classList;

let cvcError = document.querySelector(".error3");
let cvcErrorClass = cvcError.classList;

let dateError = document.querySelector(".error4");
let dateErrorClass = dateError.classList;

cardName.innerHTML = "JANE APPLESEED";
span1.innerHTML = "00/";
span2.innerHTML = "00";
cardNum.innerHTML = "0000 0000 0000 0000";

cardHolderName.addEventListener("input", () => {
	span1.innerHTML = `${monthInput.value}`;
	span2.innerHTML = `${yearInput.value}`;
	cardName.innerHTML = cardHolderName.value.toUpperCase();
	cardNum.innerHTML = cNum.value;
	displayCvcNumber.innerHTML = cardCvcNumber.value;
	nameErrorClass.remove("error1-visible");
	cardHolderNameClass.remove("redBorder");
	if(monthInput.value.length == 1) {
		span1.innerHTML = `0${monthInput.value}/`;
	}
	if(monthInput.value.length == 2) {
		span1.innerHTML = `${monthInput.value}/`;
	}
});

cNum.addEventListener("input", () => {
	span1.innerHTML = `${monthInput.value}`;
	span2.innerHTML = `${yearInput.value}`;
	cardNum.innerHTML = cNum.value;
	cardName.innerHTML = cardHolderName.value.toUpperCase();
	displayCvcNumber.innerHTML = cardCvcNumber.value;
	cardErrorClass.remove("error2-visible");
	cNumClass.remove("redBorder");
	if(monthInput.value.length == 1) {
		span1.innerHTML = `0${monthInput.value}/`;
	}
	if(monthInput.value.length == 2) {
		span1.innerHTML = `${monthInput.value}/`;
	}
});

cardCvcNumber.addEventListener("input", () => {
	span1.innerHTML = `${monthInput.value}`;
	span2.innerHTML = `${yearInput.value}`;
	displayCvcNumber.innerHTML = cardCvcNumber.value;
	cardNum.innerHTML = cNum.value;
	cardName.innerHTML = cardHolderName.value.toUpperCase();
	cvcErrorClass.remove("error3-visible");
	cardCvcNumberClass.remove("redBorder");
	if(monthInput.value.length == 1) {
		span1.innerHTML = `0${monthInput.value}/`;
	}
	if(monthInput.value.length == 2) {
		span1.innerHTML = `${monthInput.value}/`;
	}
});

monthInput.addEventListener("input", () => {
	span1.innerHTML = `${monthInput.value}/`;
	span2.innerHTML = `${yearInput.value}`;
	displayCvcNumber.innerHTML = cardCvcNumber.value;
	cardNum.innerHTML = cNum.value;
	cardName.innerHTML = cardHolderName.value.toUpperCase();
	monthInputClass.remove("redBorder");
	dateErrorClass.remove("error4-visible");
	if(monthInput.value.length == 1) {
		span1.innerHTML = `0${monthInput.value}/`;
	}
	if(monthInput.value.length == 2) {
		span1.innerHTML = `${monthInput.value}/`;
	}
});

yearInput.addEventListener("input", () => {
	span1.innerHTML = `${monthInput.value}/`;
	span2.innerHTML = `${yearInput.value}`;
	displayCvcNumber.innerHTML = cardCvcNumber.value;
	cardNum.innerHTML = cNum.value;
	cardName.innerHTML = cardHolderName.value.toUpperCase();
	yearInputClass.remove("redBorder");
	dateErrorClass.remove("error4-visible");
	if(monthInput.value.length == 1) {
		span1.innerHTML = `0${monthInput.value}/`;
	}
	if(monthInput.value.length == 2) {
		span1.innerHTML = `${monthInput.value}/`;
	}
});

form.addEventListener("submit", (event) => {
	if(!((cNum.value).match(regex))) {
		cardErrorClass.add("error2-visible");
		cardError.innerHTML = "Wrong format, numbers only. The format is (0000 0000 0000 0000).";
		cNumClass.add("redBorder");
		event.preventDefault();
	}
	if(cNum.value === "") {
		cardError.innerHTML = "Can't be blank";
	}
	if(cardHolderName.value === "") {
		nameErrorClass.add("error1-visible");
		nameError.innerHTML = "Can't be blank";
		cardHolderNameClass.add("redBorder");
		event.preventDefault();
	}
	if(cardCvcNumber.value === "") {
		cvcErrorClass.add("error3-visible");
		cvcError.innerHTML = "Can't be blank";
		cardCvcNumberClass.add("redBorder");
		event.preventDefault();
	}
	if(isNaN(cardCvcNumber.value) || cardCvcNumber.value.length < 3 || cardCvcNumber.value < 0) {
		cvcErrorClass.add("error3-visible");
		cvcError.innerHTML = "Please enter 3 digits";
		event.preventDefault();	
	}
	if(parseInt(yearInput.value) < 0 || parseInt(yearInput.value) == 0 || isNaN(yearInput.value) || yearInput.value.length < 2 || yearInput.value <= yearFormat) {
		yearInputClass.add("redBorder");
		dateErrorClass.add("error4-visible");
		dateError.innerHTML = "Year must be greater than current year";
		event.preventDefault();
	}
	if(yearInput.value === "" || monthInput.value === "") {
		dateError.innerHTML = "Can't be blank";
	}
	if(parseInt(monthInput.value) < 0 || parseInt(monthInput.value) == 0 || parseInt(monthInput.value) > 12 || isNaN(monthInput.value) || monthInput.value === "") {
		monthInputClass.add("redBorder");
		dateErrorClass.add("error4-visible");
		dateError.innerHTML = "Please enter valid month";
		event.preventDefault();
	}
	if(monthInput.value == "") {
		dateError.innerHTML = "Can't be blank";
	}
});