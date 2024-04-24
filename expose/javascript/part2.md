12. ***Given the above Object, write the notation for:  (These should be in your part2.md)***
    
    a. Accessing the value of the name property in the student object: student.name
    
    b. Accessing the value of the Grad Year property in the student object: student['Grad Year']
    
    c. Calling the function for the greeting property in the student object: student.greeting()
    
    d. Accessing the name property of the object in the Favorite Teacher property in student: student.['Favorite teacher'].name
    
    e. Access index zero in the array of the courseLoad property of the student object: student.courseLoad[0]

13. Arithmetic
   ‘3’ + 2: '32' since integers map to their exact string representation and then just concatenated.

   ‘3’ - 2: 1 since strings map to their exact integer representation and 3-2 is 1.
   
   3 + null: 3 since null is converted into integer 0 and 3 + 0 is 3.
   
   ‘3’ + null: '3null' since null is converted into a string 'null' and is contenated to '3'.
   
   true + 3: 4 since true maps to 1 and 1 + 3 is equal to 4. 
   
   false + null: 0 since false is mapped to integer 0,null is mapped to integer 0 and 0 + 0 = 0.
   
   '3' + undefined: '3undefined' since undefined is converted into a string 'undefined' and is contenated to '3'. 
   
   '3' - undefined: NaN because of the - sign undefined is NaN and 3 connot be converted into an integer. So, we get NaN as the final answer.
