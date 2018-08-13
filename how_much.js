function howmuch(m, n) {

    let l = [];


    // your code
    if (m < n) {
        for (let i = m; i <= n; i++) {
            if (i % 7 === 2 && i % 9 === 1)
                l.push(('M: ' + i + ',B: ' + Math.trunc(i / 7) + ',C: ' + Math.trunc(i / 9)).split(",", 3));
        }
        return l;
    }
    if (m > n) {
        for (let i = n; i <= m; i++) {
            if (i % 7 === 2 && i % 9 === 1)
                l.push(('M: ' + i + ',B: ' + Math.trunc(i / 7) + ',C: ' + Math.trunc(i / 9)).split(",", 3));
        }
        return l;
    }
    else{
        return l;
    }
}ß