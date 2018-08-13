function number(num, op){
    if(!op)
        return num;
    return op(num);
}

function zero(op) { return number(0, op); }
function one(op) { return number(1, op); }
function two(op) { return number(2, op); }
function three(op) { return number(3, op); }
function four(op) { return number(4, op); }
function five(op) { return number(5, op); }
function six(op) { return number(6, op); }
function seven(op) { return number(7, op); }
function eight(op) { return number(8, op); }
function nine(op) { return number(9, op); }

function plus(n) {
    return function(m) {
        return m + n;
    }
}
function minus(n) {
    return function(m) {
        return m - n;
    }
}
function times(n) {
    return function(m) {
        return m * n;
    }
}
function dividedBy(n) {
    return function(m) {
        return Math.trunc(m / n);
    }
}