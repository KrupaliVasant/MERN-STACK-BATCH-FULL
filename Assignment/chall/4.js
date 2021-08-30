const coders = [
    { name: 'John', age: 23, gender: 'm', admin: false },
    { name: 'Jane', age: 20, gender: 'f', admin: true },
    { name: 'Jony', age: 60, gender: 'm', admin: true },
    { name: 'Jini', age: 35, gender: 'f', admin: true },
    { name: 'Jack', age: 30, gender: 'm', admin: false },
];
const older = () => {
    const ages = coders.filter((coder) => {
        return coder.age > 24;
    })
    console.log(ages);
}
console.log("1.  Coders older than 24: ");
older();
console.log("===============================");

const totalAges = () => {
     sumAges = coders.reduce(function (total, ages) {
        return total + ages.age;
    }, 0);
    console.log(sumAges);
}
console.log("2.  Total age of all coders: ");
totalAges();
console.log("==================================");

const femaleCoders = () => {
    fc = coders.filter(coder => {
        return coder.gender === 'f';
    })
    console.log(fc);
}
console.log("3.  List of all females");
femaleCoders();
console.log("==================================");

const adminCoders = () => {
    ac = coders.filter(coder => {
        return coder.admin === true;
    })
    // console.log(ac);
    const sortAdmin = ac.sort((a,b)=>{
        let fa =a.name.toLowerCase();     
        let fb =b.name.toLowerCase(); 
        
        if(fa < fb){
            return -1;
        }
        if(fa > fb){
            return 1;
        }
        return 0;
    })
    sortAdmin.forEach((e)=>{
        console.log(`${e.name} ${e.age} ${e.gender} ${e.admin}`)
    })
}
console.log("4.  List all admin coders in ascending order");
adminCoders();
console.log("==================================");

const sortAge=()=>{
    const sa = coders.sort((a,b)=>{
        return a.age - b.age;
    })
    sa.forEach((e)=>{
        console.log(`${e.name} ${e.age} ${e.gender} ${e.admin}`)
    })
}
console.log("5.  Sort all coders by age");
sortAge();
console.log("==================================");

const maleCoders = () => {
    fc = coders.filter(coder => {
        return coder.gender === 'm';
    })
    // console.log(fc);
    const a = fc.filter(coder=>{
        return coder.age < 25
    })
    console.log(a)
}
console.log("6.  The total age of male coders under 25");
maleCoders();
console.log("==================================");