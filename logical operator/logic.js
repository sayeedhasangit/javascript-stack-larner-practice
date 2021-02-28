var a  = 10
var b = 20
var c = 30
var d = 40


if (a > b && c > d){
    console.log("a is greter then b and c is geater then d");

}
else{
    console.log("at least one condition is false");

}



if (a > b || c > d){
    console.log("a is greter then b or c is geater then d");

}
else{
    console.log("at least one condition is false");
    
}


var check = !(a > b);
console.log(check);