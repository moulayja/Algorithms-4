/*
This Triangular Number Sequence is generated from a pattern of dots that form a triangle. 
The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15.
Write a function that converts n number of places with its corresponding number.
*/
const triangle = n => n * (n + 1) / 2;