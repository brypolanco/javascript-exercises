const sumAll = function(num1, num2) {
    if(num1<0 || num2<0){
        return 'ERROR';
    }

    else if(typeof num1 != "number" || typeof num2 != "number"){
        return 'ERROR';
    }

    let min,max;
    min=Math.min(num1,num2);
    max=Math.max(num1,num2);

    let sum = 0;

    for(min;min<=max;min++){
        sum+=min;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
