function enterc(){
    document.getElementById("entersomething").innerHTML = "";
    let text=document.getElementById("cel").value;
    let x=text[(text.length)-1];
    if(x=='.' || Number.isInteger(Number.parseInt(x))){
        // x=Number.parseInt(x);
        document.getElementById("cel").value = text;
        console.log("1")
    }
    else{
        console.log("No")
        if(x=='='){
            cell=document.getElementById("cel").value.slice(0,(text.length)-1)
            document.getElementById("faren").value = eval(cell*9/5+32);
            document.getElementById("kel").value =eval(cell*1+273.15);
            console.log("2")
        }
        else{
            document.getElementById("faren").value = "";
            document.getElementById("entersomething").innerHTML = "INPUT INVALID";
            console.log("3")
        }
        // x=Number.parseInt(x)
    }
    // console.log(text)
    // console.log(typeof(text))
    // console.log(typeof(x))
    // console.log(x)
    // if(x>=0 || x<=9 || x=='.'){
    //     document.getElementById("cel").value = text;
    //     console.log("1")
    // }
    // else if(x=='='){
    //     document.getElementById("faren").value =eval(document.getElementById("cel").value*9/5+32);
    //     document.getElementById("kel").value = eval(document.getElementById("cel").value+273.15);
    //     console.log("2")
    // }
    // else{
    //     document.getElementById("cel").value = "";
    //     console.log("3")
    // }
}
function enterf(){
    console.log("faren");
    document.getElementById("entersomething").innerHTML = "";
    let text=document.getElementById("faren").value;
    let x=text[(text.length)-1];
    if(x=='.' || Number.isInteger(Number.parseInt(x))){
        // x=Number.parseInt(x);
        document.getElementById("faren").value = text;
        console.log("1")
    }
    else{
        console.log("No")
        if(x=='='){
            cell=document.getElementById("faren").value.slice(0,(text.length)-1)
            document.getElementById("cel").value = eval((cell-32)*5/9);
            document.getElementById("kel").value =eval(document.getElementById("cel").value*1+273.15);
            console.log("2")
        }
        else{
            document.getElementById("faren").value = "";
            document.getElementById("entersomething").innerHTML = "INPUT INVALID";
            console.log("3")
        }
    }
}
function enterk(){
    console.log("kelvin");
    document.getElementById("entersomething").innerHTML = "";
    let text=document.getElementById("kel").value;
    let x=text[(text.length)-1];
    if(x=='.' || Number.isInteger(Number.parseInt(x))){
        // x=Number.parseInt(x);
        document.getElementById("kel").value = text;
        console.log("1")
    }
    else{
        console.log("No")
        if(x=='='){
            cell=document.getElementById("kel").value.slice(0,(text.length)-1)
            document.getElementById("cel").value = eval(cell-273.15);
            document.getElementById("faren").value =eval((cell-273.15)*9/5+32);
            console.log("2")
        }
        else{
            document.getElementById("faren").value = "";
            document.getElementById("entersomething").innerHTML = "INPUT INVALID";
            console.log("3")
        }
    }
}

 function ans(){
    if(document.getElementById("faren").value=='' && document.getElementById("cel").value=='' && document.getElementById("kel").value=='')
    {
        document.getElementById("entersomething").innerHTML = "INPUT INVALID";
    }
    else if(document.getElementById("faren").value=='' && document.getElementById("cel").value!='' && document.getElementById("kel").value=='')
    {
        document.getElementById("faren").value = eval(document.getElementById("cel").value*9/5+32);
        document.getElementById("kel").value =eval(document.getElementById("cel").value*1+273.15);
    }
    else if(document.getElementById("faren").value!='' && document.getElementById("cel").value=='' && document.getElementById("kel").value=='')
    {
        cell=document.getElementById("faren").value
        document.getElementById("cel").value = eval((cell-32)*5/9);
        document.getElementById("kel").value =eval(document.getElementById("cel").value*1+273.15);
    }
    else{
        cell=document.getElementById("kel").value
        document.getElementById("cel").value = eval(cell-273.15);
        document.getElementById("faren").value =eval((cell-273.15)*9/5+32);
    }
 }
