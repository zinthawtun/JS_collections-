function list(names){
    //your code here
    var nameList = [];
    names.map(name => {nameList.push(name.name)})


    if (nameList.length>2){
        var last_word = nameList.slice(-1)
        var wordList  = nameList.slice(0, -1).join(', ')
        return `${wordList.toString()} & ${last_word.toString()}`
    }

    if (nameList.length === 2) {
        return nameList.join(' & ')
    }

    if (nameList.length === 1) {
        return nameList.join(', "Wrong output for a single name"')
    }

    if (nameList.length === 0) {
        return nameList.join(' , "Must work with no names"')
    }

}