var nam={
    fname:"dharani",
    lname:"R",
    age:21,
    contact:3245678,
};

var arr_key=Object.keys(nam);
var arr_value=Object.values(nam);
{
    console.log(arr_key)
    console.log(arr_value)
}

for(i=0;i<arr_value.length;i++){
    console.log(arr_key[i]+ " : " +arr_value[i])
}