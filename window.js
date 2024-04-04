 var name = "kuddus"
function add(num1,num2){
    //implicitly making a variable global
    result = num1 + num2;
    //another way to make it implicitly 
    // window.result = num1 + num2;
    console.log("Result inside ",result);
    console.log('Name inside',name);
    function double(num){
        return num*2;

    }
    var total = double(result);
    return result;
}
//console.log('result outside',result);
var sum = add(1,2);
console.log(sum);
console.log("result outside",result);