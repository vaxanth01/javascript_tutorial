var engilsh=12;
var tamil=98;
var maths=92;
var science=92;
var social=62;
var total=engilsh+tamil+maths+science+social;
var average=total/5;

console.log("total :"+total);
console.log("average :"+average);

if(tamil>=35 && engilsh>=35 && maths>=35 && science>=35 && social>=53){
    console.log("pass")
 
    if(total>90){

        console.log("A grade")}

    else if(total>80){

        console.log("b grade");
    }
    else if(total>70){

        console.log("c grade") }

    else
    {
        console.log("d grade ")
    }

}

else{
    console.log("Fail :"+total);
    console.log("No grade :"+average);
}


