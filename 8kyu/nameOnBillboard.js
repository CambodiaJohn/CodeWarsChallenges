// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).




function billboard(name, price = 30){

    var totalCost = 0;
    for(i=0; i<name.length; i++){
        totalCost += price;
    } 
    
    return totalCost;
    
    }

    //P: Will you always be given a string? Any special characters? NO * allowed 
    //R: Return the total cost of the bilboard as.
    //E: John Cambodia = 13 * 30 (390)
    //P: Create a function that takes a name and a price. For each character in the name add $30 to the price return the total cost.