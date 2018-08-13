function rot(strng) {
    // your code
    return (strng === '') ? '' : rot(strng.substr(1)) + strng.charAt(0);
}
function selfieAndRot(strng) {
    // your code
    let str = strng.replace(/.+/g, x => x + x.replace(/./g, "."));
    return str+"\n"+rot(str);

}
function oper(fct, s) {
    // your code
    if(fct === rot){
        return rot(s);
    }
    else if(fct === selfieAndRot){
        return selfieAndRot(s);
    }

}