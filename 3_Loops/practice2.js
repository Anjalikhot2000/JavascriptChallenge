let num=20;
let g_num=prompt("Guess the number");
while(num!=g_num){
if (num==g_num){
    console.log("Number is matched");
    break;
}
else if(g_num>num){
    g_num=prompt("Entered number is greater than the actual number,enter again");
}
else{
    g_num=prompt("Entered number is smaller than the actual number,enter again");
}
}