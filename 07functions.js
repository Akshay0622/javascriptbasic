// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName="   Akshay       ";
console.log(firstName.length)

firstName=firstName.trim(); // total space kadun takto trim function
console.log(firstName);
console.log(firstName.length);
firstName=firstName.toUpperCase();
console.log(firstName);
firstName=firstName.toLowerCase();
console.log(firstName);

firstName=firstName.slice(0,3); // start index 0 gheil ani end index 3 mhnje 3 nantr cha data kadun takel ani fkt a k s //0 1 2  value print karel 3 as index ghenar mhnje 012 hya nusar print hoil data aks 
console.log(firstName);