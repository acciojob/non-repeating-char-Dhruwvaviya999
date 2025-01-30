function firstNonRepeatedChar(str) {
	// Write your code here
	let obj = {};
	let strArr = str.split("");
	for(let char of strArr){
		obj[char] = (obj[char] || 0) + 1;
	};
	
	for(let char in obj){
		if(obj[char] === 1){
			return char;
		};
	};

	return null;

};
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
