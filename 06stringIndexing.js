//string indexing 

let firstName ="akshaytanpure";
 // a k s h a y t a n p u r e
 // 0 1 2 3 4 5 6 7 8 9 10 11 12   
 console.log(firstName[1]);
 console.log(firstName.length);  //find out total lenght of string //13

 // length-1 = index []
 console.log(firstName[12]);  // output should be "e"

 console.log("error",firstName[13]);  // output should be "error" undefined
 console.log(firstName[firstName.length-1]);  //when u do not know total string lenght and that time u want to print last value