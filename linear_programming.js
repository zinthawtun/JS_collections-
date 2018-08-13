function tickets(peopleInLine){
    // ...
    var twenty_five = 0;
    var fifty = 0;
    var hundred = 0;

    for(var i=0; i<peopleInLine.length; ++i) {

        if (peopleInLine[i] === 25) {
            twenty_five++;
        }
        if (peopleInLine[i] === 50) {
            if(twenty_five>= 1){
                fifty++;
                twenty_five--;
            }
            else{
                return "NO";
            }
        }
        if (peopleInLine[i] === 100 ) {
            if(fifty>=1 && twenty_five>=1){
                hundred++;
                fifty--;
                twenty_five--;
            }
            else if(fifty === 0 && twenty_five>=3){
                hundred++;
                twenty_five-=3;
            }
            else{
                return "NO";
            }
        }
    }
    return "YES";
}