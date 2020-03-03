function inputArr() {
    let arrNumber = [];
    inputStr = prompt("Enter a Number String: ");
    arrNumber = inputStr.split(" ");
    return arrNumber;
}
function findMax(arr) {
    let max = arr[0] * arr[1];
    for (let i = 1; i < arr.length; i++){
        let temp = arr[i] * arr[i+1];
        if (temp > max){
            max = temp;
        }
    }
    return max;
}
function showResult() {
    alert("Result = " + findMax(inputArr()));
}
showResult();