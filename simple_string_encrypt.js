function encrypt(text, n) {

    if(text == null){
        return null;
    }

    var odd_wrd, even_wrd;

    for(var i=0; i<n; i++){

        odd_wrd=text.split("")
            .map(function(element,index){

                return index%2!==0 ? element : "";

            }).join("");

        even_wrd=text.split("")
            .map(function(element,index){

                return index%2===0 ? element : "";

            }).join("");

        text=odd_wrd+even_wrd;

    }
    return text;
}

function decrypt(encryptedText, n) {

    if (!encryptedText || n <= 0 || encryptedText.length <= 0) {
        return encryptedText;
    }

    var fun = function(word) {
        var odd  = word.slice(0,(word.length/2));
        var even = word.slice((word.length/2));
        var result = "";

        for (var i = 0; i < word.length; i++) {
            if (i % 2) {
                result += odd[0];
                odd = odd.slice(1);
            } else {
                result += even[0];
                even = even.slice(1);
            }
        }

        return result;
    };

    for (var i = 0; i < n; i++) {

        encryptedText = fun(encryptedText);

    }

    return encryptedText;
}