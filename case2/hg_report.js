"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: yelaina buford
   Date:   2/4/20
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>title</h1>";
gameReport += "<h2>By: manufacturer</h2>";
gameReport += "<im src='hg_id.png' alt='id' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</id></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</id></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</id></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</id></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</id></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</id></tr>";
gameReport += "</table>";
gameReport += itemSummary;

document.getElementsByTagName("article").innerHTML = gameReport;
 
var ratingsSum = 0;
