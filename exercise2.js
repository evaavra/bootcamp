// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:


// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


function names(arrayNames){
    var text;
    switch (arrayNames.length){
        case 0:
            text = "no one likes this";
            break;
        case 1:
            text = `${arrayNames[0]} likes ths`;
            break;
        case 2:
            text = `${arrayNames[0]} and ${arrayNames[1]} like ths`;
            break;
        case 3:
            text = `${arrayNames[0]}, ${arrayNames[1]} and ${arrayNames[2]} like ths`;
            break;
        default:
            text = `${arrayNames[0]}, ${arrayNames[1]} and ${arrayNames.length - 2} like ths`;
    }
    return text;
}


var array1 = [];
var input = prompt("Give me a name, otherwise type stop.");
while (input != "stop"){
    array1.push(input);
    input = prompt("Give me a name, otherwise type stop.");
}

console.log(names(array1));
console.log("program is done!");
