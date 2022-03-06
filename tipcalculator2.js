function tipAmount (bill, rating='bad'){
    if (rating == 'good'){
        return bill * .2 + bill
    }
    else if (rating == 'fair'){
        return bill * .15 + bill
    }
    else {
        return bill * .1 + bill
    }
}
console.log(tipAmount(300))