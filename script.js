
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } ]

// Q.1.....

let ans1=studentRecords.map((item)=>item.name.toUpperCase());
console.log(ans1);

// Q.2....

let ans2=studentRecords.filter((item)=>item.marks>50);
console.log(ans2);

// Q.3.....

let ans3=studentRecords.filter((item)=>item.marks>50&&item.id>120);
console.log(ans3);

// Q.4....
let ans4=studentRecords.map((item1)=>item1.marks).reduce((pre,current)=>pre+=current);
console.log(ans4);

// Q.5.....

let ans5=studentRecords.filter((item)=>item.marks>50).map((item1)=>item1.name);
console.log(ans5);

// Q.6...
let ans6=studentRecords.filter((item)=>item.id>120).map((item2)=>item2.marks).reduce((pre,cur)=>pre=pre+=cur);
console.log(ans6);

// Q.7....

let ans7=studentRecords.map((e)=>{
    if(e.marks<50){
        e.marks+=15;
       
    }
    return e;
}).filter((item)=>item.marks>50)
.map((item2)=>item2.marks)
.reduce((pre,cur)=>pre+=cur);
console.log(ans7);

// Q.8....

let ans8=[];

function  Students(name1,class1,rollNo){
this.name=name1;
this.class1=class1;
this.rollNo=rollNo;
}

const students1=new Students("ketan",2,23);
const students2=new Students("ram",3,24);
const students3=new Students("kunal",4,23);
const students4=new Students("shyam",5,28);
const students5=new Students("Raj",6,23);
const students6=new Students("Shardul",7,22);

ans8.push(students1);
ans8.push(students2);
ans8.push(students3);
ans8.push(students4);
ans8.push(students5);
ans8.push(students6);

console.log(ans8);

