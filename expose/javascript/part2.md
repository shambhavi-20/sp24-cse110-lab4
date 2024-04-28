1. ***What will happen at line 12 and why? If the code causes an error, explain why.***
  
    Line 12 would print - 3

    This is because var uses function scope, which means that once it is defined, it can be used anywhere inside a function. Because i was defined as a var in the for loop, it can then be refrenced anywhere in the function. There are three values in the list, so i is incremented till 2. The loop completes when i = 3 and so 3 is printed out. 
   
2. ***What will happen at line 13 and why? If the code causes an error, explain why.***

   Line 13 would print - 150

    This is because var uses function scope, which means that once it is defined, it can be used anywhere inside a function. Because discountedPrice was defined as a var inside the for loop, it can then be refrenced anywhere in the function. The value assigned to discountedPrice was 300*0.5 = 150. 

3. ***What will happen at line 14 and why? If the code causes an error, explain why.***

   Line 14 would print - 150

    This is because var uses function scope, which means that once it is defined, it can be used anywhere inside a function. Because finalPrice was defined as a var inside the function, it can then be refrenced anywhere in the function. The value last assigned to finalPrice was (150*100)/100 = 150, which is what is printed out. 

4. ***What will this function return? Give a brief explanation why. If the code causes an error, explain why.***

   The function would return a list of calculated discounted values because that is what was calculted using the prices list. All the values in discounted are based on the prices list and the input discount given.
   
    discounted would have the value '[50, 100, 150]' in the case when the function is called using discountPrices([100,200,300], 0.5), which is what is returned.

5. ***What will happen at line 12 and why? If the code causes an error, explain why.***
  
    Line 12 would give an error, specifically a "ReferenceError". This is because i was declared and defined inside the for loop block so we cannot use it outside that block (i was defined using let). Although it seems like i was defnied outside the for loop, beacuse it is a special case i can only be used within the fior loop.  In line 12, i is being referenced, which was not declared in its block but in the for loop block. So, we get an error. 
   
6. ***What will happen at line 13 and why? If the code causes an error, explain why.***

    Line 13 would give an error, specifically a "ReferenceError". This is because discountedPrice was declared and defined inside the for loop block so we cannot use it outside that block. In line 13, discountedPrice is being referenced, which was not declared in its block but in the for loop block. So, we get an error.  

7. ***What will happen at line 14 and why? If the code causes an error, explain why.***

   Line 14 would print - 150

    This is because finalPrice is being referenced in the block it was defined in. Because finalPrice was defined inside the function if can be referenced and updated in the for loop block. Thus, the value last assigned to finalPrice inside the for loop was (150*100)/100 = 150, which is what is printed out. 

8. ***What will this function return? Give a brief explanation why. If the code causes an error, explain why.***

   The function would rerturn a list of calculated discounted values because that is what was calculted using the prices list. All the values in discounted are based on the prices list and the input discount given. Because discounte dwas defined inside the function if can be referenced and updated in the for loop block.
   
    discounted would have the value '[50, 100, 150]' in the case when the function is called using discountPrices([100,200,300], 0.5), which is what is returned.

9. ***What will happen at line 11 and why? If the code causes an error, explain why.***

    Line 11 would give an error, specifically a "ReferenceError". This is because i was declared and defined inside the for loop block so we cannot use it outside that block (i was defined using let). In line 11, i is being referenced, which was not declared in its block but in the for loop block. So, we get an error. 


10. ***What will happen at line 12 and why? If the code causes an error, explain why.***

    Line 12 would print - 3

    length is defined to is a const value inside the function and it is never updated. So, when it is refernced in the same block it was declared in, the length of prices list was printed, i.e. 3.


11. ****What will this function return? Give a brief explanation. If the code causes an error, explain why.***

   The function would rerturn a list of calculated discounted values because that is what was calculted using the prices list. All the values in discounted are based on the prices list and the input discount given. Because the elements inside discounted are being modified and the discounted list is not being reassigned, we do not get an error. 
   
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
    
    false + null: 0 since false is mapped to integer 0,null is mapped to integer 0 and 0 + 0 = 0.
   
    '3' + undefined: '3undefined' since undefined is converted into a string 'undefined' and is contenated to '3'. 
   
    '3' - undefined: NaN because of the - sign undefined is NaN and 3 connot be converted into an integer. So, we get NaN as the final answer.

14. ***Comparison***
    '2' > 1: true since integers map to their exact string representation and then just compared as integers.
    
    '2' < '12': false as the first character of '12' is less that '2' usinf string comparision.
    
    2 == '2': true since integers map to their exact string representation and then just compared as integers.
    
    2 === '2': false because the types of 2 and '2' are different.
    
    true == 2: false since true turns into 1 and 1 is not equal to 2.
    
    true === Boolean(2): true since a 2 number would be converted to true using Boolean() and the values would be compared after that.

15. Explain the difference between the == and === operators.

    == compares the values of two variables after doing the type conversions internally if required. === compares the values of two variables without doing type conversions, i.e it is a strict equality checker.
