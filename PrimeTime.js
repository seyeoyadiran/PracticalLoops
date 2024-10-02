/* 
Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.
*/


//Figuring out prime numbers

let numArr = [];
let n = 13 ;
n  = n + 1;
let prime = false;


//Process for finding a prime number
while(prime === false && n > 0 ){

//Check the factors of the number
    for(let i = 1; i <= n; i++)
    {
        if(n % i === 0){
            //Storing factors in the numArr
            numArr.push(i);
        }
    }
    if (numArr.length === 2) 
    {
        prime = true;
        console.log(n)
    } 
    else 
    {
        //Increment one and empty array 
        n++;
        numArr = []
    }
}







