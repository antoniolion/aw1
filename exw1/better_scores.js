/*# Exercise 1: Better Scores
_Goal: basic handling of JavaScript arrays_

Develop a small JavaScript program to manage the scores given to your user in a question-and-answer website (e.g., StackOverflow). Scores are integer numbers, and they may be negative. You should:
 
- Define an array with all the scores you received in chronological order. For the moment:
  - Embed the scores directly in the source code.
  - Ignore the question, answer, and date that generated the score.$# Exercise 1: Better Scores
_Goal: basic handling of JavaScript arrays_ */
"use strict";
const scores = [-20, -5, -1, 100, -3, 30, 50];
const betterScores = [];
let NN = 0;
/*
    - Duplicate the array, but:
  - Eliminate all negative scores (call `NN` the number of negative scores that are deleted).
  - Eliminate the two lowest-ranking scores.
  - Add `NN+2` new scores, at the end of the array, with a value equal to the (rounded) average of the existing scores.
   */
for (let s of scores) {// per array e oggetti iterabili of, per gli oggetti in 
    if (s >= 0) {
        betterScores.push(s); // push add in queue, pop removes the last element in the queue
    }
}
NN = scores.length - betterScores.length;

let minScore = Math.min(...betterScores);
let index = betterScores.indexOf(minScore);
betterScores.splice(index, 1);
minScore = Math.min(...betterScores);
index = betterScores.indexOf(minScore);
betterScores.splice(index, 1);
let avg=0;
for (let s of betterScores){
 avg+=s;   
}
avg=avg/betterScores.length;
let average = Math.round(avg);
for (let i = 0; i < NN + 2; i++) {
    betterScores.push(average);
}

console.log(scores);
console.log(betterScores);
