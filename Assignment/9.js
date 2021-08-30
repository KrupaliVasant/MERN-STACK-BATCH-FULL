var str1 ="Python 3.0";
var str2 ="JS";
var str3 ="JavaScript";

const copyStr=(str)=>{
    if(str.length < 3){
        return result = false;
    } else {
         result = str.slice(-3).repeat(4);
        return result;
    }
}
copyStr(str1);
 console.log("Input: "+str1);
 console.log("Output: "+ result);

 copyStr(str2);
 console.log("Input: "+str2);
 console.log("Output: "+result);

 copyStr(str3);
 console.log("Input: "+str3);
 console.log("Output: "+result);