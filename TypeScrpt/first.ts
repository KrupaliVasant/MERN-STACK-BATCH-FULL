console.log("Hello");
var message:string = "Good Morning all";
console.log(message);
// message=123;

// any => super type  => supports any data type
// builtin data type : number,string,boolean,void,null,undefine
// user define types : arrays,classes,interfaces etc.

var num1:number=10;
if(num1==10){
    console.log('Its a decade')
}

var i:number;
for(i=0;i<10;i++){
    console.log(i)
}

//array
var numArray:number[];
numArray=[1,2,3,4,5,6];
console.log(numArray);

//creating array using Array object
var numArray1:number[]=new Array(5);
var strArray1:string[]=new Array(5);
console.log(strArray1);  //push values here othervise it is a empty array
var strNameArray1:string[]=new Array("kru","ved","ram");
console.log(strNameArray1);

//function
function display(userId:number,userName:string):void
{
    console.log("User id: ",userId);
    console.log("User name: ",userName);
}
display(1,'Ram');

//optional parameter
function display1(userId:number,userName:string,userAdhar?:string):void{
    console.log("User id: ", userId);
    console.log("User name: ", userName);
    console.log("User Adhar: ", userAdhar);
}
display1(2,'Pari');
display1(2,'Pari','p123');

//default parameter
function display2(userId:number,userName:string='Brillio',userAdhar?:string):void{
    console.log("User id: ", userId);
    console.log("User name: ", userName);
    if(userAdhar != undefined)
        console.log("User Adhar: ", userAdhar);
}
display2(3,'Krupali','k345');
display2(4);

function greeting():string
{
    return "hi from greeting"
}
console.log(greeting());

// var greet=function():string{
//     return 'hi'
// }

// var greet1=():string=>{
//     return 'hi all'
// }

var greet=():string=>'Hello from greet';
console.log(greet());

//with parameter
var greet1=(userName:string):string=>`Hello from greet1 ${userName}`;
console.log(greet1('Krupali'));