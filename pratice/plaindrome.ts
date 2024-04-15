function isPalindrome(str: string): boolean {
    const filterString = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedString = filterString.split('').reverse().join('');
    return filterString === reversedString;
}

console.log(isPalindrome("racecar"))