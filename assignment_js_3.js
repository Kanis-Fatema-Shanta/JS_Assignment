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


//-----------BrickCalculaator--------------

function brickCalculator (building) {
    var feetBricks = 1000;
    if (building >= 0 && building <= 10) {
        var totalFeet = (building * 15);
        var totalBricks = (totalFeet * feetBricks); 
        return totalBricks;
    }
    else if (building >= 0 && building <= 20) {
        var downTenBuildingBricks = 150000; 
        totalFeet = (building - 10) * 12;
        totalBricks = ((totalFeet * feetBricks) + downTenBuildingBricks);
        return totalBricks;
    }    
    else if (building >= 0 && building >= 21) {
        downTenBuildingBricks = 150000;
        var downTenToTwenty = 120000;
        totalFeet = (building - 20) * 10;
        var extraTotalBricks = (downTenBuildingBricks + downTenToTwenty);
        totalBricks = ((totalFeet * feetBricks) + extraTotalBricks);
        return totalBricks;
    }
    else {
        return "Opps! Please enter the positive value."
    }
  }
  
  var bricksNumbers = brickCalculator(30);
  console.log(bricksNumbers);

  //-----------TinyFriends--------------

  function tinyFriend (nameArray) {
    var smallName = nameArray[0];
    for (var i = 0; i < nameArray.length; i++) {
        var list = nameArray[i];
        if ( list.length !='' && list.length < smallName.length) {
            smallName = list;
        }
        if(list.length =='')
        {
            return "Opps! Please Enter a name,name can't be a empty string"
        }
    }
    return smallName;  
}

var friend = tinyFriend([ 'Shanta','Peu','Tonu','Monisha','Dristy']); //if you set '' or "" this will give a message to you

console.log(friend);

