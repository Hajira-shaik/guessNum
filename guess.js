var c=0;
var g = Math.floor(Math.random()*100+1);
check=()=>
{
    var n = parseInt(document.getElementById("num").value);
   if(n>g)
    {
        document.getElementById("result").textContent=("Wrong Guess!!,Try with a Smaller Number......");
        c=c+1;
    }
    else if(n<g)
    {
        document.getElementById("result").textContent=("Wrong Guess!!,Try with a Greater Number......");
        c=c+1;
    }
    else if(n==g)
    {
    document.getElementById("result").textContent=("Congratulations!!,you have got the number in "+c+" tries");
    }
    else{
        document.getElementById("result").textContent=("Please Enter the Number to play...");
    }
}