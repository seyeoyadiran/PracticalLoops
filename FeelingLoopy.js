/* 

As a final task, solve the following practical problem regarding string processing.
Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.
CSV data looks like this:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26
As you may have guessed, these values being “comma-separated” means that each comma is also a delimiter. This is why this type of data is traditionally viewed in tables. Here is how the data looks once fully parsed:

*/

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

const testData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26 "

let myData = testData.split("\n")
console.log(testData);

let rows = myData.toString();
let sepRows = rows.split(",");

for(let  i = 0; i < sepRows.length; i++){
    cell1 = sepRows[i];
    cell2 = sepRows[i+1]
    cell3 = sepRows[i+2]
    cell4 = sepRows[i+3]

    console.log(   `${cell1}  ${cell2}  ${cell3}  ${cell4}`)
    i = i+ 3
}
