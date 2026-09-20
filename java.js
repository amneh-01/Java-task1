
const name =prompt(" Enter your name");
const age =prompt(" Enter your age");
const gender =prompt(" Enter your gender");


if( gender === "male" )
{
   Text = `welcom  Mr.${name}`;
}

else if( gender ==="female")
{
   Text(`welcom  Ms.${name}`);
}

else
{
  Text(`welcom ${name}`);
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


 const order= prompt( "enter  your order : Burger , Shawarma , Zinger " );
 
if( order === "Burger" )
{
   alert ( "Your order is being prepared");
}

else if( order ==="Shawarma")
{
    alert ( "Your order is being prepared");
}

else if( order ==="Zinger")  
{
   alert ( "Your order is being prepared");
}

else
{
alert("Invalid order");

}

