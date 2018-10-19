//统计字符出现次数

function countStr(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        let v = str.charAt(i)
        if (obj[v] && obj[v].value === v) {
            obj[v].count = ++obj[v].count
        } else {
            obj[v] = {};
            obj[v].count = 1;
            obj[v].value = v;
        }
    }
    for (let key in obj) {
        console.log(obj[key].value + '=' + obj[key].count)
    }
    return obj
}

let test = 'weiqiujuan,weiqiujuan'
console.log(countStr(test));