1. What was the bug?

   Both num1 and num2 have string values. This results in result having a string type. The bug is the when num1 and num2 are added, they are treated are strings and concatenated instead being converted to integers and added. 
   
2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.

   We could either use parseInt() to convert num1 and num2 from strings to integers. We could also just multiply num1 and num2 by 1 which converts them into integers beacuse of the type conversions. To showcase both in my fix, I have converted num1 to an integer using parseInt and num2 to an integer by numtiply by 1.
