// 23
/* One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
Examples:
unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0 */

function unique(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
       if(arr[i]!==arr[i-1]&&arr[i]!==arr[i+1]){
        newArr.push(arr[i]);
       }
    }
    return newArr.toString();
};
console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));

// 24
/* Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
Examples:
isFourLetters([“John”, “James”, “Jack”, “Jeanne”]) ➞ [“John”, “Jack”]
isFourLetters([“Tomato”, “Corn”, “Lettuce”]) ➞ [“Corn”]
isFourLetters([“Dog”, “Cat”, “Deer”]) ➞ [“Deer”] */

function isFourLetters(arr){
    let myArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length == 4){
            myArr.push(arr[i]);
        }
    }
    return myArr;
}
console.log(isFourLetters(["John","Jannieh"]));

// 25
/* These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.
Declare a variable named “euroCities” and assign an array to the variable e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”]. Declare another variable and assign the second item of the array as a value.
Change the first item in the array to “Berlin”.
Print the length of the array “euroCities”.
Remove the last item of the array “euroCities” */

let euroCities = ["Paris","London","Valleta","Prague","Rome"];
let myCity = euroCities[1];
console.log(myCity);
euroCities[0]="Berlin";
console.log(euroCities);
console.log(euroCities.length);
console.log(euroCities.pop());

//26
/* Print the results to the console.
Make an array of your siblings’ names or your favorite movie characters’ names.
Make an array of your parents’ names.
Combine these two arrays.
Add your pets’ names.
Reverse the order of the array.
Access one of your parents’ names.
Update the name of one of your parents. */

let mySiblingsArr = ["Nihad", "Emad","Fares","Samer"];
let myParentsArr = ["Yousef","Serin","Wael","Furat"];
let myFamilyArr = mySiblingsArr.concat(myParentsArr);
console.log(myFamilyArr);
myFamilyArr.push("Dog","Cat","Camel","Mouse");
console.log(myFamilyArr);
console.log(myFamilyArr.reverse());
console.log(myParentsArr[2]);
myParentsArr[0] = "Safi";
console.log(myParentsArr);