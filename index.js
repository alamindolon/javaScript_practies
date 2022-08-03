const arr = ['a', 'b', 'c'];
var index;

for ( index = 0; index < arr.length; index++) {


    console.log(arr);


    if (arr[index] === 'a') {
        arr[index] = 'z';
        break;
    }


}

console.log(arr);

// if ses

 arr = ['a', 'b', 'c'];

 index = arr.indexOf('a'); // 👉️  0

arr.splice(index, 1, 'z');

console.log(arr);

// -splice use-

 arr = ['a', 'b', 'c'];

 index = arr.indexOf('a'); // 👉️  0

if (index !== -1) {
  arr[index] = 'z';
}

console.log(arr);

// --index khuje na pao--