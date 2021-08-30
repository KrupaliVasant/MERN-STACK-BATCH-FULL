let str1 = 'paatpss';
let str2 = 'paatps';

const checkStr=(str)=>{
    var str_p = str.replace(/[^p]/g, "");
    var str_s = str.replace(/[^s]/g, "");
  
    var p_num = str_p.length;
    var s_num = str_s.length;
    result= p_num === s_num;
    return result;
}

checkStr(str1);
console.log("Input String 1: "+ str1);
console.log("Output: "+ result);

checkStr(str2);
console.log("Input String 2: "+ str2);
console.log("Output: "+ result);