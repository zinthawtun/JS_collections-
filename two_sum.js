function twoSum(numbers, target) {
    let z = [];
    for (let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if((numbers[i]+numbers[j]) === target ){
                z.push(i);
                z.push(j);
            }
        }
    }
    return z;
}