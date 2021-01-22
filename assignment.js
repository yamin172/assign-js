// https://github.com/yamin172/assign-js


function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}




function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 3;
    var mobilePrice = mobile * 3;
    var laptopPrice = laptop * 3;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}




function hotelCost(days) {
    cost = 0;
    if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var first10 = 10 * 100;
        var remaining = days - 10;
        second20 = remaining * 80;
        cost = first10 + second20;
    } else {
        var first10 = 10 * 100;
        var second20 = 10 * 80;
        var remaining = days - 20;
        var third30 = remaining * 50;
        days = first10 + second20 + third30;
    }
    return days;
}



function megaFriend(names) {
    var bigName = names[0];
    for (var i = 0; i < names.length; i++) {
        var bigName = names[i];
        if (names.length <= bigName.length); {

        }
    }
    return bigName;
}