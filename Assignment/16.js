const generateId=n=>{
    var result           = '';
    var chars       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var length = chars.length;
    for ( var i = 0; i < n; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * length));
   }
   return result;
}

console.log(generateId(8));