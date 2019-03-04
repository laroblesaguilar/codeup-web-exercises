function containsEnglish (input){
    input = input.toLowerCase()
    return input.includes("english");
}

console.log(containsEnglish("fkdsnflndsnfklsdenglish"));

// function positiveNegative(array){
//     var answer = [];
//     var count = 0;
//     var sum = 0;
//     for(var i = 0; i < array.length; i++){
//         if(array[i] > 0){
//             count ++
//         } else{
//             sum += array[i];
//         }
//     }
//     answer.push(count, sum)
//     return answer;
// }

// function sum(start, finish, step){
//
//     var sum = 0;
//     for(var i = start; i <= finish; i+=step){
//         sum +=i
//     }
//     return sum;
// }

// console.log(sum(1, 4, 1));

function reverseBinary(array){
    console.log(array);
    arrayAnswers = [];
    for(var i = 0; i < array.length; i++){
        arrayAnswers.push(array[i] /2);
    }
    return arrayAnswers;
}

console.log(reverseBinary([4,5,6]));
