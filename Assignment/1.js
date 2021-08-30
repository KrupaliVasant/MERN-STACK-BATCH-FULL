let date = new Date();
let day=date.getDay();
let weekDays=['Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log("Today is: ",weekDays[day]);

let hr = date.getHours();
let min = date.getMinutes();
let ampm = (hr >= 12 ? 'PM' : 'AM');
hr=hr % 12;
hr = hr ? hr : 12;
min = min < 10 ? '0' +min : min;
let time = hr + " " + ampm + " : " + min + " : " +date.getMilliseconds(); 
console.log("Current time is: ",time);