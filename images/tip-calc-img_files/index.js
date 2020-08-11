console.log("is connected");

//calculate the tip
function calculateTip() {
  origTotal = $("#orig-total").val();
  tipPercent = $("#tip-percent").val();
  peopleNum = $("#people-num").val();

  //validate origTotal input
  if (isNaN(origTotal)) {
    $(".error").html("Please enter numbers only");
  } else {
    //hide error message
    $(".error").css("display", "none");
    // make calculation
    total = (origTotal * tipPercent) / peopleNum;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    totalBill = (+total + +origTotal).toFixed(2);
    //display total tip
    $(".display-total").css("display", "block");
    $(".total-tip").html(total);
    $(".total-bill").html(totalBill);

    console.log(total);
  }
}

//calculate tip on submit
$(".submit").on("click", (event) => {
  event.preventDefault();
  console.log("submit button is working");
  calculateTip();
});

//reset the calculator
$(".reset").on("click", (event) => {
  location.reload(true);
});
