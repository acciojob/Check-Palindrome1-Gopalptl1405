// complete the given function

function palindrome(str){
    let clrstr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
	return clrstr=== clrstr.split('').reverse().join('');
}
module.exports = palindrome
