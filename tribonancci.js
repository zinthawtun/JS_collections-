function tribonacci(signature,n){
    //your code here
    var trib = [];
    if (n == 0 )
        return [];
    else if(n<signature.length){
        for(var i=0;i<n; ++i){
            trib[i] = signature[i];
        }
        return trib;
    }else{
        switch(signature.length){
            case 1:
                signature.push(signature[0], signature[0]);
                for(i=3;i<n;i++){
                    signature[i] = signature[i-1] + signature[i-2] + signature[i-3];
                }
                break;
            case 2:
                signature.push(signature[0]);
                for(i=3;i<n;i++){
                    signature[i] = signature[i-1] + signature[i-2] + signature[i-3];
                }
                break;
            default:
                for(i=signature.length;i<n;i++){
                    signature[i] = signature[i-1] + signature[i-2] + signature[i-3];
                }
        }
        return signature;
    }
}