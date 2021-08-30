let str = "productDetails";
let result = str.replace(/([A-Z][a-z])/g, "-$1");
let title = result.charAt(0).toLowerCase() + result.slice(1);
let finalresult = title.toLowerCase();
console.log(finalresult);
