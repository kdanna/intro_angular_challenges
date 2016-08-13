console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);
app.controller("loanController", loanController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}


function loanController() {
	this.amount = 10000;
	this.apr = 3;

	this.month = function(n){
		var interestPerYear = (this.amount * (this.apr / 100) );
		console.log(interestPerYear);
		var interestPerMonth = (interestPerYear/ 12);
		var accrued_interest = n * interestPerMonth || 0;
			return{
				accrued_interest: accrued_interest,
				total_balance: this.amount + accrued_interest
			};
	};
}