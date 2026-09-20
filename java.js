
let name =prompt(" Enter your name");
let age =prompt(" Enter your age");
let gender =prompt(" Enter your gender");

let Text= "";

if( gender === "male" )
{
   Text = "welcom  Mr. " + name;
}

else if( gender ==="female")
{
   Text = "welcom  Ms. " + name;
}

else
{
Text = "welcom  " + name;
}

document.write(Text);

if(age >= 16)
{
    document.write("Continue with the order");
}
else
{
  document.write("You are not eligible to place an order");
}


 let order= prompt( "enter  your order : Burger , Shawarma , Zinger " );
 let valid=false;
 
if(meal =="Burger" || meal =="Shawarma" || meal=="Zinger")
{
    alert("Your order is being prepared")
    valid=true;
}

else
{
    alert("Invalid order. Please try again")
    valid=false;
}


if(Age>=18 && orderIsValid){
    console.log("Order confirmed");
}
else if(Age<18 ||(orderIsValid==false)){
    alert("Order requires verification");

}


document.write("Customer Name :"+name);
document.write("<br>");
document.write("Age:"+age);
document.write("<br>");
document.write("Gender:"+gender)
document.write("<br>");
document.write("Order :"+order);
document.write("<br>");
document.write("isAvailable:"+orderIsValid);
document.write("<br>");
document.write("<br>");