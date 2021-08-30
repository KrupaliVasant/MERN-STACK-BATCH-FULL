const occurrences = str => {
    if (str.length == 0) {
        console.log("Invalid string")
        return;
    }
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i > j) {
                break;
            }
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count > 0)
            console.log(`"${str[i]}": "${count}",`);
    }

}
let str = "The quick brown fox jumps over the lazy dog";
occurrences(str);