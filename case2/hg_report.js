"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: yelaina buford
   Date:   2/4/20
   
   Filename: hg_report.js
	
*/
//displays game information 
var gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:" + itemManufacturer + "</h2>";
gameReport += "<im src='hg_" + itemID + ".png' alt='id' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;
//calculates the average amount of stars for the review
var ratingsSum = 0;
var ratingsCount = ratings.length;

for(var i = 0; i < ratings.length; i++){
   ratingsSum += ratings[i];
}
var ratingsAvg = ratingsSum / ratingsCount;

var ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg + "out of 5 stars (" + ratingsCount + " reviews)</h2>"; 
//reviews
for(var i = 0; i < ratings.length; i+1){
   ratingReport += "<div class='review'>"
   ratingReport += "<h1>" + ratingTitles[i] + "</h1>"
   ratingReport += "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
   ratingReport += "<tr><th>Rating</th><td>";
//display stars for the review 
   for( var i = 1; i < ratings.length; i++){
      ratingReport += "<img src='hg_star.png' />";
   }
   ratingReport += "</td></tr></table>" 
   ratingReport += ratingSummaries[i] + "</div>";
}


document.getElementsByTagName("aside").innerHTML = ratingReport;


