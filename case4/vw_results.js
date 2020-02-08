"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: yelaina buford 
   Date:   2/5/20
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
//displays race name 
var reportHTML = "<h1>" + raceTitle + "</h1>";

for(var i = 0; i < race.length; i++){
   var totalVotes = 0;
   reportHTML += "<table>";
   reportHTML += "<caption>" + [i] + "</caption>";
   reportHTML += "<tr><th>Candidate</th><th>Votes</th></tr>";
   reportHTML += candidateRows([i], totalVotes);
   reportHTML += "</table>"
}

document.getElementsByTagName("section").innerHTML = reportHTML;

//displays candidate's infomation
function candidateRows(raceNum, totalVotes){
   var rowHTML = "";
   for(var j = 0; j < candidate.length; j+2){
      var candidateName = candidate[raceNum][j];
      var candidateParty = party[raceNum][j];
      var candidateVotes = votes[raceNum][j];
      var candidatePercent = calcPercent(candidateVotes,totalVotes);
      rowHTML += "<tr>";
      rowHTML += "<td>" + candidateName + "(" + candidateParty + ")</td>"
      rowHTML += "<td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>"
      for(var k = 0; k < calcPercent; k++){
         createBar(candidateParty, candidatePercent);
      }
      rowHTML += "</tr>";

      return rowHTML;
   }
   
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}
//displays vote precentages 
function createBar(partyType){
   var barHTML = "";
   if(partyType === "D"){
      barHTML += "<td class='dem'></td>"; 
   }if(partyType === "R"){
      barHTML += "<td class='rep'></td>"; 
   }if(partyType === "I"){
      barHTML += "<td class='ind'></td>"; 
   }
   return barHTML;
}

