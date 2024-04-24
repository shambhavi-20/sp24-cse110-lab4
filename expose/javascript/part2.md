1. ***What will happen at line 12 and why? If the code causes an error, explain why.***

lab4-part1b-q2.png 
^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^


lab4-part1b-q3.png 
^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^


lab4-part1b-q4.png 
^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^


lab4-part1b-q5.png 
^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).


lab4-part1b-q6.png 
^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^


lab4-part1b-q7.png 
^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
 

lab4-part1b-q8.png 
^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^


lab4-part1b-q9.png 
^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^


lab4-part1b-q10.png 
^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^


lab4-part1b-q11.png 
^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
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
