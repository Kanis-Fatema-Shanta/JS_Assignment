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

//--------WoodCalculator-----------

function woodCalculator(chair, table, bed){

    if(chair >= 0 && table >= 0 && bed >= 0){
        var chairWood = (chair * 1) ;
        var tableWood = (table * 3) ;
        var bedWood   = (bed * 5) ;

        var totalWood = (chairWood + tableWood + bedWood);
        return totalWood;
    }
    else{
        return "Opps! Please Enter a positive value."
    }
}

var WoodOutput = woodCalculator(1,1,1);
console.log(WoodOutput);
