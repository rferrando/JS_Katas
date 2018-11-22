function checkCashRegister(price, cash, cid) {
  var change = {
    status: "",
    change: []
  };

  function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  function cidTotal(totalAmount, amountByCurrency){
    return round(totalAmount + amountByCurrency[1], 2)
  }
  var total_cid = cid.reduce(cidTotal, 0)

  let diffChange = cash - price;
  var currencyValues = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

  currencyValues.reverse();
  var cid_reverse = Array.from(cid).reverse();


  let insuficientFunds = false

  if (total_cid == diffChange){
    change.status = "CLOSED"
    change.change = cid
  }else{

    currencyValues.forEach(function(amountByCurrency, i) {

        //var amountByCurrency = currencyValues[i];
        let currency = amountByCurrency[0];
        let amount = amountByCurrency[1];
        let sub_amount = 0
        //console.log('amount ' + amount + ' currency ' + currency)
        if (i == currencyValues.length - 1 && diffChange > cid_reverse[i][1]){
          insuficientFunds = true
        }else{
          if (diffChange >= amount){

            let quantity = Math.floor(diffChange / amount);
            let remain_amount = round(diffChange % amount, 2);
            sub_amount = (quantity*amount)

            if (sub_amount > cid_reverse[i][1]){

            diffChange = round(remain_amount + round((sub_amount - cid_reverse[i][1]),2),2)
            sub_amount = cid_reverse[i][1]
            } else {diffChange = remain_amount;}

            //console.log('div '+ quantity + ' remain '+ diffChange)
            change.change.push([currency, (sub_amount)])
          }
        }
    });
  }
  if (insuficientFunds){
    change.status = "INSUFFICIENT_FUNDS"
    change.change = []
  } else{
    if (change.status == "") {
      change.status = "OPEN"
    }
  }

  return change;
}

//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
