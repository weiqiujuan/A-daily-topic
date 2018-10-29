//编写一个简单的函数，返回一个布尔值，只是字符串是否是palindrome(回文)
function isPalindrome(str) {
    str=str.replace(/\w/g,'').toLowerCase()
    return (str===str.split('').reverse().join(''))
}
console.log(isPalindrome("level"))
console.log(isPalindrome('a man ,a mac, cama, nam A'))