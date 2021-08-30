let users=[
    {id:1,name:'Ram',salary:1000},
    {id:2,name:'Shyam',salary:15000},
    {id:3,name:'Pari',salary:20000},
    {id:4,name:'Jony',salary:9000}
];
// =====find======= return first value from group
let user= users.find(i=>i.id>2)
if(user!=null)
console.log(user.name);
else
console.log('Invalid id');

// ===filter====
// return multiple value
let arr=users.filter(i=>i.salary>10000);
console.log(arr);