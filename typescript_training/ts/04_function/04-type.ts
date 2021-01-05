function userInfo01(name: string, age: number): string {
	return `My name is ${name}, ${age} years old`;
}

let userInfo02 = function(name: string, age: number): string {
	return `My name is ${name}, ${age} years old`;
}

console.log(userInfo01("abc", 23));
console.log(userInfo02("abc", 23));

