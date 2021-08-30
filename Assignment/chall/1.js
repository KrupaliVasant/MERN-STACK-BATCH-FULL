const nums = ['2', '4', '25', '10', '3'];
const paddedNumber = num => {
    if(+num < 10)
    return `0${num}`;
    else
    return num
}
const paddedNums = nums.map(paddedNumber);
console.log(paddedNums)