const uniqueChar = str =>{
    return [...str].reduce((acc, curr)=>{
      return acc.includes(curr) ?  acc  :  acc + curr;
    }, "")
  }

  console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'));