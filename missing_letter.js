function findMissingLetter(array)
{
    var words = array.join("");
    var alphabets = words.toString();
    var i, j = 0, m = 122;
    if (array) {
        i = alphabets.charCodeAt(0);
        while (i <= m && j < alphabets.length) {
            if (String.fromCharCode(i) !== alphabets.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++; j++;
        }
    }
    return ' ';
}