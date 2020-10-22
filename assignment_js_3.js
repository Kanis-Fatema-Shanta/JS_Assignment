//---------- converting feet to mile ----------------

function feetToMile(feet){
    if(feet <= 0){
        return "Opps! Please, Enter positive value."

    }
    else{
        var mile =(feet / 5280)  // 1 mile = 5280 feet so, 1 feet = 1/5280 mile
        return mile.toFixed(6);
    
    }
}

var result = feetToMile(1);
console.log(result)