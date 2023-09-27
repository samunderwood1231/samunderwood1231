document.getElementById('submit').onclick = function () { sales(); };

function sales() {

  nanError = false;

  let name = document.forms["salesInput"].elements["name"].value;
  let item1 = Math.abs(parseInt(document.forms["salesInput"].elements["item1"].value));
  let item2 = Math.abs(parseInt(document.forms["salesInput"].elements["item2"].value));
  let item3 = Math.abs(parseInt(document.forms["salesInput"].elements["item3"].value));
  let item4 = Math.abs(parseInt(document.forms["salesInput"].elements["item4"].value));


  if (isNaN(item1)) {
    document.forms["salesOutput"].elements["thisItem1"].value = "Please enter a number";
    nanError = true;
  } else {
    document.forms["salesOutput"].elements["thisItem1"].value = item1;
  } if (isNaN(item2)) {
    document.forms["salesOutput"].elements["thisItem2"].value = "Please enter a number";
    nanError = true;
  } else {
    document.forms["salesOutput"].elements["thisItem2"].value = item2;
  } if (isNaN(item3)) {
    nanError = true;
    document.forms["salesOutput"].elements["thisItem3"].value = "Please enter a number";
  } else {
    document.forms["salesOutput"].elements["thisItem3"].value = item3;
  } if (isNaN(item4)) {
    nanError = true;
    document.forms["salesOutput"].elements["thisItem4"].value = "Please enter a number";
  } else {
    document.forms["salesOutput"].elements["thisItem4"].value = item4;
  }

  if (nanError) {
    calcRevenue(item1, item2, item3, item4);
    printRevenue(revenue1, revenue2, revenue3, revenue4);
    calcEarnings(revenue1, revenue2, revenue3, revenue4);
    earningsUSD = (weeklyEarnings / 100).toFixed(2);
    document.forms["salesOutput"].elements["totalRevenue"].value = (sum/100).toFixed(2);
    document.forms["salesOutput"].elements["weeklyEarnings"].value = `Please check to ensure you entered sales data for all items sold.\n\n${name}, your weekly earnings are $${earningsUSD}.`
  } else {
    calcRevenue(item1, item2, item3, item4);
    printRevenue(revenue1, revenue2, revenue3, revenue4);
    calcEarnings(revenue1, revenue2, revenue3, revenue4);
    earningsUSD = (weeklyEarnings / 100).toFixed(2);
    document.forms["salesOutput"].elements["totalRevenue"].value = (sum / 100).toFixed(2);
    document.forms["salesOutput"].elements["weeklyEarnings"].value = `${name}, your weekly earnings are $${earningsUSD}.`
  }

function calcRevenue(item1, item2, item3, item4) {
  //revenue in cents
  if (isNaN(item1)) {
    revenue1 = 0;
  } else {
    revenue1 = item1 * 2099;
  } if (isNaN(item2)) {
    revenue2 = 0;
  } else {
    revenue2 = item2 * 1275;
  } if (isNaN(item3)) {
    revenue3 = 0;
  } else {
    revenue3 = item3 * 995;
  } if (isNaN(item4)) {
    revenue4 = 0; 
  } else revenue4 = item4 * 3589;
  return;
}

function printRevenue(revenue1, revenue2, revenue3, revenue4) {
  document.forms["salesOutput"].elements["revenue1"].value = (revenue1 / 100).toFixed(2);
  document.forms["salesOutput"].elements["revenue2"].value = (revenue2 / 100).toFixed(2);
  document.forms["salesOutput"].elements["revenue3"].value = (revenue3 / 100).toFixed(2);
  document.forms["salesOutput"].elements["revenue4"].value = (revenue4 / 100).toFixed(2);
}

function calcEarnings(revenue1, revenue2, revenue3, revenue4) {
  sum = revenue1 + revenue2 + revenue3 + revenue4;
  commission = sum * 0.09;
  salary = 250 * 100;
  weeklyEarnings = commission + salary;
  return;
}


}