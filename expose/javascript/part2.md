1. ***What will happen at line 12 and why? If the code causes an error, explain why.***
  
    Line 12 would print - 3

    This is because var uses function scope, which means that once it is defined, it can be used anywhere inside a function. Because i was defined as a var in the for loop, it can then be referenced anywhere in the function. There are three values in the list, so i is incremented till 2. The loop completes when i = 3 and so 3 is printed out. 
   
2. ***What will happen at line 13 and why? If the code causes an error, explain why.***

   Line 13 would print - 150

    This is because var uses function scope, which means that once it is defined, it can be used anywhere inside a function. Because discountedPrice was defined as a var inside the for loop, it can then be referenced anywhere in the function. The value assigned to discountedPrice was 300*0.5 = 150. 

3. ***What will happen at line 14 and why? If the code causes an error, explain why.***

   Line 14 would print - 150

    This is because var uses function scope, which means that once it is defined, it can be used anywhere inside a function. Because finalPrice was defined as a var inside the function, it can then be referenced anywhere in the function. The value last assigned to finalPrice was (150*100)/100 = 150, which is what is printed out. 

4. ***What will this function return? Give a brief explanation why. If the code causes an error, explain why.***

   The function would return a list of calculated discounted values because that is what was calculated using the prices list. All the values in discounted are based on the prices list and the input discount given.
   
    discounted would have the value '[50, 100, 150]' in the case when the function is called using discountPrices([100,200,300], 0.5), which is what is returned.

5. ***What will happen at line 12 and why? If the code causes an error, explain why.***
  
    Line 12 would give an error, specifically a "ReferenceError". This is because i was declared and defined inside the for loop block so we cannot use it outside that block (i was defined using let). Although it seems like i was defined outside the for loop because it is a special case i can only be used within the for loop.  In line 12, i is being referenced, which was not declared in its block but in the for loop block. So, we get an error. 
   
6. ***What will happen at line 13 and why? If the code causes an error, explain why.***

    Line 13 would give an error, specifically a "ReferenceError". This is because discountedPrice was declared and defined inside the for loop block so we cannot use it outside that block. In line 13, discountedPrice is being referenced, which was not declared in its block but in the for loop block. So, we get an error.  

7. ***What will happen at line 14 and why? If the code causes an error, explain why.***

   Line 14 would print - 150

    This is because finalPrice is being referenced in the block it was defined in. Because finalPrice was defined inside the function, it can be referenced and updated in the for loop block. Thus, the value last assigned to finalPrice inside the for loop was (150*100)/100 = 150, which is what is printed out. 

8. ***What will this function return? Give a brief explanation why. If the code causes an error, explain why.***

   The function would return a list of calculated discounted values because that is what was calculated using the prices list. All the values in discounted are based on the prices list and the input discount given. Because discounted was defined inside the function, it can be referenced and updated in the for loop block.
   
    discounted would have the value '[50, 100, 150]' in the case when the function is called using discountPrices([100,200,300], 0.5), which is what is returned.

9. ***What will happen at line 11 and why? If the code causes an error, explain why.***

    Line 11 would give an error, specifically a "ReferenceError". This is because i was declared and defined inside the for loop block so we cannot use it outside that block (i was defined using let). In line 11, i is being referenced, which was not declared in its block but in the for loop block. So, we get an error. 


10. ***What will happen at line 12 and why? If the code causes an error, explain why.***

    Line 12 would print - 3

    length is defined to be a const value inside the function and it is never updated. So, when it is referenced in the same block it was declared in, the length of the prices list was printed, i.e. 3.


11. ****What will this function return? Give a brief explanation. If the code causes an error, explain why.***

   The function would return a list of calculated discounted values because that is what was calculated using the prices list. All the values in discounted are based on the prices list and the input discount given. Because the elements inside discounted are being modified and the discounted list is not being reassigned, we do not get an error. 
   
    discounted would have the value '[50, 100, 150]' in the case when the function is called using discountPrices([100,200,300], 0.5), which is what is returned.    
    
12. ***Given the above Object, write the notation for:  (These should be in your part2.md)***
    
    a. Accessing the value of the name property in the student object: student.name
    
    b. Accessing the value of the Grad Year property in the student object: student['Grad Year']
    
    c. Calling the function for the greeting property in the student object: student.greeting()
    
    d. Accessing the name property of the object in the Favorite Teacher property in student: student.['Favorite teacher'].name
    
    e. Access index zero in the array of the courseLoad property of the student object: student.courseLoad[0]

13. ***Arithmetic***

    ‘3’ + 2: '32' since integers map to their exact string representation and then just concatenated.

    ‘3’ - 2: 1 since strings map to their exact integer representation and 3-2 is 1.
   
    3 + null: 3 since null is converted into integer 0 and 3 + 0 is 3.
   
    ‘3’ + null: '3null' since null is converted into a string 'null' and is contenated to '3'.
    
    true + 3: 4 since true maps to 1 and 1 + 3 is equal to 4. 
    
    false + null: 0 since false is mapped to integer 0, null is mapped to integer 0, and 0 + 0 = 0.
   
    '3' + undefined: '3undefined' since undefined is converted into a string 'undefined' and is contenated to '3'. 
   
    '3' - undefined: NaN because the - sign undefined is NaN and 3 cannot be converted into an integer. So, we get NaN as the final answer.

14. ***Comparison***
    '2' > 1: true since integers map to their exact string representation and then just compared as integers.
    
    '2' < '12': false as the first character of '12' is less than '2' using string comparison.
    
    2 == '2': true since integers map to their exact string representation and then are just compared as integers.
    
    2 === '2': false because the types of 2 and '2' are different.
    
    true == 2: false since true turns into 1 and 1 is not equal to 2.
    
    true === Boolean(2): true since a 2 number would be converted to true using Boolean() and the values would be compared after that.

15. ***Explain the difference between the == and === operators.***

    "==" compares the values of two variables after doing the type conversions internally if required. "===" compares the values of two variables without doing type conversions, i.e it is a strict equality checker.

16. In JS file part2-question16.js
    
17. ***If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.***

    The modifyArray returns an array with values double to the original array when the function is called. The array returned has the value: [ 2, 4, 6 ].

   
    modifyArray([1,2,3], doSomething) calls the modifyArray function. It defines a new array. After that, the for loop runs till the input array's length. On each iteration, doSomething is called and the returned value is pushed into the new array. doSomething is called using the function parameter and the value passed to doSomething is the value from the given array. After that, the calculated value is pushed into the new array and the new array is returned. 


18. In JS file part2-question18.js

19. ***What is the output of the above code?***

    Output is:
    
               1
               4
               3
               2
   
   As setTimeout() is asynchronous, which means that the timer would not pause execution of other functions. In the question, there are two setTimeouts, the second one of printed/executed right after the current synchronous code finishes running because the delay was 0 seconds. So, 3 is printed right after 4 is printed. However, the first one is added to the queue after 1000 milliseconds which causes it to be printed out 1 second later than the other three prints.  
