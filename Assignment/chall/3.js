let longPassage = `Lorem Ipsum is simply dummy text of 
the printing and typesetting industry. 
Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, 
when an unknown printer took a galley of 
type and scrambled it to make 
a type specimen book.`;

let sortPassage = "Wwlcome to javascript";

const timeToRead = (text) => {
    let date = new Date("July 30, 2021 12:10:00");
    let averageTime = date.getMinutes();
    let om = new Date("July 30, 2021 12:1:00");
    let onemin = om.getMinutes();
    // console.log(averageTime);
    let splitWords = text.split(" ").filter(t => t.trim() !== "");
    //   console.log(splitWords);
    let min = splitWords.length / averageTime;
    //   console.log(min);
    if (min < onemin) {
        return takeTime = `${Math.round(min * 60)} sec`;
    }
    else {
        return takeTime = `${Math.round(min)} mins`;
    }
}
console.log("Long Passage: ", timeToRead(longPassage));
console.log("Sort Passage: ", timeToRead(sortPassage));