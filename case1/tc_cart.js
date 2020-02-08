"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: yelaina buford
   Date:   2/3/20
   
   Filename: tc_cart.js
	
*/
//top row of the table
var orderTotal = 0;
var cartHTML = "<table>";
cartHTML += "<tr>";
cartHTML += "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>";
cartHTML += "</tr>";
//displays the items in the cart
for(var i = 0; i < item.length; i++){
   cartHTML += "<tr>";
   cartHTML += "<td><img src='tc_" + item[i] + ".png' alt='item' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   //calculates the total of all th items 
   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   orderTotal += itemCost;
}
//displays the total of all the items in the cart
cartHTML += "<tr>";
cartHTML += "<td colspan='4'>subtotal</td>";
cartHTML += "<td>" + orderTotal + "</td>";
cartHTML += "</tr>";
cartHTML += "</table>";

document.getElementById("cart").innerHTML = cartHTML;
