module.exports = function check(str, bracketsConfig) {
    let result = [];
    for(let i = 0; i < str.length; i++) {
        let found = bracketsConfig.find((el) => {return el[0] === str[i] || el[1] === str[i]});
        if(str[i] === found[1]) {
            if(found[0] === result[result.length-1]) {
                result.length = result.length-1;
            } else {
                result.push(str[i]);
            }
        } else {
            result.push(str[i]);
        }
    }
    return result.length === 0;
}
