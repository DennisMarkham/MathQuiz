// var q1int1 = Math.floor(Math.random() * 10) + 1;
// var q1int2 = Math.floor(Math.random() * 10) + 1;
var numCorrect = 0;
var userID = "";
var atSign = "@";
var dot = "."
document.onkeyup = function(event)
{
	userID = $("#email").val();
	if (userID.includes(atSign) == true  && userID.includes(dot) == true)
	{
		$("#emCheck").text("Thank you for your email address!");
	}
	else
	{
		$("#emCheck").text("Please enter a valid email.");
	}
//check e-mail for @ sign and .
}

function c(input)
{
if (input == "correct")
{
	numCorrect++;
}

}




function check()
{
var q1Answer = $("input[name='q1']:checked").val();
c(q1Answer);

var q2Answer = $("input[name='q2']:checked").val();
c(q2Answer);

var userID = $("#email").val();
console.log(q1Answer + q2Answer);
console.log(numCorrect);
console.log(userID);
}

function start()
{
	// $("#q1int1").text(q1int1);
	// $("#q1int2").text(q1int2);

}

