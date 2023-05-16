// complete the given function

function palindrome(str){
     let new_str = str.toLowerCase();
	let a =0;
	let b= new_str.length()-1;
	while(a<b)
		{
			if(new_str.charAt(a) != new_str.charAt(b)){
				return false;
			}
			a++;
			b--;
		}
	return true;
}
module.exports = palindrome
